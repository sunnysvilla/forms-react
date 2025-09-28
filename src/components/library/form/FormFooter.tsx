import { Button, HStack, Icon, IconButton } from "@chakra-ui/react";
import { LuCircleChevronLeft, LuCircleChevronRight } from "react-icons/lu";
import { TbConfetti } from "react-icons/tb";

interface Props {
  tab: number;
  final: boolean;
  prev: () => void;
  next: () => void;
}

const FormFooter = ({ tab, prev, next, final }: Props) => {
  return (
    <HStack w="100%" justify="end" gap={4} mt={8}>
      {tab === 0 && (
        <Button
          colorPalette="purple"
          borderRadius="full"
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
            borderRadius="full"
            onClick={prev}
            variant="subtle"
            colorPalette="purple"
            size={{ base: "sm", md: "md" }}
          >
            <LuCircleChevronLeft />
          </IconButton>
          <Button
            borderRadius="full"
            onClick={next}
            colorPalette="purple"
            size={{ base: "sm", md: "md" }}
            px={6}
          >
            {final ? "Finish Booking" : "Next"}
            <Icon as={LuCircleChevronRight} />
          </Button>
        </>
      )}
    </HStack>
  );
};

export default FormFooter;
