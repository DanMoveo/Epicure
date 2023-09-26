import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./RangeSlider.scss";

interface RangeSliderProps {
  min: number;
  max: number;
  onChange: (value: number | number[]) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ min, max, onChange }) => {
  const [sliderValue, setSliderValue] = useState<[number, number]>([min, max]);

  const handleRangeChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setSliderValue([value[0], value[1]]);
      onChange(value);
    } else {
    }
  };

  return (
    <div className="rangeSlider">
      <Slider
        range
        min={min}
        max={max}
        defaultValue={[min, max]}
        onChange={handleRangeChange}
        handleStyle={[
          sliderValue[0] === min
            ? { backgroundColor: "black", borderColor: "black" }
            : {},
          sliderValue[1] === max
            ? { backgroundColor: "black", borderColor: "black" }
            : {},
        ]}
      />
    </div>
  );
};

export default RangeSlider;
