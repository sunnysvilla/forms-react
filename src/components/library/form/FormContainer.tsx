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
      w="100%"
      maxW="100%"
      flexDir="column"
      align="center"
      flexGrow={1}
      justify="space-around"
      pos="relative"
      p={4}
      py={6}
      pb={0}
      gap={4}
      borderRadius={40}
      className="glass-bg"
    >
      <FormHeader />
      <Flex
        flexDir="column"
        gap={4}
        w="100%"
        maxW="100%"
        justify="center"
        textAlign="left"
        p={{ base: 4, md: 8 }}
        borderRadius="20px"
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default FormContainer;
