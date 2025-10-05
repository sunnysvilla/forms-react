import {
  Button,
  Clipboard,
  HStack,
  Icon,
  IconButton,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { LuTrash2 } from "react-icons/lu";
import Caption from "../../utils/Typo/Caption";
import { Label } from "../../utils/Typo/Label";
import AddPropertyBtn from "../actionButtons/AddPropertyBtn";
import type { PropertyResponse } from "../../entities/property";
import { useAdminGetProperty } from "../../hooks/admin/useProperty";

const PropertyEntry = ({ property }: { property: PropertyResponse }) => {
  return (
    <VStack
      w="100%"
      gap={16}
      p={4}
      bg="purple.100"
      borderRadius="xl"
      border="sm"
      borderColor="purple.200"
      align="start"
    >
      <VStack align="start" gap={0} flex={1}>
        <Caption> {property.name} </Caption>
        <Label color="gray"> {property.mail} </Label>
      </VStack>

      <HStack w="100%">
        <AddPropertyBtn edit values={property} />
        <Clipboard.Root value={property.link}>
          <Clipboard.Trigger asChild>
            <Button
              variant="surface"
              size="sm"
              borderRadius="xl"
              colorPalette="yellow"
            >
              <Clipboard.Indicator />
            </Button>
          </Clipboard.Trigger>
        </Clipboard.Root>
        {/* <IconButton
          size="sm"
          borderRadius="xl"
          variant="subtle"
        > 
          <Icon as={LuFileArchive} />
        </IconButton>
         */}
        <IconButton
          size="sm"
          borderRadius="xl"
          colorPalette="red"
          variant="subtle"
        >
          <Icon as={LuTrash2} />
        </IconButton>
      </HStack>
    </VStack>
  );
};

const PropertyList = () => {
  // const properties = [
  //   {
  //     _id: "68d7f2d778bb1b5f57229098",
  //     name: "Cozy Haven Sunny",
  //     link: "https://sunnysgroup.com/cozy-haven-sunny",
  //     slug: "cozy-haven-sunny",
  //     mail: "booking@sunnysvilla.com",
  //     docs: [],
  //     createdAt: "2025-09-27T14:21:11.461Z",
  //   },
  // ];

  const { data } = useAdminGetProperty();

  return (
    <SimpleGrid w="100%" gap={4} columns={{ base: 1, sm: 2, md: 2, lg: 3 }}>
      {/* {properties.map((property) => (
        <PropertyEntry key={property._id} property={property} />
      ))} */}
      {data?.data.data.map((property) => (
        <PropertyEntry key={property._id} property={property} />
      ))}
    </SimpleGrid>
  );
};

export default PropertyList;
