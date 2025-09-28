import {
  Box,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import img from "../../../assets/house.png";

interface Heading {
  title: string;
  subtitle: string;
  tag?: string;
}

interface Props {
  heading: Heading;
}

const FormHeader = ({ heading }: Props) => {
  return (
    <Box w="98%" h="100%">
      <SimpleGrid
        w="100%"
        h="80%"
        borderRadius={30}
        columns={2}
        pos="relative"
        id="booking-header"
      >
        <HStack py={{ base: 6, md: 8 }} p={{ base: 6, md: 8 }}>
          <VStack
            gap={{ base: 0, md: 2 }}
            w="100%"
            align="start"
            fontSize={{ base: "sm", md: "md" }}
          >
            <Text fontSize="sm" color="white">
              {heading.tag}
              {/* Welcome to, */}
            </Text>
            <Heading
              color="white"
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              <strong>{heading.title}</strong>
              {/* <strong>Macify!</strong> */}
            </Heading>
            <Text
              fontWeight="light"
              fontSize={{ base: "xs", md: "sm" }}
              color="white"
            >
              {heading.subtitle}
              {/* You can always come back and add or remove your homies {`:)`} */}
            </Text>
          </VStack>
        </HStack>
        <Box w="100%" h="100%" pos="relative">
          <Image
            w={60}
            src={img}
            pos="absolute"
            bottom={{ base: -8, md: -16, lg: -2 }}
            right={4}
            zIndex={0}
            clipPath="inset(0px 0px 8px 0px)"
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default FormHeader;
