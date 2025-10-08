import { createListCollection, Select } from "@chakra-ui/react";
import { useState } from "react";
import type { PropertyResponse } from "../../entities/property";

const PropertySelector = ({
  properties,
}: {
  properties: PropertyResponse[];
}) => {
  const propertyOptions = createListCollection({
    items: properties.map((property) => {
      return {
        label: property.name,
        value: property._id,
      };
    }),
  });

  const [value, setValue] = useState(properties[0]._id);

  return (
    <Select.Root
      w="300px"
      collection={propertyOptions}
      value={[value]}
      onValueChange={(e) => setValue(e.value[0])}
    >
      <Select.HiddenSelect />
      <Select.Label />

      <Select.Control>
        <Select.Trigger
          bg="teal.subtle"
          color="teal.300"
          borderColor="teal.900"
          fontWeight="semibold"
          rounded="xl"
        >
          <Select.ValueText />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
          <Select.ClearTrigger />
        </Select.IndicatorGroup>
      </Select.Control>

      <Select.Positioner>
        <Select.Content rounded="lg">
          {propertyOptions.items.map((property) => (
            <Select.Item item={property} key={property.value} rounded="lg">
              {property.label}
              <Select.ItemIndicator />
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  );
};

export default PropertySelector;
