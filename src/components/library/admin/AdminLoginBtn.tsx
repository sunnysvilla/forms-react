import { useEffect } from "react";
import { useAdminLogin } from "../../hooks/admin/useAdminAuth";
import { Button } from "@chakra-ui/react/button";

interface Props {
  email: string;
  password: string;
}

const AdminLoginButton = ({ email, password }: Props) => {
  const { mutate, isPending } = useAdminLogin();

  useEffect(() => {
    const handleKeyDown = (k: KeyboardEvent) => {
      if (k.code === "Enter") {
        if (email && password)
          mutate({
            email,
            password,
          });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [email, password, mutate]);

  return (
    <Button
      className="no"
      w="100%"
      borderRadius="full"
      loadingText="Logging In"
      colorPalette="purple"
      size={{ base: "sm", md: "md" }}
      disabled={!email || !password}
      loading={isPending}
      type="submit"
      px={6}
    >
      Login
    </Button>
  );
};

export default AdminLoginButton;
