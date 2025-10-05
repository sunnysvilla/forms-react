import { SimpleGrid, VStack } from "@chakra-ui/react";
import BoxInput from "../../utils/Input/BoxInput";
import DateFilter from "../admin/DateFilter";
import TimePicker from "../../utils/Input/TimePicker";
import { useFormikContext } from "formik";
import { type BookingFormValues } from "../../config/bookingFormConfig";
import { format } from "date-fns";

const GuestCountInput = () => {
  const {
    values: { arrival },
    setFieldValue,
  } = useFormikContext<BookingFormValues>();

  return (
    <VStack gap={1} w="100%">
      <BoxInput
        name="phone"
        label="Phone"
        placeholder="Phone"
        type="tel"
        bottomRadius="0"
        bgImg="https://img.icons8.com/?size=100&id=5XxqJLUsepb2&format=png&color=000000"
      />
      <BoxInput
        name="arrival"
        label="Arrival"
        placeholder="Enter Arrival Time"
        topRadius="0"
        bgImg="https://img.icons8.com/?size=100&id=wOOmdWtwVs0A&format=png&color=000000"
      >
        <SimpleGrid w="100%" columns={2} gap={4}>
          <DateFilter
            variant="surface"
            placement="right"
            date={arrival ? new Date(arrival) : new Date()}
            label={
              arrival ? format(new Date(arrival), "dd/MM/yyyy") : "Arrival Date"
            }
            onChange={(date) => {
              setFieldValue("arrival", String(date));
            }}
          />
          <TimePicker label="Select Time" />
        </SimpleGrid>
      </BoxInput>
    </VStack>
  );
};

export default GuestCountInput;
