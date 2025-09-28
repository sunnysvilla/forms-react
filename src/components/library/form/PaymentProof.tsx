import { Field, Input, VStack } from "@chakra-ui/react";

const PaymentProofInput = () => {
  return (
    <VStack gap={4} w="100%" align="start">
      <Field.Root required>
        <Field.Label>
          Payment Proof <Field.RequiredIndicator />
        </Field.Label>
        <Input
          placeholder="Payment Proof"
          borderRadius="xl"
          size={{ base: "md", lg: "lg" }}
          variant="subtle"
        />
      </Field.Root>
    </VStack>
  );
};

export default PaymentProofInput;
