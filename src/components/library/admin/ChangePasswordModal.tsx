import {
  Button,
  CloseButton,
  Dialog,
  HStack,
  Icon,
  Portal,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { PiPasswordDuotone } from "react-icons/pi";
import { useAdminChangePassword } from "../../hooks/admin/useAdminAuth";
import BoxInput from "../../utils/Input/BoxInput";
import { Form, Formik } from "formik";
import {
  changePasswordInitialValues,
  changePasswordValidation,
} from "../../config/adminAuthConfig";
import { MdOutlineCancel } from "react-icons/md";

const ChangePasswordModal = () => {
  const [open, setOpen] = useState<boolean>(false);

  const { mutate: mutate, isPending } = useAdminChangePassword(() => {
    setOpen(false);
  });

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      closeOnInteractOutside={false}
    >
      <Dialog.Trigger asChild>
        <Button
          rounded="lg"
          size="sm"
          px={2}
          justifyContent="start"
          fontWeight={600}
          variant={{ base: "ghost", md: "ghost", lg: "plain" }}
          colorPalette="gray"
          color="purple.solid"
        >
          <Icon>
            <PiPasswordDuotone />
          </Icon>
          Change Password
        </Button>
      </Dialog.Trigger>

      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Change Password</Dialog.Title>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Header>

            <Dialog.Body>
              <Formik
                initialValues={changePasswordInitialValues}
                validationSchema={changePasswordValidation}
                onSubmit={mutate}
              >
                {({ handleSubmit }) => (
                  <Form
                    style={{ width: "100%" }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleSubmit();
                      }
                    }}
                  >
                    <VStack w="100%" mt={4} gap={1}>
                      <BoxInput
                        name="password"
                        label="Password"
                        size="sm"
                        type="password"
                        bottomRadius="0"
                      />
                      <BoxInput
                        name="confirmPassword"
                        label="Confirm Password"
                        size="sm"
                        topRadius="0"
                      />
                      <HStack w="100%" gap={0.5} mt={4}>
                        <Button
                          variant="subtle"
                          rounded="xl"
                          onClick={() => setOpen(false)}
                          borderRightRadius={0}
                        >
                          <Icon as={MdOutlineCancel} />
                        </Button>
                        <Button
                          flex={1}
                          rounded="xl"
                          borderLeftRadius={0}
                          loadingText="Please Wait..."
                          colorPalette="purple"
                          size={{ base: "sm", md: "md" }}
                          loading={isPending}
                          type="submit"
                        >
                          Change Password
                        </Button>
                      </HStack>
                    </VStack>
                  </Form>
                )}
              </Formik>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default ChangePasswordModal;
