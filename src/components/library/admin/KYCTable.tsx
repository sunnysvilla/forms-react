import { useEffect, useRef } from "react";
import { Table, Spinner, Box } from "@chakra-ui/react";
import { format } from "date-fns";
import { useAdminGetKYCs } from "../../hooks/admin/useKyc";
import ViewDocsBtn from "./ViewDocsBtn";

const KYCTable = () => {
  const {
    data,
    isFetching,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useAdminGetKYCs();
  const loaderRef = useRef(null);

  // Intersection Observer: triggers when sentinel div (loaderRef) enters view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { rootMargin: "100px" } // start loading slightly before reaching bottom
    );

    const node = loaderRef.current;
    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  // Flatten paginated data
  const allDocs =
    data?.pages.flatMap((page) => page.data?.data?.docs || []) ?? [];

  return (
    <Table.ScrollArea w="full" h="100%" borderWidth="1px" rounded="xl">
      <Table.Root size="md" stickyHeader h="100%">
        <Table.Header>
          <Table.Row bg="bg.subtle">
            <Table.ColumnHeader textAlign="center">Name</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="center">
              Guest Count
            </Table.ColumnHeader>
            <Table.ColumnHeader textAlign="center">Contact</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="center">Arrival</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="center">Document</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {allDocs.map((item) => (
            <Table.Row key={item._id}>
              <Table.Cell textAlign="center">{item.name}</Table.Cell>
              <Table.Cell textAlign="center">{item.guests}</Table.Cell>
              <Table.Cell textAlign="center">{item.phone}</Table.Cell>
              <Table.Cell textAlign="center">
                {format(new Date(item.arrival), "dd/MM/yy hh:mm a")}
              </Table.Cell>
              <Table.Cell textAlign="center">
                <ViewDocsBtn docs={item.ids} />
              </Table.Cell>
            </Table.Row>
          ))}

          {/* Infinite scroll trigger */}
          <Table.Row>
            <Table.Cell colSpan={5} textAlign="center">
              <Box ref={loaderRef} py={4}>
                {isFetchingNextPage || isFetching || isLoading ? (
                  <Spinner size="sm" />
                ) : hasNextPage ? (
                  "Scroll to load more…"
                ) : (
                  "No more results"
                )}
              </Box>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
};

export default KYCTable;
