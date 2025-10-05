import { Button, HStack, Icon, IconButton } from "@chakra-ui/react";
import { LuCircleChevronLeft, LuCircleChevronRight } from "react-icons/lu";
import { TbConfetti } from "react-icons/tb";

interface Props {
  tab: number;
  final: boolean;
  isPending: boolean;
  prev: () => void;
  next: () => void;
}

const FormFooter = ({ tab, prev, next, final, isPending }: Props) => {
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

          {!final && (
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

          {final && (
            <Button
              borderRadius="xl"
              colorPalette="purple"
              size={{ base: "sm", md: "md" }}
              w="100%"
              px={6}
              loading={isPending}
              type="submit"
            >
              Finish Booking
              <Icon as={LuCircleChevronRight} />
            </Button>
          )}
        </>
      )}
    </HStack>
  );
};

export default FormFooter;
