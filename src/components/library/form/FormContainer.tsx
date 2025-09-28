import { Flex } from "@chakra-ui/react";
import type { JSX, ReactNode } from "react";
import FormHeader from "./FormHeader";

interface Props {
  children: ReactNode[] | JSX.Element[];
  tabIndex: number;
}

const HEADINGS = [
  {
    tag: "Welcome to,",
    title: "Macify",
    subtitle: "Let's simply bookings!",
  },
  {
    title: "The homies count!",
    subtitle: "You can always come back and add or remove your homies :)",
  },
  {
    tag: "Alright now,",
    title: "Upload the proofs",
    subtitle: "The proof stays confidential between us",
  },
  {
    tag: "We are waiting, now please",
    title: "Enter the details",
    subtitle: "Again, no sharing :)",
  },
  {
    tag: "When are you planning to",
    title: "CheckIn?",
    subtitle: "",
  },
  {
    tag: "Everything's fine, one last step",
    title: "Payment Proof",
    subtitle: "We would appreciate so much! :)",
  },
];

const FormContainer = ({ children, tabIndex }: Props) => {
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
      gap={8}
      bg="gray.100"
      borderRadius={40}
      id="booking-container"
    >
      <FormHeader heading={HEADINGS[tabIndex]} />
      <Flex
        flexDir="column"
        gap={6}
        w="100%"
        maxW="100%"
        align="start"
        justify="start"
        textAlign="left"
        p={{ base: 12, md: 8 }}
        borderRadius="20px"
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default FormContainer;
