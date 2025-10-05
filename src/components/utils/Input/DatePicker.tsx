import {
  Button,
  CloseButton,
  Dialog,
  HStack,
  Icon,
  Portal,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import BoxInput from "./BoxInput";
import { Calendar } from "react-date-range";
import { useState } from "react";
import { LuArrowLeft } from "react-icons/lu";
import { useFormikContext } from "formik";
import { initialBookingValues } from "../../config/bookingFormConfig";

const DatePicker = () => {
  const [dateSelected, isDateSelected] = useState<boolean>(false);
  const { values, setFieldValue } =
    useFormikContext<typeof initialBookingValues>();

  return (
    <Dialog.Root placement="center" motionPreset="slide-in-bottom" size="lg">
      <Dialog.Trigger asChild>
        <Button
          colorPalette="green"
          variant="subtle"
          size="sm"
          borderRadius="xl"
        >
          Pick a Date
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content w={{ base: "95%" }} borderRadius="2xl">
            <Dialog.Header p={{ base: 2, md: 4 }}>
              <Stack gap={0}>
                <Dialog.Title>Check-In Time</Dialog.Title>
                <Text color="gray">
                  Please select a {dateSelected ? "time" : "date"}{" "}
                </Text>
              </Stack>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Header>
            <Dialog.Body p={{ base: 2, md: 4 }}>
              <VStack>
                <BoxInput
                  label="Date"
                  name="arrival"
                  extraButton={
                    dateSelected && (
                      <Button
                        size="xs"
                        borderRadius="xl"
                        bg="gray.200"
                        variant="subtle"
                        onClick={() => isDateSelected(false)}
                      >
                        <Icon as={LuArrowLeft} />
                        Change Date
                      </Button>
                    )
                  }
                >
                  {!dateSelected ? (
                    <Calendar
                      className="checkIn-picker"
                      date={new Date(values["arrival"] || new Date())}
                      onChange={(date) => {
                        setFieldValue("arrival", date);
                        isDateSelected(true);
                      }}
                      minDate={new Date()}
                    />
                  ) : (
                    <HStack>
                      <BoxInput
                        label="Hours"
                        name="hours"
                        placeholder="Ex. 12"
                        type="number"
                      />
                      <BoxInput
                        label="Minutes"
                        name="minutes"
                        placeholder="Ex. 00"
                        type="number"
                      />
                      <BoxInput label="Period" name="period" />
                    </HStack>
                  )}
                </BoxInput>
              </VStack>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default DatePicker;
