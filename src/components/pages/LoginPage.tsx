import { VStack, HStack, Box, Button } from "@chakra-ui/react";
import { Label } from "../utils/Typo/Label";
import BoxInput from "../utils/Input/BoxInput";
import PageMiddleLayout from "../layouts/PageMiddleLayout";
import { Form, Formik } from "formik";
import { loginInitialValues, loginValidation } from "../config/adminAuthConfig";
import Header from "../utils/Typo/Heading";
import { useAdminLogin } from "../hooks/admin/useAdminAuth";

const LoginPage = () => {
  const { mutate: login, isPending } = useAdminLogin();

  return (
    <Formik
      initialValues={loginInitialValues}
      validationSchema={loginValidation}
      onSubmit={login}
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

              <VStack w="100%" mt={4}>
                <BoxInput name="email" label="Email" size="sm" />
                <BoxInput
                  name="password"
                  label="Password"
                  size="sm"
                  type="password"
                />
                <Button
                  w="100%"
                  mt={4}
                  borderRadius="xl"
                  loadingText="Logging In"
                  colorPalette="purple"
                  size={{ base: "sm", md: "md" }}
                  loading={isPending}
                  type="submit"
                  px={6}
                >
                  Login
                </Button>
              </VStack>
            </VStack>
          </PageMiddleLayout>
        </Form>
      )}
    </Formik>
  );
};

export default LoginPage;
