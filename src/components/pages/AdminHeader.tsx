import { Box, Button, HStack, VStack } from "@chakra-ui/react";
import Header from "../utils/Typo/Heading";
import { LuBuilding } from "react-icons/lu";
import { FaPeopleGroup } from "react-icons/fa6";
import { Link, useLocation } from "react-router";

const AdminHeader = () => {
  const activeTab = useLocation().pathname.split("/")[1];
  const showingProperty = !activeTab || activeTab === "properties";

  return (
    <VStack p={{ base: 6, md: 8 }} w="100%">
      <VStack w="100%" align="start" gap={4}>
        <HStack w="100%" justify="space-between">
          <Header level="h4" color="white">
            Macify
          </Header>
          <Box id="booking-header" w={6} h={6} borderRadius="full" />
        </HStack>

        <HStack gap={2}>
          <Link to="/properties">
            <Button
              borderRadius="xl"
              colorPalette="teal"
              variant={showingProperty ? "solid" : "subtle"}
            >
              <LuBuilding />
              Properties
            </Button>
          </Link>

          <Link to="/kycs">
            <Button
              borderRadius="xl"
              colorPalette="teal"
              variant={!showingProperty ? "solid" : "subtle"}
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
