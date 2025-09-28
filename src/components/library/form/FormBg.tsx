import { Image } from "@chakra-ui/react";
import img from "../../../assets/squiggle/1.png";

const FormBg = () => {
  return (
    <Image
      pos="absolute"
      transform="rotate(-70deg)"
      w="100%"
      minW="100%"
      minH="100%"
      opacity={0.7}
      src={img}
    />
  );
};

export default FormBg;
