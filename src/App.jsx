import { useState } from "react";

function App() {
  const [advice, setAdvice] = useState("Click on the Button");

  function api() {
    const url = ""
  }

  return (
    <>
      <div className="w-full h-screen bg-slate-900 flex flex-col justify-center">
        <h1 className="text-4xl text-white font-semibold text-center">
          Advices
        </h1>
        <p className="text-white font-light text-center">{advice}</p>
      </div>
    </>
  );
}

export default App;
