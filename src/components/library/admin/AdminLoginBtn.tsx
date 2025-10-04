import { useEffect } from "react";
import { Button } from "@chakra-ui/react/button";

interface Props {
  email: string;
  password: string;
  loading: boolean;
}

const AdminLoginButton = ({ email, password, loading }: Props) => {
  useEffect(() => {
    const handleKeyDown = (k: KeyboardEvent) => {
      if (k.code === "Enter") {
        if (email && password) console.log("first");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [email, password]);

  return (
    <Button
      w="100%"
      mt={4}
      borderRadius="xl"
      loadingText="Logging In"
      colorPalette="purple"
      size={{ base: "sm", md: "md" }}
      disabled={!email || !password}
      loading={loading}
      type="submit"
      px={6}
    >
      Login
    </Button>
  );
};

export default AdminLoginButton;
