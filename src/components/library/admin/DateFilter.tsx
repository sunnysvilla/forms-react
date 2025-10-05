import {
  Button,
  Popover,
  Portal,
  type ConditionalValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { Calendar } from "react-date-range";

interface Props {
  label: string;
  date: Date | null;
  onChange: (date: Date) => void;
  minDate?: Date;
  placement?: "right" | "left" | "top" | "bottom";
  variant?: ConditionalValue<
    "outline" | "surface" | "solid" | "subtle" | "ghost" | "plain" | undefined
  >;
}

const DateFilter = ({
  date,
  onChange,
  label,
  placement = "bottom",
  minDate,
  variant = "subtle",
}: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover.Root
      positioning={{ placement: placement }}
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <Popover.Trigger asChild>
        <Button w="full" variant={variant} borderRadius="xl">
          {label}
        </Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content borderRadius="xl">
            <Popover.Arrow />
            <Popover.Body py={0}>
              <Calendar
                className="checkIn-picker"
                date={date || new Date()}
                onChange={(date) => {
                  onChange(date);
                  setOpen(false);
                }}
                minDate={minDate}
              />
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
};

export default DateFilter;
