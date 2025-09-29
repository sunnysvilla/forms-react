import { Circle, Field, HStack, Image, Input } from "@chakra-ui/react";
import { useField } from "formik";
import { useRef, useState, type ReactNode } from "react";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  children?: ReactNode | ReactNode[];
  extraButton?: ReactNode;
  bgImg?: string;
}

const BoxInput = ({
  placeholder,
  name,
  label,
  children,
  extraButton,
  bgImg,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [field, meta] = useField(name);

  const isError = meta.touched && meta.error;
  const isValid = meta.touched && meta.value;

  const activeColor = isError ? "red" : isValid ? "green" : "gray";

  return (
    <Field.Root
      w="100%"
      p={4}
      gap={4}
      borderRadius="2xl"
      bg={`${activeColor}.50`}
      display="flex"
      required
      justifyContent="space-between"
      border="1px solid"
      borderColor={`${activeColor}.100`}
      onClick={() => inputRef.current?.focus()}
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
      pos="relative"
      overflow="clip"
      className="box-input"
    >
      <Image
        className="input-img"
        pos="absolute"
        zIndex={1}
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
          ref={inputRef}
          placeholder={placeholder || `Enter ${label}`}
          bg={`${activeColor}.50`}
          variant="subtle"
          px={0}
          border="none"
          outline="none"
          autoComplete="off"
          fontWeight="medium"
          fontSize={{ base: "md", md: "lg" }}
        />
      )}
    </Field.Root>
  );
};

export default BoxInput;
