import { Flex } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useState } from "react";
import { useParams } from "react-router";
import {
  bookingValidation,
  initialBookingValues,
} from "../config/bookingFormConfig";
import { useSubmitKYC } from "../hooks/admin/useKyc";
import FormBg from "../library/form/FormBg";
import FormContainer from "../library/form/FormContainer";
import FormFooter from "../library/form/FormFooter";
import FormTitle from "../library/form/FormTitle";
import GuestCountInput from "../library/form/GuestCountInput";
import GuestDetailsInput from "../library/form/GuestDetailsInput";
import ProofUploadInput from "../library/form/ProofUploadInput";
import WelcomeScreen from "../library/form/WelcomeScreen";
import SuccessScreen from "../library/form/SuccessScreen";
import ReviewModal from "../library/form/ReviewModal";

const TABS = [
  WelcomeScreen,
  GuestDetailsInput,
  GuestCountInput,
  ProofUploadInput,
  SuccessScreen,
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
  const { slug } = useParams();

  const next = () =>
    setTab((prev) => (prev < TABS.length - 1 ? prev + 1 : prev));
  const prev = () => setTab((prev) => (prev > 0 ? prev - 1 : 0));
  const ActiveTab = TABS[tab];

  const { mutate, isPending, isSuccess, isIdle } = useSubmitKYC();

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
            id="form"
            w="100%"
            maxW="100%"
            overflowX="clip"
            minH="100vh"
            maxH="100vh"
            justify="center"
            pos="relative"
          >
            <FormContainer tabIndex={tab}>
              {isSuccess && (
                <>
                  <FormTitle
                    title="Booking Successful"
                    subtitle="Hooray, Let's celebrate together there!"
                  />
                  <SuccessScreen />
                </>
              )}

              {(isIdle || isPending) && (
                <>
                  <FormTitle {...TAB_HEADINGS[tab]} />
                  <ActiveTab />

                  <FormFooter
                    tab={tab}
                    prev={prev}
                    next={next}
                    submitButton={
                      tab === TABS.length - 2 ? (
                        <ReviewModal setTab={setTab} loading={isPending} />
                      ) : null
                    }
                  />
                </>
              )}
              <FormBg tab={tab} />
            </FormContainer>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export default FormLayout;
