import { Outlet } from "react-router";
import PageMiddleLayout from "./PageMiddleLayout";
import { VStack } from "@chakra-ui/react";
import AdminHeader from "../pages/AdminHeader";

const AdminLayout = () => {
  return (
    <PageMiddleLayout>
      <VStack w="100%" maxW={800} className="glass-bg" gap={1}>
        <AdminHeader />
        <Outlet />
      </VStack>
    </PageMiddleLayout>
  );
};

export default AdminLayout;
