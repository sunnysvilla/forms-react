import {
  Button,
  HStack,
  Icon,
  Popover,
  Portal,
  Spinner,
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
      startDate: new Date(),
      endDate: undefined,
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

  if (status === "pending" || fetchStatus === "fetching") return <Spinner />;

  return (
    <HStack>
      {status === "success" && fetchStatus === "idle" && (
        <PropertySelector properties={data.data.data} />
      )}

      <Popover.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
        <Popover.Trigger asChild>
          <Button variant="subtle" borderRadius="xl">
            {startDate && endDate
              ? `${format(new Date(startDate), "dd/MM/yy")} - 
                ${format(new Date(endDate), "dd/MM/yy")}`
              : "Range"}
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
            <Popover.Content borderRadius="xl" minW="max">
              <Popover.Arrow />
              <Popover.Body>
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
