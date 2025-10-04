import {
  Box,
  Button,
  Dialog,
  Image,
  Portal,
  SimpleGrid,
} from "@chakra-ui/react";

interface Props {
  docs: string[];
}

const ViewDocsBtn = ({ docs }: Props) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button size="sm" borderRadius="lg">
          View
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content borderRadius="xl">
            <Dialog.Header>
              <Dialog.Title>Documents</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <Box maxH={400} overflowY="auto">
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                  {docs.map((doc, i) => (
                    <Image src={doc} alt={`image_${i}`} />
                  ))}
                </SimpleGrid>
              </Box>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline" borderRadius="xl">
                  Cancel
                </Button>
              </Dialog.ActionTrigger>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default ViewDocsBtn;
