import {
  Button,
  HStack,
  Icon,
  IconButton,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { Label } from "../../utils/Typo/Label";
import { LuFileArchive, LuPencil, LuTrash2 } from "react-icons/lu";
import Caption from "../../utils/Typo/Caption";

const PropertyEntry = ({ no }: { no: number }) => {
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
        <Caption> Property Name {no} </Caption>
        <Label color="gray"> propertyname{no}@gmail.com </Label>
      </VStack>

      <HStack w="100%">
        <Button
          size="sm"
          borderRadius="xl"
          colorPalette="blue"
          variant="subtle"
          flex={1}
        >
          <Icon as={LuPencil} />
          Edit
        </Button>
        <IconButton
          size="sm"
          borderRadius="xl"
          colorPalette="yellow"
          variant="subtle"
        >
          <Icon as={LuFileArchive} />
        </IconButton>
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
  return (
    <SimpleGrid w="100%" gap={4} columns={{ base: 1, sm: 2, md: 2, lg: 3 }}>
      {Array.from({ length: 4 }).map((_, i) => (
        <PropertyEntry key={i} no={i + 1} />
      ))}
    </SimpleGrid>
  );
};

export default PropertyList;
