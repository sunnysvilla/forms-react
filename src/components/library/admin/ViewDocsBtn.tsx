import { Box, Button, Dialog, Portal, SimpleGrid } from "@chakra-ui/react";

interface Props {
  docs: string[];
}

const ViewDocsBtn = ({ docs }: Props) => {
  return (
    <Dialog.Root size="xl">
      <Dialog.Trigger asChild>
        <Button size="sm" borderRadius="xl">
          View
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content
            borderRadius="3xl"
            outline="none"
            border="none"
            boxShadow="none"
          >
            <Dialog.Header>
              <Dialog.Title>Documents</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <Box maxH={400} w="100%" overflowY="auto">
                <SimpleGrid w="100%" columns={{ base: 1, md: 2 }} gap={4}>
                  {docs.map((doc, i) => (
                    <iframe
                      key={i}
                      src={doc}
                      allow="autoplay; encrypted-media"
                      title="Check-in Instructions"
                    />
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
