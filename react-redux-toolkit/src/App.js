import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./Counter";
import { Hello } from "./Hello";
function App() {
  return (
    <div className="App">
      <Hello />
      <Counter />
    </div>
  );
}

export default App;
