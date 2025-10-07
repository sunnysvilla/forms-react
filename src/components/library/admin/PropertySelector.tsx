import {
  Combobox,
  useFilter,
  useListCollection,
  type ComboboxValueChangeDetails,
} from "@chakra-ui/react";
import type { PropertyResponse } from "../../entities/property";
import { useState, useMemo } from "react";

const PropertySelector = ({
  properties,
}: {
  properties: PropertyResponse[];
}) => {
  const { contains } = useFilter({ sensitivity: "base" });

  const propertyOptions = properties.map((property) => {
    return {
      label: property.name,
      value: property._id,
    };
  });

  const [value, setValue] = useState(properties[0]._id);

  // Find the selected property's label
  const selectedProperty = useMemo(() => {
    return propertyOptions.find((option) => option.value === value);
  }, [value, propertyOptions]);

  const [inputValue, setInputValue] = useState(selectedProperty?.label || "");

  const { collection, filter } = useListCollection({
    initialItems: propertyOptions,
    filter: contains,
  });

  const handleValueChange = ({
    value: newValue,
  }: ComboboxValueChangeDetails) => {
    const selectedValue = newValue[0];
    setValue(selectedValue);

    // Update input value to show the selected label
    const selected = propertyOptions.find(
      (option) => option.value === selectedValue
    );
    if (selected) {
      setInputValue(selected.label);
    }
  };

  return (
    <Combobox.Root
      collection={collection}
      value={[value]}
      onValueChange={handleValueChange}
      onInputValueChange={(e) => {
        setInputValue(e.inputValue);
        filter(e.inputValue);
      }}
      positioning={{ strategy: "fixed", hideWhenDetached: true }}
      variant="subtle"
    >
      <Combobox.Control>
        <Combobox.Input
          value={inputValue}
          placeholder="Type to search"
          outline="none"
          borderRadius="xl"
        />
        <Combobox.IndicatorGroup>
          <Combobox.ClearTrigger />
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
