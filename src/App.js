import { useState } from 'react';
import './App.css';

function Counter(props) {
  const [count, setCount] = useState(0);

 return(
  <div>
    <h1>{props.titleProps}</h1>
    <button onClick={() => setCount(count + 1)}>+</button> 
    <button onClick={() => setCount(count - 1)}>-</button>
    👉 {props.initValue}
  </div>
 );
}

function App() {
  return (
    <div className="App">
      <Counter titleProps="불면증카운터" initValue="10"></Counter>
      <Counter titleProps="입장객카운터" initValue="20"></Counter>
    </div>
  );
}

export default App;
