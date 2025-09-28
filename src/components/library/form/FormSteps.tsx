import { Box, HStack, Image, Text } from "@chakra-ui/react";

interface StepProps {
  image: string;
  title?: string;
}

const FormStep = ({ image, title }: StepProps) => {
  return (
    <HStack
      px={4}
      pr={title ? 6 : 4}
      py={2}
      borderRadius="full"
      bg="yellow.50"
      border="1px solid"
      borderColor="yellow.200"
    >
      <Box pos="relative" w={title ? 12 : 6} h="100%">
        <Image
          transform="rotate(-6deg)"
          top={-8}
          pos={title ? "absolute" : "static"}
          src={image}
        />
      </Box>

      {title && (
        <Text fontSize={{ base: "sm", md: "md" }} fontWeight={500}>
          {title}
        </Text>
      )}
    </HStack>
  );
};

const FormSteps = () => {
  return (
    <HStack gap={3} w={{ base: "100%", sm: "80%", md: "60%", lg: "40%" }}>
      <FormStep
        title="Welcome!"
        image="https://img.icons8.com/?size=800&id=BFF7SVF9afpV&format=png&color=000000"
      />
      <FormStep image="https://img.icons8.com/?size=100&id=FpjvLHiLGtqT&format=png&color=000000" />
      <FormStep image="https://img.icons8.com/?size=100&id=GCWQkWqtBCgB&format=png&color=000000" />
      <FormStep image="https://img.icons8.com/?size=100&id=n7FpOs5tCs7E&format=png&color=000000" />
      <FormStep image="https://img.icons8.com/?size=100&id=3QDfPO80p79P&format=png&color=000000" />
      <FormStep image="https://img.icons8.com/?size=100&id=SQUhc67Yi70U&format=png&color=000000" />
    </HStack>
  );
};

export default FormSteps;
