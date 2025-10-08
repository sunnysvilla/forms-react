import { VStack } from "@chakra-ui/react";
import { type ReactNode } from "react";

const PageMiddleLayout = ({
  children,
  clip = false,
}: {
  children?: ReactNode;
  clip?: boolean;
}) => {
  return (
    <VStack
      w="100%"
      h="100vh"
      minH="100vh"
      overflow={clip ? "clip" : "auto"}
      pos="relative"
      px={{ base: 2, md: 0 }}
      py={{ base: 2, md: 20 }}
    >
      {children}
    </VStack>
  );
};

export default PageMiddleLayout;
