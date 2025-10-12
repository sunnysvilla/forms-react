import {
  Button,
  CloseButton,
  Dialog,
  HStack,
  Icon,
  Portal,
  VStack,
} from "@chakra-ui/react";
import { useFormikContext } from "formik";
import { useState } from "react";
import { LuCircleCheckBig } from "react-icons/lu";
import { type AddKYC } from "../../entities/kyc";
import Caption from "../../utils/Typo/Caption";
import { Label } from "../../utils/Typo/Label";

interface Props {
  setTab: (tab: number) => void;
  loading?: boolean;
}

const ReviewModal = ({ loading = false, setTab }: Props) => {
  const [open, setOpen] = useState(false);
  const { errors, submitForm, validateForm, isValid } =
    useFormikContext<AddKYC>();

  const reviews = [
    {
      step: "Basic Details",
      fine: !(errors.name || errors.guests),
    },
    {
      step: "Arrival Details",
      fine: !(errors.arrival || errors.phone),
    },
    {
      step: "Proof Details",
      fine: !errors.pdf_file,
    },
  ];

  return (
    <Dialog.Root
      size={{ base: "sm", md: "md" }}
      lazyMount
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <Dialog.Trigger flex={1}>
        <Button
          borderRadius="xl"
          colorPalette="purple"
          size={{ base: "sm", md: "md" }}
          w="full"
          px={6}
          onClick={async () => {
            await validateForm();
          }}
        >
          <Icon as={LuCircleCheckBig} />
          Complete Check-In
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content rounded="2xl">
            <Dialog.Header>
              <Dialog.Title>Form Summary</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <VStack gap={6}>
                {reviews.map((review, i) => (
                  <HStack
                    w="100%"
                    key={i}
                    borderLeft="4px solid"
                    pl={4}
                    gap={4}
                    borderColor={review.fine ? "green.700" : "red.700"}
                  >
                    <VStack align="start" gap={0} flex={1}>
                      <Caption> {review.step} </Caption>
                      <Label color="gray">
                        {review.fine ? "All good" : "Please review the details"}
                      </Label>
                    </VStack>
                    <Button
                      size="sm"
                      rounded="xl"
                      variant={review.fine ? "subtle" : "surface"}
                      onClick={() => {
                        setOpen(false);
                        setTab(i + 1);
                      }}
                    >
                      Review
                    </Button>
                  </HStack>
                ))}
              </VStack>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="ghost" rounded="2xl">
                  Close
                </Button>
              </Dialog.ActionTrigger>
              <Button
                borderRadius="xl"
                colorPalette="purple"
                size={{ base: "sm", md: "md" }}
                loading={loading}
                onClick={submitForm}
                disabled={!isValid}
              >
                <Icon as={LuCircleCheckBig} />
                Complete Check-In
              </Button>
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

export default ReviewModal;
