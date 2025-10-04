import { Combobox, useFilter, useListCollection } from "@chakra-ui/react";

const PropertySelector = () => {
  const { contains } = useFilter({ sensitivity: "base" });

  const { collection, filter } = useListCollection({
    initialItems: frameworks,
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

const frameworks = [
  { label: "React", value: "react" },
  { label: "Solid", value: "solid" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Preact", value: "preact" },
  { label: "Qwik", value: "qwik" },
  { label: "Lit", value: "lit" },
  { label: "Alpine.js", value: "alpinejs" },
  { label: "Ember", value: "ember" },
  { label: "Next.js", value: "nextjs" },
];
