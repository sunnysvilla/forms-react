import { Box, HStack, VStack } from "@chakra-ui/react";

const GuestDetailsInput = () => {
  return (
    <VStack gap={4} w="100%" align="start">
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
        <Box h="100%" aspectRatio="1/1" borderRadius="lg" bg="purple.100" />
        <Box h="100%" aspectRatio="1/1" borderRadius="lg" bg="purple.100" />
        <Box h="100%" aspectRatio="1/1" borderRadius="lg" bg="purple.100" />
        <Box h="100%" aspectRatio="1/1" borderRadius="lg" bg="purple.100" />
      </HStack>
    </VStack>
  );
};

export default GuestDetailsInput;
