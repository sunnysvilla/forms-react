import { Box, Button, Icon, Menu, Portal } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import token_key from "../../constants/token_key";
import ChangePasswordModal from "./ChangePasswordModal";
import { PiSignInDuotone } from "react-icons/pi";
const AdminMenu = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem(token_key["admin"]);
    navigate("/login");
  };

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm" rounded="xl" boxShadow="xs">
          <Box id="booking-header" w={6} h={6} rounded="full" />
          Admin
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content rounded="xl" boxShadow="none">
            <ChangePasswordModal />
            <Menu.Item
              rounded="lg"
              value="delete"
              color="fg.error"
              _hover={{ bg: "bg.error", color: "fg.error" }}
              onClick={logout}
            >
              <Icon as={PiSignInDuotone} />
              Logout
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default AdminMenu;
