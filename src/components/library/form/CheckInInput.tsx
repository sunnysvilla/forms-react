import { Field, Input, VStack } from "@chakra-ui/react";

const CheckInInput = () => {
  return (
    <VStack gap={8} w="100%" align="start">
      <Field.Root required>
        <Field.Label>
          Check-In Date <Field.RequiredIndicator />
        </Field.Label>
        <Input
          placeholder="Guest count"
          borderRadius="xl"
          size={{ base: "md", lg: "lg" }}
          variant="subtle"
        />
      </Field.Root>

      <Field.Root required>
        <Field.Label>
          Check-In Time <Field.RequiredIndicator />
        </Field.Label>
        <Input
          placeholder="Guest count"
          borderRadius="xl"
          size={{ base: "md", lg: "lg" }}
          variant="subtle"
        />
      </Field.Root>
    </VStack>
  );
};

export default CheckInInput;
