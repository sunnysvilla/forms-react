import { Button, HStack, Icon, IconButton } from "@chakra-ui/react";
import { LuCircleChevronLeft, LuCircleChevronRight } from "react-icons/lu";
import { TbConfetti } from "react-icons/tb";
import type { ReactNode } from "react";

interface Props {
  tab: number;
  prev: () => void;
  next: () => void;
  submitButton: ReactNode;
}

const FormFooter = ({ tab, prev, next, submitButton }: Props) => {
  return (
    <HStack w="100%" justify="center" px={8}>
      {tab === 0 && (
        <Button
          colorPalette="purple"
          borderRadius="xl"
          size={{ base: "md", md: "lg" }}
          onClick={next}
        >
          Let's Get Started!
          <Icon as={TbConfetti} />
        </Button>
      )}

      {tab > 0 && (
        <>
          <IconButton
            aria-label="Search database"
            borderRadius="xl"
            onClick={prev}
            variant="subtle"
            colorPalette="purple"
            size={{ base: "sm", md: "md" }}
          >
            <LuCircleChevronLeft />
          </IconButton>

          {submitButton || (
            <Button
              borderRadius="xl"
              onClick={next}
              colorPalette="purple"
              size={{ base: "sm", md: "md" }}
              px={6}
              w="full"
            >
              Next
              <Icon as={LuCircleChevronRight} />
            </Button>
          )}
        </>
      )}
    </HStack>
  );
};

export default FormFooter;
