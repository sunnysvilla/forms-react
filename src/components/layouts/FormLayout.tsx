import { Flex } from "@chakra-ui/react";
import WelcomeScreen from "../library/form/WelcomeScreen";

const FormLayout = () => {
  return (
    <Flex w="100%" minH="100vh" maxH="100vh" justify="center" align="center">
      <Flex
        w={{ lg: "40%", md: "50%", base: "90%" }}
        minH="60vh"
        boxShadow="lg"
        align="center"
        justify="center"
        flexDir="column"
        borderRadius="20px"
        border="1px solid"
        borderColor="gray.100"
      >
        <WelcomeScreen />
      </Flex>
    </Flex>
  );
};

export default FormLayout;
