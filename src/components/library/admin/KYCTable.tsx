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
  const { data } = useAdminGetKYCs();

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

      <Pagination.Root count={items.length * 5} pageSize={5} page={1}>
        <ButtonGroup variant="ghost" size="sm" wrap="wrap">
          <Pagination.PrevTrigger asChild>
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

          <Pagination.NextTrigger asChild>
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

const items = [
  {
    _id: "68d8020d81ad60ae41be8b94",
    name: "Dharshini",
    phone: 9943980321,
    guests: 2,
    ids: [
      "https://drive.google.com/file/d/1bjqGHKUV8gtlfPPWdSCLXfzHRaIt6YD-/view?usp=drivesdk",
      "https://drive.google.com/file/d/1p9AO7qoUCQx22lhRErmIDbcLbjYzh6IG/view?usp=drivesdk",
    ],
    arrival: "2025-09-27T23:10:00.000Z",
    property: "68d7f2d778bb1b5f57229098",
    __v: 0,
  },
  {
    _id: "68d80646dc6a34363fa58058",
    name: "Dharshini",
    phone: 9943980321,
    guests: 2,
    ids: [
      "https://drive.google.com/file/d/11TMobCHEWDXKBJBAeLrlOwrbsNvWilHt/view?usp=drivesdk",
      "https://drive.google.com/file/d/1oe43_-8PkaawqtwgAbaEPoExBGpADZ2Z/view?usp=drivesdk",
    ],
    arrival: "2025-09-27T00:00:00.000Z",
    property: "68d7f2d778bb1b5f57229098",
    __v: 0,
  },
  {
    _id: "68d807ae238472caaa8cafd6",
    name: "Dharshini",
    phone: 9943980321,
    guests: 2,
    ids: [
      "https://drive.google.com/file/d/1n-7cD4o9eBI8bjfwainbYi-stZnNLx2e/view?usp=drivesdk",
      "https://drive.google.com/file/d/1Cuvh2Nx6kyEZWXGqHnA5awZog2Qa0DmE/view?usp=drivesdk",
    ],
    arrival: "2025-09-27T00:00:00.000Z",
    property: "68d7f2d778bb1b5f57229098",
    __v: 0,
  },
];
