import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

interface RangeFilterProps {
  min: number;
  max: number;
  onChange: (value: number | number[]) => void; // Update the parameter type here
}

const RangeFilter: React.FC<RangeFilterProps> = ({ min, max, onChange }) => {
  const handleRangeChange = (value: number | number[]) => { // Update the parameter type here
    // Call the onChange prop to pass the selected range to the parent component
    onChange(value);
  };

  return (
    <div>
      <Slider
        range
        min={min}
        max={max}
        defaultValue={[min, max]} // Initial range values
        onChange={handleRangeChange}
      />
    </div>
  );
};

export default RangeFilter;
