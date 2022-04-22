import React from "react";
import { useSelector } from "react-redux";
import Counter from "./Counter";
import "./styles.css";

export default function App() {
  // get redux state via useSelector()
  const count = useSelector((state) => state.counter.count);

  const names = [
    "John Smith",
    "Samantha Groves",
    "Josh Carter",
    "Kevin Spacey"
  ];
  return (
    <div className="App">
      <h1>Redux made easy</h1>
      <h2> Total Votes: {count}</h2>
      {names.map((name) => (
        <Counter name={name} />
      ))}
    </div>
  );
}
