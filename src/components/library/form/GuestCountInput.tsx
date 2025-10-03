import { VStack } from "@chakra-ui/react";
import BoxInput from "../../utils/Input/BoxInput";
import DatePicker from "../../utils/Input/DatePicker";

const GuestCountInput = () => {
  return (
    <VStack gap={4} w="100%">
      <BoxInput
        name="phone"
        label="Phone"
        placeholder="Phone"
        type="number"
        bgImg="https://img.icons8.com/?size=100&id=5XxqJLUsepb2&format=png&color=000000"
      />
      <BoxInput
        name="checkInTime"
        label="Check In Time"
        placeholder="Enter CheckIn"
        bgImg="https://img.icons8.com/?size=100&id=wOOmdWtwVs0A&format=png&color=000000"
      >
        <DatePicker />
      </BoxInput>
    </VStack>
  );
};

export default GuestCountInput;
