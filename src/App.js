import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByNum } from "./redux/counter";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Count is : {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByNum(10))}>
        increment by number
      </button>
    </div>
  );
}

export default App;
