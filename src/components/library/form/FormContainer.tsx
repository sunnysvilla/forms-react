import { Flex } from "@chakra-ui/react";
import type { JSX, ReactNode } from "react";
import FormHeader from "./FormHeader";

interface Props {
  children: ReactNode[] | JSX.Element[];
  tabIndex: number;
}

const FormContainer = ({ children }: Props) => {
  return (
    <Flex
      p={4}
      pb={0}
      py={12}
      gap={0}
      w={500}
      maxW={500}
      flexDir="column"
      flexGrow={1}
      pos="relative"
      borderRadius={40}
    >
      <FormHeader />
      <Flex
        pt={6}
        pb={52}
        bg="gray.900"
        border="1px solid"
        borderColor="gray.800"
        px={8}
        flexDir="column"
        gap={8}
        w="100%"
        maxW="100%"
        justify="center"
        textAlign="left"
        borderBottomRadius="20px"
        boxShadow="2xl"
        backdropFilter="blur(10px)"
        overflowY="clip"
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default FormContainer;
