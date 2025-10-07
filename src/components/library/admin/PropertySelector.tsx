import { Combobox, useFilter, useListCollection } from "@chakra-ui/react";
import type { Property } from "../../entities/property";

const PropertySelector = ({ properties }: { properties: Property[] }) => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    initialItems: properties.map((property) => {
      return {
        label: property.name,
        value: property.name,
      };
    }),
    filter: contains,
  });

  return (
    <Combobox.Root
      collection={collection}
      onInputValueChange={(e) => filter(e.inputValue)}
      positioning={{ strategy: "fixed", hideWhenDetached: true }}
      variant="subtle"
    >
      <Combobox.Control>
        <Combobox.Input
          placeholder="Type to search"
          outline="none"
          borderRadius="xl"
        />
        <Combobox.IndicatorGroup>
          <Combobox.Trigger />
        </Combobox.IndicatorGroup>
      </Combobox.Control>
      <Combobox.Positioner>
        <Combobox.Content>
          <Combobox.Empty>No items found</Combobox.Empty>
          {collection.items.slice(0, 5).map((item) => (
            <Combobox.Item item={item} key={item.value}>
              {item.label}
              <Combobox.ItemIndicator />
            </Combobox.Item>
          ))}
        </Combobox.Content>
      </Combobox.Positioner>
    </Combobox.Root>
  );
};

export default PropertySelector;
