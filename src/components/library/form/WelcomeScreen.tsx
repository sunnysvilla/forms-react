import { Heading, Text, VStack } from "@chakra-ui/react";

const WelcomeScreen = () => {
  return (
    <VStack align="start" gap={4}>
      <Heading fontSize={{ base: "2xl", md: "3xl" }} fontWeight="semibold">
        Sunnys Group
      </Heading>

      <Text fontSize={{ base: "sm", md: "md" }}>
        Welcome to your stay! Upload your ID to complete verification and enjoy
        a trusted, hassle-free check-in.
      </Text>
    </VStack>
  );
};

export default WelcomeScreen;
