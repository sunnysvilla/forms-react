import { Box, HStack } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  children: React.ReactNode[];
}

const Slider = ({ children }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Box w="80%" mx="auto" position="relative" overflow="hidden">
      <HStack
        ref={containerRef}
        overflowX="auto"
        scrollSnapType="x mandatory"
        gap={6}
        w="100%"
        py={4}
        justify="flex-start"
        css={{
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {children.map((child, i) => (
          <Box key={i} flex="0 0 auto" scrollSnapAlign="center" w="200px">
            {child}
          </Box>
        ))}
      </HStack>

      <Box
        position="absolute"
        top="0"
        left="50%"
        transform="translateX(-50%)"
        w="200px"
        h="100%"
        pointerEvents="none"
        border="2px solid teal"
        borderRadius="full"
        bg="rgba(0, 128, 128, 0.05)"
      />
    </Box>
  );
};

export default Slider;
