import React, { useState } from "react";

function Input() {
  const [value, setValue] = useState("");

  return (
    <input type={"text"} value={value} onChange={e => setValue(e.target.value)} placeholder="Temp in °C"/>
  );
}

export default function Temp1() {
  return (
    <div className="Home">
      <h1> Temperature Converter </h1>
      <Input />
      <Kelvin />
      <Fahrenheit />
    </div>
  );
}

function Kelvin({ value = 0 }){
    value = parseFloat(value);
  return <div className="temp">{value + 273.15}K</div>
}

function Fahrenheit({ value = 0}){
  return <div className="temp">{(value * 9) / 5 + 32}°F</div>
}