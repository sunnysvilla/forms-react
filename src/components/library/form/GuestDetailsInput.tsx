import { VStack } from "@chakra-ui/react";
import BoxInput from "../../utils/Input/BoxInput";

const GuestDetailsInput = () => {
  return (
    <VStack gap={1} w="100%">
      <BoxInput
        name="name"
        label="Name"
        size="sm"
        bgImg="https://img.icons8.com/?size=100&id=kPeBecos1GOu&format=png&color=000000"
        bottomRadius="0px"
      />
      <BoxInput
        name="guests"
        label="Guest Count"
        placeholder="Ex. 5"
        type="number"
        size="sm"
        bgImg="https://img.icons8.com/?size=100&id=WEaZHxccFm5x&format=png&color=000000"
        topRadius="0px"
      />
    </VStack>
  );
};

export default GuestDetailsInput;
