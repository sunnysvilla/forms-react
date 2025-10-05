import { Formik, Form } from "formik";
import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import FormContainer from "../library/form/FormContainer";
import FormFooter from "../library/form/FormFooter";
import GuestCountInput from "../library/form/GuestCountInput";
import ProofUploadInput from "../library/form/ProofUploadInput";
import {
  bookingValidation,
  initialBookingValues,
} from "../config/bookingFormConfig";
import WelcomeScreen from "../library/form/WelcomeScreen";
import ErrorModal from "../library/form/ErrorModal";
import GuestDetailsInput from "../library/form/GuestDetailsInput";
import FormTitle from "../library/form/FormTitle";
import { useSubmitKYC } from "../hooks/admin/useKyc";
import { useParams } from "react-router";

const TABS = [
  WelcomeScreen,
  GuestDetailsInput,
  GuestCountInput,
  ProofUploadInput,
];
const TAB_HEADINGS = [
  {
    title: "",
    subtitle: "",
  },
  {
    title: "Enter Details",
    subtitle: "Please enter basic details",
  },
  {
    title: "Arrival Details",
    subtitle: "Please enter arrival details",
  },
  {
    title: "Upload Proof",
    subtitle: "Please upload proof of identification",
  },
];

const FormLayout = () => {
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState(false);
  const { slug } = useParams();

  const next = () =>
    setTab((prev) => (prev < TABS.length - 1 ? prev + 1 : prev));
  const prev = () => setTab((prev) => (prev > 0 ? prev - 1 : 0));
  const ActiveTab = TABS[tab];

  const { mutate, isPending } = useSubmitKYC();

  return (
    <Formik
      initialValues={initialBookingValues}
      validationSchema={bookingValidation}
      onSubmit={(values) => {
        if (!slug) return;

        const formData = new FormData();

        Object.entries(values).forEach(([key, val]) => {
          if (key !== "pdf_file" && !!val) {
            formData.append(key, String(val));
          }
        });

        // append uploaded files
        if (values.pdf_file && values.pdf_file.length > 0) {
          values.pdf_file.forEach((file) => {
            formData.append("pdf_file", file);
          });
        }

        formData.append("slug", slug);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        mutate(formData as any);
      }}
    >
      {() => (
        <Form>
          <Flex
            id="booking-form"
            w="100%"
            maxW="100%"
            overflowX="clip"
            minH="100vh"
            maxH="100vh"
            justify="center"
            align="center"
            pos="relative"
          >
            <Flex
              w={{ base: "100%", sm: "80%", md: "60%", lg: "45%" }}
              align="center"
              justify="center"
              flexDir="column"
            >
              <FormContainer tabIndex={tab}>
                <FormTitle {...TAB_HEADINGS[tab]} />
                <ActiveTab />
                <FormFooter
                  tab={tab}
                  isPending={isPending}
                  prev={prev}
                  next={next}
                  final={tab === TABS.length - 1}
                />
              </FormContainer>
            </Flex>
          </Flex>
          <ErrorModal open={open} setOpen={setOpen} />
        </Form>
      )}
    </Formik>
  );
};

export default FormLayout;
