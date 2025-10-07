import {
  Button,
  CloseButton,
  Dialog,
  HStack,
  Icon,
  Portal,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { LuCircleX, LuListFilter } from "react-icons/lu";
import useKYCQuery from "../../store/kycQuery";
import BoxInputWrapper from "../admin/BoxInputWrapper";
import DateFilter from "../admin/DateFilter";

const FilterKYCBtn = () => {
  const {
    startDate,
    endDate,
    itemPerPage,
    setStartDate,
    setEndDate,
    setItemPerPage,
  } = useKYCQuery();

  return (
    <Dialog.Root placement="center" motionPreset="slide-in-bottom" size="lg">
      <Dialog.Trigger asChild>
        <Button
          colorPalette="purple"
          variant="surface"
          size="sm"
          borderRadius="xl"
        >
          <Icon as={LuListFilter} />
          Filters
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content w={{ base: "95%" }} borderRadius="2xl">
            <Dialog.Header>
              <Stack gap={0}>
                <Dialog.Title>Apply Filters</Dialog.Title>
                <Text color="gray">Apply filters for KYC</Text>
              </Stack>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Header>
            <Dialog.Body py={4}>
              <VStack align="start" gap={8}>
                <SimpleGrid w="100%" gap={4} columns={{ base: 1, md: 2 }}>
                  <BoxInputWrapper label="Start Date">
                    <DateFilter
                      date={startDate ? new Date(startDate) : null}
                      onChange={setStartDate}
                      placement="right"
                      label={
                        startDate
                          ? format(new Date(startDate), "dd/MM/yyyy")
                          : "Start Date"
                      }
                    />
                  </BoxInputWrapper>
                  <BoxInputWrapper label="End Date">
                    <DateFilter
                      date={endDate ? new Date(endDate) : null}
                      onChange={setEndDate}
                      placement="left"
                      label={
                        endDate
                          ? format(new Date(endDate), "dd/MM/yyyy")
                          : "End Date"
                      }
                    />
                  </BoxInputWrapper>
                </SimpleGrid>
                <BoxInputWrapper label="Items Per Page">
                  <HStack p={1}>
                    {[5, 10, 20, 50].map((val) => (
                      <Button
                        key={val}
                        borderRadius="xl"
                        variant="surface"
                        colorPalette={val === itemPerPage ? "green" : "gray"}
                        onClick={() => setItemPerPage(val)}
                      >
                        {val}
                      </Button>
                    ))}
                  </HStack>
                </BoxInputWrapper>
                <HStack mt={4} mx="auto">
                  <Button
                    borderRadius="xl"
                    colorPalette="red"
                    variant="surface"
                  >
                    <LuCircleX />
                    Clear
                  </Button>
                  <Button borderRadius="xl" colorPalette="green">
                    Apply
                  </Button>
                </HStack>
              </VStack>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default FilterKYCBtn;
