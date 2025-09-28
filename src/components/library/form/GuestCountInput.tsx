import { Field, Input, VStack } from "@chakra-ui/react";

const GuestCountInput = () => {
  return (
    <VStack gap={4} w="100%">
      <Field.Root required>
        <Field.Label>
          Guest Count <Field.RequiredIndicator />
        </Field.Label>
        <Input
          placeholder="Guest count"
          borderRadius="2xl"
          colorPalette="purple"
          size={{ base: "lg", md: "xl" }}
          variant="subtle"
        />
      </Field.Root>
    </VStack>
  );
};

export default GuestCountInput;
