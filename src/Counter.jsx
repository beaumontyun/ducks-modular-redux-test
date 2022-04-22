import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "./redux/ducks/counter";

const Counter = (props) => {
  // parent props from App.js
  const { name } = props;

  // set redux state via useDispatch()
  const dispatch = useDispatch();

  // set local state (non-redux)
  const [votes, setVotes] = React.useState(0);

  const handleIncrement = () => {
    // get redux function 'increment'
    dispatch(increment());
    // local state for each user
    setVotes(votes + 1);
  };
  const handleDecrement = () => {
    // get redux function 'decrement'
    dispatch(decrement());
    // local state for each user
    setVotes(votes - 1);
  };

  return (
    <div style={{ backgroundColor: "grey", margin: "10px" }}>
      <h2> {name} </h2>
      <h3> {`Votes: ${votes}`} </h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={handleIncrement}> Increment </button>
        <button onClick={handleDecrement}> Decrement </button>
      </div>
    </div>
  );
};

export default Counter;
