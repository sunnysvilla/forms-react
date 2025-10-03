import { Heading } from "@chakra-ui/react";
import { type ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  level?: "xl" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: string;
  align?: "center" | "left" | "right" | "justify";
  transform?: "capitalize" | "uppercase";
}

const Header = ({
  children,
  level = "h1",
  color = "inherit",
  align = "center",
  transform,
}: HeadingProps) => {
  const headingSizes = {
    xl: { base: "36px", sm: "44px", md: "48px", lg: "50px", xl: "56px" },
    h1: { base: "32px", md: "36px", lg: "42px" }, // Standard H1 sizes
    h2: { base: "28px", md: "32px", lg: "36px" }, // Standard H2 sizes
    h3: { base: "24px", md: "28px", lg: "32px" }, // Standard H3 sizes
    h4: { base: "20px", md: "24px", lg: "28px" }, // Standard H4 sizes
    h5: { base: "18px", md: "22px", lg: "24px" }, // Standard H4 sizes
    h6: { base: "18px", md: "20px", lg: "20px" }, // Standard H4 sizes
  };

  return (
    <Heading
      as={level !== "xl" ? level : "h1"}
      color={color}
      fontSize={headingSizes[level]}
      lineHeight={1.2}
      fontWeight={
        level !== "xl" ? (parseInt(level.charAt(1)) <= 3 ? 600 : 500) : 600
      }
      letterSpacing="tight"
      textAlign={align}
      textTransform={transform}
    >
      {children}
    </Heading>
  );
};

export default Header;
