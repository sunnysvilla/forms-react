import { Box, Text, VStack } from "@chakra-ui/react";

interface Props {
  options: string[];
}

const MonthSelector = ({ options }: Props) => {
  return (
    <Box pos="relative" h={24} overflow="clip" borderRadius="2xl">
      <VStack
        h="100%"
        w="100%"
        overflowY="scroll"
        scrollSnapType="y mandatory"
        gap={0}
        align="center"
        bg="white"
      >
        {["", ...options, ""].map((option) => (
          <Box
            key={option}
            scrollSnapAlign="center"
            w="100%"
            h={12}
            minH={8}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="md"
          >
            <Text fontWeight="bold">{option}</Text>
          </Box>
        ))}
      </VStack>

      {/* Top gradient */}
      <Box
        pos="absolute"
        top={0}
        left={0}
        w="100%"
        h={50}
        pointerEvents="none"
        bg="linear-gradient(180deg, white 2%, transparent 100%)"
      />

      {/* Bottom gradient */}
      <Box
        pos="absolute"
        bottom={0}
        left={0}
        w="100%"
        h={12}
        pointerEvents="none"
        bg="linear-gradient(0deg, white 2%, transparent 100%)"
      />
    </Box>
  );
};

export default MonthSelector;
