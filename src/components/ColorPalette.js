import React, { useState } from "react";

export default function ColorPalette() {


  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "black",
  ];

  const changeColors = (color) => {
    document.body.style.backgroundColor = color;
    
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.style.backgroundColor = color;
    }
  };

  return (
    <div>
      

      <div style={{ display: "flex", gap: "10px" }}>
        {colors.map((color) => (
          <div
            key={color}
           onClick={() => changeColors(color)}
            style={{
              width: "30px",
              height: "30px",
              backgroundColor: color,
              cursor: "pointer",
              border: "2px solid black",
            }}
          ></div>
        ))}
      </div>

     

      
    </div>
  );
}
