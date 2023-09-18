import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./RangeSlider.scss";

interface RangeSliderProps {
  min: number;
  max: number;
  onChange: (value: number | number[]) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ min, max, onChange }) => {
  const handleRangeChange = (value: number | number[]) => {
    onChange(value);
  };

  return (
    <div className="rangeSlider">
      <Slider
        range
        min={min}
        max={max}
        defaultValue={[min, max]}
        onChange={handleRangeChange}
      />
    </div>
  );
};

export default RangeSlider;
