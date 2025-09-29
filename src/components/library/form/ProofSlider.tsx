import { Box, HStack, Icon } from "@chakra-ui/react";
import { LuX } from "react-icons/lu";

const ProofCard = () => {
  return (
    <Box
      w={200}
      minW={240}
      h={180}
      p={4}
      borderRadius="xl"
      border="sm"
      borderColor="blue.100"
      bg="blue.50"
      pos="relative"
    >
      <Box
        p={1}
        pos="absolute"
        top={3}
        right={3}
        bg="white"
        lineHeight={0}
        w="max"
        borderRadius="full"
      >
        <Icon as={LuX} size="xs" />
      </Box>
    </Box>
  );
};

const ProofSlider = () => {
  return (
    <HStack w="100%" maxW="100%" overflowX="auto" minH="max" borderRadius="xl">
      <ProofCard />
      <ProofCard />
      <ProofCard />
      <ProofCard />
      <ProofCard />
      <ProofCard />
    </HStack>
  );
};

export default ProofSlider;
