import { useState } from "react";
function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className=" w-auto h-screen flex justify-center items-center font-bold" style={{ backgroundColor: color }}>
      <h1>Choose Your Background Color</h1>
      <div className="fixed bottom-12 inset-x-10 justify-center flex ">
        <div className="bg-white p-3 rounded-lg shadow flex flex-wrap gap-3">
          <button
            className="text-white bg-green-900 px-2 py-1 rounded-xl"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="text-white bg-red-900 px-2 py-1 rounded-xl"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="text-white bg-yellow-700 px-2 py-1 rounded-xl"
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
