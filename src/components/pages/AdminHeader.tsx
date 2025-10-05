import { Box, Button, HStack, VStack } from "@chakra-ui/react";
import Header from "../utils/Typo/Heading";
import { LuBuilding } from "react-icons/lu";
import { FaPeopleGroup } from "react-icons/fa6";
import { Link, useLocation } from "react-router";

const AdminHeader = () => {
  const activeTab = useLocation().pathname.split("/")[1];
  const showingProperty = !activeTab || activeTab === "properties";

  return (
    <VStack borderRadius="xl" p={4} w="100%" bg="blue.50">
      <VStack
        w="100%"
        align="start"
        gap={8}
        borderBottom="sm"
        borderColor="gray.100"
      >
        <HStack w="100%" justify="space-between">
          <Header level="h6"> Macify </Header>
          <Box id="booking-header" w={6} h={6} borderRadius="full" />
        </HStack>

        <HStack gap={4}>
          <Link to="/properties">
            <Button
              borderRadius="xl"
              colorPalette={showingProperty ? "green" : "gray"}
              variant={showingProperty ? "solid" : "surface"}
            >
              <LuBuilding />
              Properties
            </Button>
          </Link>

          <Link to="/kycs">
            <Button
              borderRadius="xl"
              colorPalette={!showingProperty ? "green" : "gray"}
              variant={!showingProperty ? "solid" : "surface"}
            >
              <FaPeopleGroup />
              KYCs
            </Button>
          </Link>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default AdminHeader;
