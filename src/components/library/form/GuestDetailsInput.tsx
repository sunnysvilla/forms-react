import { VStack } from "@chakra-ui/react";
import BoxInput from "../../utils/Input/BoxInput";

const GuestDetailsInput = () => {
  return (
    <VStack gap={4} w="100%">
      <BoxInput
        name="name"
        label="Name"
        bgImg="https://img.icons8.com/?size=100&id=kPeBecos1GOu&format=png&color=000000"
      />
      <BoxInput
        name="guests"
        label="Guest Count"
        placeholder="Ex. 5"
        type="number"
        bgImg="https://img.icons8.com/?size=100&id=WEaZHxccFm5x&format=png&color=000000"
      />
    </VStack>
  );
};

export default GuestDetailsInput;
