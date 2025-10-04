import { Circle, Field, HStack, Image, Input } from "@chakra-ui/react";
import { useField } from "formik";
import { useRef, useState, type ReactNode } from "react";

interface Props {
  label: string;
  name: string;
  size?: "sm" | "md";
  placeholder?: string;
  children?: ReactNode | ReactNode[];
  extraButton?: ReactNode;
  bgImg?: string;
  onTapValue?: string;
  viewOnly?: boolean;
  disabledInput?: boolean;
  type?: React.HTMLInputTypeAttribute;
}

const BoxInput = ({
  placeholder,
  name,
  label,
  children,
  extraButton,
  bgImg,
  onTapValue,
  disabledInput = false,
  size = "md",
  type = "text",
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [field, meta, helpers] = useField(name);

  const isError = meta.touched && meta.error;
  const isValid = !!meta.value;

  const activeColor = isError ? "red" : isValid ? "green" : "gray";

  const handleTap = () => {
    inputRef.current?.focus();

    if (onTapValue) helpers.setValue(onTapValue);
  };

  return (
    <Field.Root
      w="100%"
      px={4}
      py={size == "sm" ? 2 : 4}
      gap={size == "sm" ? 1 : 2}
      borderRadius="2xl"
      bg={`${activeColor}.50`}
      display="flex"
      required
      justifyContent="space-between"
      border="1px solid"
      borderColor={`${activeColor}.100`}
      onClick={handleTap}
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
      pos="relative"
      overflow="clip"
      className="box-input"
    >
      <Image
        className="input-img"
        pos="absolute"
        zIndex={0}
        bottom={-20}
        right={-4}
        opacity={0.7}
        src={bgImg}
        w={16}
        transition="all 0.7s"
      />
      <HStack w="100%" justify="space-between">
        <Field.Label
          fontWeight="medium"
          color={`${activeColor}.500`}
          fontSize="sm"
        >
          {isError ? meta.error : label}
        </Field.Label>
        {extraButton || (
          <HStack gap={1}>
            <Circle w={1} h={1} bg={`${activeColor}.400`} />
            {isActive && !isError && (
              <>
                <Circle w={1} h={1} bg={`${activeColor}.400`} />
                <Circle w={1} h={1} bg={`${activeColor}.400`} />
              </>
            )}
          </HStack>
        )}
        {/* Filled or not indicator */}
      </HStack>

      {children || (
        <Input
          {...field}
          type={type}
          ref={inputRef}
          disabled={disabledInput}
          bg="transparent"
          placeholder={placeholder || `Enter ${label}`}
          variant="subtle"
          px={0}
          border="none"
          outline="none"
          autoComplete="off"
          fontWeight="medium"
          fontSize={
            size === "sm" ? { base: "sm", md: "md" } : { base: "md", md: "lg" }
          }
        />
      )}
    </Field.Root>
  );
};

export default BoxInput;
