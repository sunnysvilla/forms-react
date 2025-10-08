import {
  Button,
  HStack,
  Icon,
  Popover,
  Portal,
  VStack,
} from "@chakra-ui/react";
import PropertySelector from "./PropertySelector";
import { useAdminGetProperty } from "../../hooks/admin/useProperty";
import { useState } from "react";
import { DateRange, type Range, type RangeKeyDict } from "react-date-range";
import useKYCQuery from "../../store/kycQuery";
import { format } from "date-fns";
import { LuCircleX } from "react-icons/lu";

const KYCFilterStack = () => {
  const { data, status, fetchStatus } = useAdminGetProperty();
  const { startDate, endDate, setStartDate, setEndDate } = useKYCQuery();

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
            // loading={status === "pending" || fetchStatus === "fetching"}
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
                    editableDateInputs={true}
                    onChange={(item: RangeKeyDict) =>
                      setState([item.selection])
                    }
                    moveRangeOnFirstSelection={false}
                    ranges={state}
                  />
                  <Button
                    mt={3}
                    alignSelf="end"
                    size="sm"
                    borderRadius="lg"
                    onClick={applyDateFilter}
                  >
                    Apply
                  </Button>
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
