import { Box, Field, HStack, Input, VStack } from "@chakra-ui/react";

const ProofUploadInput = () => {
  return (
    <VStack gap={4} w="100%" align="start">
      <Field.Root required>
        <Field.Label>
          Upload Proofs <Field.RequiredIndicator />
        </Field.Label>
        <Input
          placeholder="Guest count"
          borderRadius="xl"
          size={{ base: "md", lg: "lg" }}
          variant="subtle"
        />
      </Field.Root>

      <HStack
        w="100%"
        height={40}
        borderRadius="xl"
        border="1px solid"
        bg="gray.100"
        borderColor="gray.200"
        p={4}
        gap={4}
        overflow="scroll"
      >
        <Box h="100%" aspectRatio="1/1" borderRadius="lg" bg="red.200" />
        <Box h="100%" aspectRatio="1/1" borderRadius="lg" bg="red.200" />
        <Box h="100%" aspectRatio="1/1" borderRadius="lg" bg="red.200" />
        <Box h="100%" aspectRatio="1/1" borderRadius="lg" bg="red.200" />
        <Box h="100%" aspectRatio="1/1" borderRadius="lg" bg="red.200" />
      </HStack>
    </VStack>
  );
};

export default ProofUploadInput;
