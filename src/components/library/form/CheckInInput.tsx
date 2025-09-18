import {
  Field,
  Flex,
  Heading,
  HStack,
  Icon,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Button, IconButton } from "@chakra-ui/react/button";
import { LuCircleChevronLeft, LuCircleChevronRight } from "react-icons/lu";

interface Props {
  prev: () => void;
  next: () => void;
}

const CheckInInput = ({ prev, next }: Props) => {
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
            <Text color="gray.700">When are you planning to</Text>
            <Heading fontSize={{ base: "2xl", md: "3xl" }}>
              <strong>Check In?</strong>
            </Heading>
          </VStack>
        </VStack>

        <VStack gap={6} mt={4} w="100%" align="start">
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

export default CheckInInput;
