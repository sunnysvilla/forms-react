import { Flex } from "@chakra-ui/react";
import WelcomeScreen from "../library/form/WelcomeScreen";
import { useState } from "react";
import GuestCountInput from "../library/form/GuestCountInput";
import ProofUploadInput from "../library/form/ProofUploadInput";
import CheckInInput from "../library/form/CheckInInput";
import GuestDetailsInput from "../library/form/GuestDetailsInput";
import PaymentProofInput from "../library/form/PaymentProof";

const FormLayout = () => {
  const [tab, setTab] = useState(0);

  const next = () => setTab((prev) => (prev < 5 ? prev + 1 : prev));
  const prev = () => setTab((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <Flex w="100%" minH="100vh" maxH="100vh" justify="center" align="center">
      <Flex
        w={{ base: "100%", sm: "80%", md: "60%", lg: "40%" }}
        minH="100vh"
        align="center"
        justify="center"
        flexDir="column"
        borderLeft="1px solid"
        borderRight="1px solid"
        borderColor="gray.200"
      >
        {tab == 0 && <WelcomeScreen next={next} />}
        {tab == 1 && <GuestCountInput prev={prev} next={next} />}
        {tab == 2 && <ProofUploadInput prev={prev} next={next} />}
        {tab == 3 && <CheckInInput prev={prev} next={next} />}
        {tab == 4 && <GuestDetailsInput prev={prev} next={next} />}
        {tab == 5 && <PaymentProofInput prev={prev} next={next} />}
      </Flex>
    </Flex>
  );
};

export default FormLayout;
