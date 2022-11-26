import React, { useState } from "react";

function Input({ value, handleChange }) {
    return <input value={value} onChange={e => handleChange(e.target.value)} placeholder="Temp in °C"/>;
  }

//簡単な解決法
//小要素で共有する state 情報をただ親に持たせただけ
//しかし、setvalue , Inputが受け取る値が変わるたびに全てが再レンダリングするため、パフォーマンスが悪くなる
export default function Temp2() {
    const [value, setValue] = useState("");

    return (
        <div className="Home">
            <h1> Temperature Converter </h1>
            <Input value={value} handleChange={setValue}/>
            <Kelvin value={value}/>
            <Fahrenheit value={value}/>
        </div>
    );
}

function Kelvin({ value = 0.0}){
  value = parseFloat(value);
  return <div className="temp">{value +  273.15}K</div>
}

function Fahrenheit({ value = 0}){
  return <div className="temp">{(value * 9) / 5 + 32}°F</div>
}