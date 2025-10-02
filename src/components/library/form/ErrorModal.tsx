import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const ErrorModal = ({ open, setOpen }: Props) => {
  return (
    <Dialog.Root lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Dialog Title</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              debitis exercitationem nam recusandae error unde dignissimos
              libero repudiandae quos sed!
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button>Save</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default ErrorModal;
