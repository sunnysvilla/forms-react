import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import CheckInInput from "../library/form/CheckInInput";
import FormContainer from "../library/form/FormContainer";
import FormFooter from "../library/form/FormFooter";
import GuestCountInput from "../library/form/GuestCountInput";
import GuestDetailsInput from "../library/form/GuestDetailsInput";
import PaymentProofInput from "../library/form/PaymentProof";
import ProofUploadInput from "../library/form/ProofUploadInput";
import WelcomeScreen from "../library/form/WelcomeScreen";
import FormBg from "../library/form/FormBg";

const TABS = [
  WelcomeScreen,
  GuestCountInput,
  ProofUploadInput,
  GuestDetailsInput,
  CheckInInput,
  PaymentProofInput,
];

const FormLayout = () => {
  const [tab, setTab] = useState(0);

  const next = () =>
    setTab((prev) => (prev < TABS.length - 1 ? prev + 1 : prev));
  const prev = () => setTab((prev) => (prev > 0 ? prev - 1 : 0));
  const ActiveTab = TABS[tab];

  return (
    <Flex
      id="booking-form"
      w="100%"
      minH="100vh"
      maxH="100vh"
      justify="center"
      align="center"
      pos="relative"
    >
      <FormBg />
      <Flex
        w={{ base: "100%", sm: "80%", md: "60%", lg: "50%" }}
        align="center"
        justify="center"
        flexDir="column"
      >
        <FormContainer tabIndex={tab}>
          <ActiveTab />
          <FormFooter
            tab={tab}
            prev={prev}
            next={next}
            final={tab === TABS.length - 1}
          />
        </FormContainer>
      </Flex>
    </Flex>
  );
};

export default FormLayout;
