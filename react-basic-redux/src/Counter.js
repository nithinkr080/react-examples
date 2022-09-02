function Counter(props) {
  console.log(props.show);
  return (
    <div>
      {props.show && <h1>{props.count}</h1>}
      <button onClick={props.increase}>Increase</button>
      <button onClick={() => props.increment(5)}>increment</button>
      <div>
        <button onClick={props.ui}>show/hide</button>
      </div>
    </div>
  );
}

export default Counter;
