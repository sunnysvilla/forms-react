import { Circle, Field, HStack, Image, Input } from "@chakra-ui/react";
import { useRef, useState, type ReactNode } from "react";

interface Props {
  label: string;
  placeholder?: string;
  children?: ReactNode | ReactNode[];
  extraButton?: ReactNode;
  filled?: boolean;
  bgImg?: string;
}

const BoxInput = ({
  placeholder,
  label,
  children,
  extraButton,
  filled = false,
  bgImg,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <Field.Root
      w="100%"
      p={4}
      gap={4}
      borderRadius="2xl"
      bg="gray.subtle"
      display="flex"
      required
      justifyContent="space-between"
      border="1px solid"
      borderColor="gray.muted"
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
        <Field.Label fontWeight="medium" color="gray.400" fontSize="sm">
          {label}
        </Field.Label>
        {extraButton || (
          <HStack gap={1}>
            <Circle w={1} h={1} bg={filled ? "green.400" : "gray.300"} />
            {isActive && (
              <>
                <Circle w={1} h={1} bg={filled ? "green.400" : "gray.300"} />
                <Circle w={1} h={1} bg={filled ? "green.400" : "gray.300"} />
              </>
            )}
          </HStack>
        )}
        {/* Filled or not indicator */}
      </HStack>

      {children || (
        <Input
          ref={inputRef}
          placeholder={placeholder || `Enter ${label}`}
          // size={{ base: "lg", md: "2xl" }}
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
