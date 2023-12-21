import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const posswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPassword = useCallback(() => {
    window.navigator.clipboard.writeText(password);
  });

  useEffect(() => {
    posswordGenerator();
  }, [length, numberAllowed, charAllowed, posswordGenerator]);

  return (
    <>
      <div className="mt-3">
        <h1 className="text-4xl text-center">Password Generator</h1>
        <div className="flex-col items-cneter border p-4 m-4 bg-blue-200 rounded">
          <div className="flex justify-center items-center w-full gap-4 p-2 my-2">
            <input
              type="text"
              value={password}
              className="border p-1"
              placeholder="password"
              readOnly
              ref={passwordRef}
            />
            <button className="bg-blue-400 p-1 px-2 rounded-xl" onClick={copyPassword}>
              Copy
            </button>
          </div>
          <div className="flex gap-3 justify-center items-center">
            <div className="flex gap-3">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length: {length}</label>
            </div>
            <div>
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label>Numbers</label>
            </div>
            <div>
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="charInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
