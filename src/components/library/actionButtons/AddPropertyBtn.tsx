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
import { useAddProperty } from "../../hooks/admin/useProperty";
import type { Property } from "../../entities/property";

interface Props {
  edit?: boolean;
  values?: Property;
}

const AddPropertyBtn = ({ edit = false, values }: Props) => {
  const { mutate, isPending } = useAddProperty();

  return (
    <Dialog.Root placement="center" motionPreset="slide-in-bottom" size="lg">
      <Dialog.Trigger asChild>
        {edit ? (
          <Button
            size="sm"
            borderRadius="xl"
            colorPalette="blue"
            variant="subtle"
            flex={1}
          >
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
                <Dialog.Title>Add Property</Dialog.Title>
                <Text color="gray">Please select enter & click "Add"</Text>
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
                  mutate(values);
                }}
              >
                {() => (
                  <Form>
                    <VStack>
                      <SimpleGrid w="100%" columns={{ base: 1, md: 2 }} gap={2}>
                        <BoxInput name="name" label="Name" size="sm" />
                        <BoxInput name="mail" label="Mail" size="sm" />
                      </SimpleGrid>
                      <DocUpload />
                      <HStack mt={4}>
                        <Button borderRadius="xl" variant="surface">
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          loading={isPending}
                          borderRadius="xl"
                          colorPalette="green"
                        >
                          Add Property
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
