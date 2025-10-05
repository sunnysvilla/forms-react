import {
  ButtonGroup,
  IconButton,
  Pagination,
  Stack,
  Table,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import ViewDocsBtn from "./ViewDocsBtn";
import { useAdminGetKYCs } from "../../hooks/admin/useKyc";

const KYCTable = () => {
  const {
    data,
    hasNextPage,
    hasPreviousPage,
    fetchNextPage,
    fetchPreviousPage,
  } = useAdminGetKYCs();

  console.log(
    data?.pages[(data.pageParams[0] as number) - 1].data.data.totalPages
  );

  const handlePrev = () => {
    if (hasPreviousPage) fetchPreviousPage();
  };

  const handleNext = () => {
    if (hasNextPage) fetchNextPage();
  };

  return (
    <Stack width="full" gap="5">
      <Table.Root size="sm" variant="outline" striped borderRadius="xl">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="center">
              Guest Count
            </Table.ColumnHeader>
            <Table.ColumnHeader textAlign="center">Contact</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="center">Arrival</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="center">Document</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data?.pages[(data.pageParams[0] as number) - 1].data.data.docs.map(
            (item) => (
              <Table.Row key={item._id}>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell textAlign="center">{item.guests}</Table.Cell>
                <Table.Cell textAlign="center">{item.phone}</Table.Cell>
                <Table.Cell textAlign="center">
                  {format(new Date(item.arrival), "dd/MM/yy hh:mm a")}
                </Table.Cell>
                <Table.Cell textAlign="center">
                  <ViewDocsBtn docs={item.ids} />
                </Table.Cell>
              </Table.Row>
            )
          )}
        </Table.Body>
      </Table.Root>

      <Pagination.Root
        count={
          (data?.pages[(data.pageParams[0] as number) - 1].data.data
            .totalPages || 1) * 5
        }
        pageSize={
          data?.pages[(data.pageParams[0] as number) - 1].data.data.limit
        }
        page={(data?.pageParams[0] as number) || 1}
      >
        <ButtonGroup variant="ghost" size="sm" wrap="wrap">
          <Pagination.PrevTrigger asChild onClick={handlePrev}>
            <IconButton>
              <LuChevronLeft />
            </IconButton>
          </Pagination.PrevTrigger>

          <Pagination.Items
            render={(page) => (
              <IconButton variant={{ base: "ghost", _selected: "outline" }}>
                {page.value}
              </IconButton>
            )}
          />

          <Pagination.NextTrigger asChild onClick={handleNext}>
            <IconButton>
              <LuChevronRight />
            </IconButton>
          </Pagination.NextTrigger>
        </ButtonGroup>
      </Pagination.Root>
    </Stack>
  );
};

export default KYCTable;
