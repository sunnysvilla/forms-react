import { Table } from "@chakra-ui/react";
import { format } from "date-fns";
import { useAdminGetKYCs } from "../../hooks/admin/useKyc";
import ViewDocsBtn from "./ViewDocsBtn";

const KYCTable = () => {
  const {
    data,
    // hasNextPage,
    // hasPreviousPage,
    // fetchNextPage,
    // fetchPreviousPage,
  } = useAdminGetKYCs();

  return (
    <Table.ScrollArea
      w="full"
      borderRadius="xl"
      borderWidth="1px"
      rounded="xl"
      height="100%"
    >
      <Table.Root size="md" stickyHeader>
        <Table.Header>
          <Table.Row bg="bg.subtle">
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
    </Table.ScrollArea>
  );
};

export default KYCTable;
