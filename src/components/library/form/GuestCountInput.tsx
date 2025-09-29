import { SimpleGrid, VStack } from "@chakra-ui/react";
import BoxInput from "../../utils/Input/BoxInput";

const GuestCountInput = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} w="100%" gap={4}>
      <VStack gap={4} w="100%">
        <BoxInput
          name="name"
          label="Name"
          bgImg="https://img.icons8.com/?size=100&id=kPeBecos1GOu&format=png&color=000000"
        />
        <BoxInput
          name="guestCount"
          label="Guest Count"
          placeholder="Ex. 5"
          bgImg="https://img.icons8.com/?size=100&id=WEaZHxccFm5x&format=png&color=000000"
        />
      </VStack>
      <VStack gap={4} w="100%">
        <BoxInput
          name="phone"
          label="Phone"
          placeholder="Phone"
          bgImg="https://img.icons8.com/?size=100&id=5XxqJLUsepb2&format=png&color=000000"
        />
        <BoxInput
          name="checkInTime"
          label="Check In Time"
          placeholder="Enter CheckIn"
          bgImg="https://img.icons8.com/?size=100&id=wOOmdWtwVs0A&format=png&color=000000"
        />
      </VStack>
    </SimpleGrid>
  );
};

export default GuestCountInput;
