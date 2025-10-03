import { VStack, HStack, Box } from "@chakra-ui/react";
import { Label } from "../utils/Typo/Label";
import AdminLoginButton from "../library/admin/AdminLoginBtn";
import BoxInput from "../utils/Input/BoxInput";
import PageMiddleLayout from "../layouts/PageMiddleLayout";
import { Form, Formik } from "formik";
import { loginInitialValues } from "../config/adminAuthConfig";
import Header from "../utils/Typo/Heading";

const LoginPage = () => {
  return (
    <Formik
      initialValues={loginInitialValues}
      //   validationSchema={bookingValidation}
      onSubmit={(values) => {
        console.log("Form submitted:", values);
      }}
    >
      {() => (
        <Form style={{ width: "100%" }}>
          <PageMiddleLayout>
            <VStack
              w={{ base: "80%", md: "50%", lg: "40%" }}
              gap={8}
              align="start"
            >
              <VStack w="100%" align="start">
                <HStack>
                  <Box minW={6} minH={6} bg="green.200" borderRadius="lg" />
                  <Label> Macify </Label>
                </HStack>
                <Header level="h4">Welcome Back</Header>
              </VStack>

              <VStack w="100%" gap={6} mt={8}>
                <BoxInput name="email" label="Email" />
                <BoxInput name="password" label="Password" />
                <AdminLoginButton email="{detail}" password="{password}" />
              </VStack>
            </VStack>
          </PageMiddleLayout>
        </Form>
      )}
    </Formik>
  );
};

export default LoginPage;
