import { Button, Text } from "@chakra-ui/react";

const SuccessScreen = () => {
  return (
    <>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut a sequi
        velit, excepturi voluptatum aperiam ducimus unde assumenda quod saepe.
      </Text>
      <Button
        variant="subtle"
        borderRadius="xl"
        onClick={() => window.location.reload()}
      >
        Submit Another Response
      </Button>
    </>
  );
};

export default SuccessScreen;
