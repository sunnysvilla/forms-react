import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { LuCircleChevronLeft, LuCircleChevronRight } from "react-icons/lu";

interface Props {
  prev: () => void;
  next: () => void;
}

const GuestDetailsInput = ({ prev, next }: Props) => {
  return (
    <Flex
      w="100%"
      maxW="100%"
      flexDir="column"
      align="center"
      flexGrow={1}
      justify="space-around"
      overflow="clip"
      pos="relative"
      p={6}
    >
      <Flex
        flexDir="column"
        gap={8}
        w="100%"
        maxW="100%"
        align="start"
        justify="start"
        textAlign="left"
        p={{ base: 4, md: 4 }}
        borderRadius="20px"
      >
        <VStack w="100%" align="start">
          <VStack
            w="100%"
            gap={1}
            align="start"
            fontSize={{ base: "sm", md: "md" }}
          >
            <Text color="gray.700"> We are waiting, now please </Text>
            <Heading fontSize={{ base: "2xl", md: "3xl" }}>
              <strong>Enter the details</strong>
            </Heading>
          </VStack>

          <Text
            fontWeight="light"
            fontSize={{ base: "xs", md: "sm" }}
            color="gray.700"
          >
            Again, no sharing{`:)`}
          </Text>
        </VStack>

        <VStack gap={4} mt={4} w="100%" align="start">
          <HStack
            w="100%"
            height={60}
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

          <HStack gap={4}>
            <IconButton
              aria-label="Search database"
              borderRadius="full"
              onClick={prev}
              variant="subtle"
              colorPalette="purple"
              size={{ base: "sm", md: "md" }}
            >
              <LuCircleChevronLeft />
            </IconButton>
            <Button
              borderRadius="full"
              onClick={next}
              colorPalette="purple"
              size={{ base: "sm", md: "md" }}
            >
              Continue
              <Icon as={LuCircleChevronRight} />
            </Button>
          </HStack>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default GuestDetailsInput;
