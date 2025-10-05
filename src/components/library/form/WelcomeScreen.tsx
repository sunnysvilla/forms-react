import { Heading, Text, VStack } from "@chakra-ui/react";

const WelcomeScreen = () => {
  return (
    <VStack align="start" gap={4}>
      <Heading fontSize={{ base: "2xl", md: "3xl" }} fontWeight="semibold">
        Macify!
      </Heading>

      <Text fontSize={{ base: "sm", md: "md" }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
        sint quia adipisci facilis consequuntur rem modi incidunt natus nobis
        molestiae.
      </Text>
    </VStack>
  );
};

export default WelcomeScreen;
