import { Field } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  label: string;
  children: ReactNode | ReactNode[];
}

const BoxInputWrapper = ({ label, children }: Props) => {
  return (
    <Field.Root
      w="100%"
      display="flex"
      required
      justifyContent="space-between"
      pos="relative"
      overflow="clip"
      className="box-input"
    >
      <Field.Label fontWeight="medium" color="gray.500" fontSize="sm">
        {label}
      </Field.Label>
      {children}
    </Field.Root>
  );
};

export default BoxInputWrapper;
