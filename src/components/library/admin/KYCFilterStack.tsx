import {
  Button,
  HStack,
  Icon,
  IconButton,
  Popover,
  Portal,
  VStack,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { useState } from "react";
import { DateRange, type Range, type RangeKeyDict } from "react-date-range";
import { LuCalendarMinus, LuCalendarPlus, LuCircleX } from "react-icons/lu";
import { useAdminGetProperty } from "../../hooks/admin/useProperty";
import useKYCQuery from "../../store/kycQuery";
import PropertySelector from "./PropertySelector";

const KYCFilterStack = () => {
  const { data, status, fetchStatus } = useAdminGetProperty();
  const { startDate, endDate, setStartDate, setEndDate } = useKYCQuery();

  const [months, setMonths] = useState(1);
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<Range[]>([
    {
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      key: "selection",
    },
  ]);

  const applyDateFilter = () => {
    if (state.length > 0 && state[0].startDate && state[0].endDate) {
      setStartDate(state[0].startDate);
      setEndDate(state[0].endDate);
    }
    setOpen(false);
  };

  return (
    <HStack w="100%" align="end" justify="end">
      {status === "success" && fetchStatus === "idle" && (
        <PropertySelector properties={data.data.data} />
      )}

      <Popover.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
        <Popover.Trigger asChild>
          <Button
            colorPalette="bg"
            variant="surface"
            borderRadius="xl"
            loading={status === "pending" || fetchStatus === "fetching"}
            loadingText="Just a moment"
          >
            {startDate && endDate
              ? `${format(new Date(startDate), "dd/MM/yy")} - 
                ${format(new Date(endDate), "dd/MM/yy")}`
              : "Select Range"}
            {startDate && endDate && (
              <Icon
                as={LuCircleX}
                boxSize={4}
                onClick={(e) => {
                  e.stopPropagation();
                  setStartDate("");
                  setEndDate("");
                }}
              />
            )}
          </Button>
        </Popover.Trigger>
        <Portal>
          <Popover.Positioner>
            <Popover.Content borderRadius="2xl" minW="max">
              <Popover.Arrow />
              <Popover.Body p={2}>
                <VStack gap={0}>
                  <DateRange
                    showPreview
                    months={months}
                    direction="horizontal"
                    editableDateInputs={true}
                    onChange={(item: RangeKeyDict) =>
                      setState([item.selection])
                    }
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                  />

                  <HStack w="100%" justify="end" align="end">
                    <IconButton
                      rounded="xl"
                      size="sm"
                      variant="surface"
                      onClick={() => setMonths((prev) => (prev === 1 ? 2 : 1))}
                    >
                      <Icon
                        as={months === 1 ? LuCalendarPlus : LuCalendarMinus}
                      />
                    </IconButton>
                    <Button
                      mt={3}
                      alignSelf="end"
                      size="sm"
                      rounded="xl"
                      onClick={applyDateFilter}
                    >
                      Apply
                    </Button>
                  </HStack>
                </VStack>
              </Popover.Body>
            </Popover.Content>
          </Popover.Positioner>
        </Portal>
      </Popover.Root>
    </HStack>
  );
};

export default KYCFilterStack;
