import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "./store/counterSlice";
import { uiActions } from "./store/uiSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.count.count);
  const ui = useSelector((state) => state.ui.ui);
  return (
    <div>
      {ui && <h1>{counter}</h1>}
      <button onClick={() => dispatch(counterActions.inc())}>increase</button>
      <button onClick={() => dispatch(counterActions.increment(5))}>
        increment
      </button>
      <div>
        <button onClick={() => dispatch(uiActions.ui())}>show/hide</button>
      </div>
    </div>
  );
};

export default Counter;
