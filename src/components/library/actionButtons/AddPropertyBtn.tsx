import {
  Button,
  CloseButton,
  Dialog,
  HStack,
  Icon,
  Portal,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { LuPencil, LuPlus } from "react-icons/lu";
import {
  initialPropertyValues,
  propertyValidation,
} from "../../config/propertyConfig";
import BoxInput from "../../utils/Input/BoxInput";
import DocUpload from "../admin/DocUpload";
import { useAddProperty, useEditProperty } from "../../hooks/admin/useProperty";
import type { PropertyResponse } from "../../entities/property";
import { useState } from "react";

interface Props {
  edit?: boolean;
  values?: PropertyResponse;
  reset?: () => void;
}

const AddPropertyBtn = ({ edit = false, values, reset }: Props) => {
  const [open, setOpen] = useState(false);

  const handleSuccess = () => {
    if (reset) reset();
    setOpen(false);
  };

  const { mutate: add, isPending: isAdding } = useAddProperty(handleSuccess);
  const { mutate: update, isPending: isUpdating } = useEditProperty(
    values?._id || "",
    handleSuccess
  );

  return (
    <Dialog.Root
      placement="center"
      motionPreset="slide-in-bottom"
      size="lg"
      lazyMount
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <Dialog.Trigger asChild w="max" ml="auto">
        {edit ? (
          <Button size="sm" borderRadius="xl" variant="subtle" flex={1}>
            <Icon as={LuPencil} />
            Edit
          </Button>
        ) : (
          <Button
            colorPalette="green"
            variant="subtle"
            size="sm"
            borderRadius="xl"
          >
            <Icon as={LuPlus} />
            New
          </Button>
        )}
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content w={{ base: "95%" }} borderRadius="2xl">
            <Dialog.Header>
              <Stack gap={0}>
                <Dialog.Title>{edit ? "Edit" : "Add"} Property</Dialog.Title>
                <Text color="gray">
                  {`Please select enter & click ${edit ? `"Update"` : `"Add"`}`}
                </Text>
              </Stack>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Header>
            <Dialog.Body p={{ base: 2, md: 4 }}>
              <Formik
                initialValues={initialPropertyValues(values)}
                validationSchema={propertyValidation}
                onSubmit={(values) => {
                  const updatedVal = {
                    name: values.name,
                    mail: values.mail,
                    pdf_file: values.pdf_file,
                  };

                  if (edit) update(updatedVal);
                  else add(updatedVal);
                }}
              >
                {() => (
                  <Form>
                    <VStack gap={1}>
                      <SimpleGrid w="100%" columns={{ base: 1, md: 2 }} gap={1}>
                        <BoxInput
                          name="name"
                          label="Name"
                          size="sm"
                          bottomRadius="0"
                        />
                        <BoxInput
                          name="mail"
                          label="Mail"
                          size="sm"
                          bottomRadius="0"
                        />
                      </SimpleGrid>
                      <DocUpload />
                      <HStack mt={4}>
                        <Button
                          borderRadius="xl"
                          variant="surface"
                          onClick={() => setOpen(false)}
                        >
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          loading={isAdding || isUpdating}
                          borderRadius="xl"
                          colorPalette="green"
                        >
                          {edit ? "Update" : "Add"} Property
                        </Button>
                      </HStack>
                    </VStack>
                  </Form>
                )}
              </Formik>
              <VStack></VStack>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default AddPropertyBtn;
