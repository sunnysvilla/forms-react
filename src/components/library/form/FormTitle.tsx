import { Heading, Text, VStack } from "@chakra-ui/react";

interface Props {
  title: string;
  subtitle: string;
}

const FormTitle = ({ title, subtitle }: Props) => {
  if (!title && !subtitle) return;

  return (
    <VStack w="100%" align="start" gap={0}>
      <Heading fontSize={{ base: "xl", md: "xl" }} fontWeight="semibold">
        {title}
      </Heading>
      <Text fontSize="xs"> {subtitle} </Text>
    </VStack>
  );
};

export default FormTitle;
