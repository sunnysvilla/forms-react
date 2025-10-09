import { createListCollection, Select } from "@chakra-ui/react";
import type { PropertyResponse } from "../../entities/property";
import useKYCQuery from "../../store/kycQuery";

const PropertySelector = ({
  properties,
}: {
  properties: PropertyResponse[];
}) => {
  const { slug, setSlug } = useKYCQuery();

  const propertyOptions = createListCollection({
    items: properties.map((property) => {
      return {
        label: property.name,
        value: property.slug,
      };
    }),
  });

  return (
    <Select.Root
      w="300px"
      collection={propertyOptions}
      value={[slug]}
      onValueChange={(e) => setSlug(e.value[0])}
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
