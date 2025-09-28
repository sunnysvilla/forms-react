import { Heading, Text } from "@chakra-ui/react";

const WelcomeScreen = () => {
  return (
    <>
      <Heading
        fontWeight="medium"
        fontSize={{ base: "2xl", sm: "4xl", md: "4xl" }}
      >
        <strong>Macify!</strong>
      </Heading>

      <Text fontSize={{ base: "sm", md: "md" }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
        sint quia adipisci facilis consequuntur rem modi incidunt natus nobis
        molestiae.
      </Text>
    </>
  );
};

export default WelcomeScreen;
