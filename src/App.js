
import './App.css';
import {useDispatch,useSelector} from 'react-redux';
import { INCR,DECR } from './reducers/counterSlice';

function App() {
  const dispatch =useDispatch();
  const count = useSelector(state => state.counter.value);
  return (
    <div className="App">
      <h1>Count:{count} </h1>
        <button onClick={() => dispatch(INCR())}>Increase</button>
        <button onClick={() => dispatch(DECR())}>Decrease</button>
        <button>RESET</button>
      </div>
  );
}

export default App;
