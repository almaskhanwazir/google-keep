import React, { useState } from "react";
import "./colorPicker.scss"
function ColorPicker({ setBgColor, id}) {
  const [isPalleteOpen, setIsPalleteOpen] = useState(false);
  const colors = [
    "rgba(255,255,255,0.8)",
    "#f28b82",
    "#fbbc04",
    "#fff475",
    "#ccff90",
    "#a7ffeb",
    "#cbf0f8",
    "#aecbfa",
    "#d7aefb",
    "#fdcfe8",
    "#e6c9a8",
    "#e8eaed",
  ];
  return (
    <div className="colorPickerContainer">
      <button className="colorBtn"
       onMouseOver={() => {
        setIsPalleteOpen(true);
      }}
      >
      </button>
      {isPalleteOpen && (
        <div
          className="pallette"
          onMouseLeave={() => setIsPalleteOpen(false)}
        >
          {colors.map((color, index) => (
            <button
              style={{
                background: color,
              }}
              className="btnColor"
              onClick={() => setBgColor(color,id)}
              key={index}
            >
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ColorPicker;
