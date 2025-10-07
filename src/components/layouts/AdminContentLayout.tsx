import { HStack, VStack } from "@chakra-ui/react";
import type { ReactNode } from "react";
import Header from "../utils/Typo/Heading";
import { Label } from "../utils/Typo/Label";

interface Props {
  title: string;
  subtitle: string;
  children: ReactNode | ReactNode[];
  action: ReactNode | ReactNode[];
}

const AdminContentLayout = ({ title, subtitle, children, action }: Props) => {
  return (
    <VStack
      w="100%"
      h={400}
      overflowY="auto"
      borderBottomRadius="2xl"
      border="1px solid"
      borderColor="gray.200"
      bg="gray.50"
      p={{ base: 4, md: 8 }}
      gap={8}
    >
      <HStack w="100%" justify="space-between" flexWrap="wrap">
        <VStack align="start" gap={0}>
          <Header level="h4"> {title} </Header>
          <Label> {subtitle} </Label>
        </VStack>
        {action}
      </HStack>
      {children}
    </VStack>
  );
};

export default AdminContentLayout;
