import { Box, Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { TbConfetti } from "react-icons/tb";

const WelcomeScreen = () => {
  return (
    <Flex
      maxW="100%"
      flexDir="column"
      align="center"
      flexGrow={1}
      justify="end"
      borderRadius="20px"
      overflow="clip"
      pos="relative"
      p={6}
    >
      <Box
        inset={0}
        opacity={0.9}
        pos="absolute"
        bg="url(https://images.unsplash.com/photo-1757418254008-1647eb0afe04?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
      />
      <Flex
        color="white"
        flexDir="column"
        gap={2}
        w="max-content"
        maxW="100%"
        align="center"
        textAlign="left"
        className="glass-bg"
        p={{ base: 4, md: 4 }}
        borderRadius="20px"
      >
        <Heading w="100%">
          Welcome to <strong>Macify!</strong>
        </Heading>
        <Text fontSize="sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          sint quia adipisci facilis consequuntur rem modi incidunt natus nobis
          molestiae.
        </Text>
        <Button
          w="100%"
          mt={2}
          borderRadius="xl"
          colorPalette="purple"
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
