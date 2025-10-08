import { SimpleGrid, VStack } from "@chakra-ui/react";
import type { ReactNode } from "react";
import Header from "../utils/Typo/Heading";
import { Label } from "../utils/Typo/Label";

interface Props {
  title: string;
  subtitle: string;
  children: ReactNode | ReactNode[];
  action: ReactNode | ReactNode[];
  sameLine?: boolean;
}

const AdminContentLayout = ({
  title,
  subtitle,
  children,
  action,
  sameLine = false,
}: Props) => {
  return (
    <VStack
      w="100%"
      flex={1}
      // h={{ base: "100%", md: 400 }}
      overflowY="auto"
      p={{ base: 6, md: 8 }}
      gap={8}
    >
      <SimpleGrid
        w="100%"
        columns={{ base: sameLine ? 2 : 1, md: 2 }}
        rowGap={4}
      >
        <VStack align="start" gap={0}>
          <Header level="h4" color="white">
            {title}
          </Header>
          <Label color="gray"> {subtitle} </Label>
        </VStack>
        {action}
      </SimpleGrid>
      {children}
    </VStack>
  );
};

export default AdminContentLayout;
