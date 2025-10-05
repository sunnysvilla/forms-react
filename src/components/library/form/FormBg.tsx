import { Image } from "@chakra-ui/react";
import village from "../../../assets/3d/village.png";
import buddy from "../../../assets/3d/buddy.png";
import van from "../../../assets/3d/van.png";
import id from "../../../assets/3d/bird.png";
import pool from "../../../assets/3d/pool.png";

const FormBg = ({ tab }: { tab: number }) => {
  const images = [village, buddy, van, id, pool];

  return (
    <Image
      pointerEvents="none"
      pos="absolute"
      bottom={-16}
      alignSelf="center"
      w={60}
      src={images[tab]}
    />
  );
};

export default FormBg;
