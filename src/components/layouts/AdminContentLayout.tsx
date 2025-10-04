import { VStack } from "@chakra-ui/react";
import type { ReactNode } from "react";
import Header from "../utils/Typo/Heading";
import { Label } from "../utils/Typo/Label";

interface Props {
  title: string;
  subtitle: string;
  children: ReactNode | ReactNode[];
}

const AdminContentLayout = ({ title, subtitle, children }: Props) => {
  return (
    <VStack
      w="100%"
      h={400}
      overflowY="auto"
      borderRadius="xl"
      border="1px solid"
      borderColor="gray.100"
      bg="gray.50"
      p={{ base: 4, md: 8 }}
      gap={8}
    >
      <VStack w="100%" align="start" gap={0}>
        <Header level="h4"> {title} </Header>
        <Label> {subtitle} </Label>
      </VStack>
      {children}
    </VStack>
  );
};

export default AdminContentLayout;
