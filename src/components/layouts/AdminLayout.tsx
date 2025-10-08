import { Outlet } from "react-router";
import PageMiddleLayout from "./PageMiddleLayout";
import { VStack } from "@chakra-ui/react";
import AdminHeader from "../pages/AdminHeader";

const AdminLayout = () => {
  return (
    <PageMiddleLayout>
      <VStack
        w="100%"
        h="100%"
        maxW={800}
        gap={0}
        bg="gray.900"
        borderRadius={20}
        boxShadow="lg"
        border="1px solid"
        borderColor="gray.800"
      >
        <AdminHeader />
        <Outlet />
      </VStack>
    </PageMiddleLayout>
  );
};

export default AdminLayout;
