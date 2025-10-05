import { Button, Menu, Portal } from "@chakra-ui/react";
import { useFormikContext } from "formik";
import { useState, useMemo } from "react";
import { type BookingFormValues } from "../../config/bookingFormConfig";

interface Props {
  label: string;
}

const TimePicker = ({ label }: Props) => {
  const [open, setOpen] = useState(false);
  const { values, setFieldValue } = useFormikContext<BookingFormValues>();

  // Generate time options: 00:00 → 23:30
  const timeOptions = useMemo(() => {
    const times: string[] = [];
    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m += 30) {
        const hh = h.toString().padStart(2, "0");
        const mm = m.toString().padStart(2, "0");
        times.push(`${hh}:${mm}`);
      }
    }
    return times;
  }, []);

  const arrivalDate = values.arrival ? new Date(values.arrival) : null;

  // Extract time to show on the button
  const formattedTime = arrivalDate
    ? `${arrivalDate.getHours().toString().padStart(2, "0")}:${arrivalDate
        .getMinutes()
        .toString()
        .padStart(2, "0")}`
    : "";

  const handleSelectTime = (time: string) => {
    if (!arrivalDate) return; // ensure a date exists before setting time

    const [hours, minutes] = time.split(":").map(Number);
    const updatedDate = new Date(arrivalDate);
    updatedDate.setHours(hours, minutes, 0, 0);

    setFieldValue("arrival", updatedDate.toISOString());
    setOpen(false);
  };

  return (
    <Menu.Root
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      positioning={{ placement: "bottom-start" }}
    >
      <Menu.Trigger asChild>
        <Button w="full" variant="surface" borderRadius="xl">
          {formattedTime || label}
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content maxH="300px" overflowY="auto" p={1}>
            {timeOptions.map((time) => (
              <Menu.Item
                key={time}
                value={time}
                onClick={() => handleSelectTime(time)}
              >
                {time}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default TimePicker;
