import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const addCount = () => {
    if ( count < 20 ) {
      setCount(count + 1);
    } else {
       alert('Limit is 20 only')
    }
  };
  const removeCount = () => {
    if ( count > 0 ) {
      setCount(count - 1);
    } else {
       alert('Limit is 0 only')
    }
  };
  return (
    <>
      <div>
        <h1>Counter APP</h1>
        <h1>Current Count: {count}</h1>
        <button onClick={addCount}>Add count : {count}</button>
        <button onClick={removeCount}>Remove count</button>
      </div>
    </>
  );
}

export default App;
