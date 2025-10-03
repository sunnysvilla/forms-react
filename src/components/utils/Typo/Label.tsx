import { Text } from "@chakra-ui/react";
import { type ReactNode } from "react";

interface LabelProps {
  children: ReactNode;
  color?: string;
  textTransform?: "capitalize" | "uppercase" | "lowercase";
  textAlign?: "center" | "right" | "left" | undefined;
  align?: "center" | "left" | "right" | "justify";
}

export const Label = ({
  children,
  color = "black",
  textTransform = undefined,
  textAlign = undefined,
}: LabelProps) => {
  return (
    <Text
      textAlign={textAlign}
      color={color}
      fontSize={{ base: "12px", md: "13px", lg: "14px" }}
      lineHeight="short"
      textTransform={textTransform}
      fontWeight="medium"
    >
      {children}
    </Text>
  );
};
