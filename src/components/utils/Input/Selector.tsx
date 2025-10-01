import { Select } from "@chakra-ui/react";
import { months } from "../../data/months";

const Selector = () => {
  return (
    <Select.Root collection={months}>
      <Select.HiddenSelect />
      <Select.Label />

      <Select.Control>
        <Select.Trigger>
          <Select.ValueText />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
          <Select.ClearTrigger />
        </Select.IndicatorGroup>
      </Select.Control>

      <Select.Positioner>
        <Select.Content>
          {months.items.map((month) => (
            <Select.Item item={month} key={month.value}>
              {month.label}
              <Select.ItemIndicator />
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  );
};

export default Selector;
