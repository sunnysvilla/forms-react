import { Button, Flex, Heading, Icon, Text, VStack } from "@chakra-ui/react";
import { TbConfetti } from "react-icons/tb";

interface Props {
  next: () => void;
}

const WelcomeScreen = ({ next }: Props) => {
  return (
    <Flex
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
        w="max-content"
        maxW="100%"
        align="start"
        justify="start"
        textAlign="left"
        p={{ base: 4, md: 4 }}
        borderRadius="20px"
      >
        <VStack w="100%" align="start" fontSize={{ base: "sm", md: "md" }}>
          <Text color="gray.700"> Welcome to, </Text>
          <Heading fontSize={{ base: "2xl", sm: "4xl", md: "4xl", lg: "5xl" }}>
            <strong>Macify!</strong>
          </Heading>
        </VStack>

        <Text fontSize={{ base: "sm", md: "md" }} color="gray.700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          sint quia adipisci facilis consequuntur rem modi incidunt natus nobis
          molestiae.
        </Text>

        <Button
          mt={4}
          onClick={next}
          colorPalette="purple"
          borderRadius="full"
          size={{ base: "md", md: "lg" }}
        >
          Let's Get Started!
          <Icon as={TbConfetti} />
        </Button>
      </Flex>
    </Flex>
  );
};

export default WelcomeScreen;
