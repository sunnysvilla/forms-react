import { type ConditionalValue, Text } from "@chakra-ui/react";
import { type ReactNode } from "react";

interface CaptionProps {
  children: ReactNode;
  textDecor?: "underline" | "none";
  color?: string;
  noOfLines?: number;
  transform?: boolean;
  upper?: boolean;
  noWrap?: boolean;
  align?:
    | "center"
    | "left"
    | "right"
    | "justify"
    | ConditionalValue<"center" | "left" | "right" | "justify">;
}

const Caption = ({
  children,
  color = "inherit",
  noOfLines,
  transform = true,
  noWrap = false,
  upper = false,
  align = "left",
  textDecor = "none",
}: CaptionProps) => {
  return (
    <Text
      textDecor={textDecor}
      color={color}
      fontSize={{ base: "14px", md: "15px", lg: "16px" }} // Smaller text for captions
      lineHeight="tall"
      textTransform={upper ? "uppercase" : transform ? "capitalize" : "none"}
      lineClamp={noOfLines}
      textAlign={align}
      fontWeight={upper ? "bold" : "medium"}
      whiteSpace={noWrap ? "nowrap" : "none"}
    >
      {children}
    </Text>
  );
};

export default Caption;
