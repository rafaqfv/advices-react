import { useState } from "react";

function App() {
  const [advice, setAdvice] = useState("Click on the Button");

  function api() {
    setAdvice("Loading...");
    const url = "https://api.adviceslip.com/advice";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const apiAdvice = data?.slip?.advice ?? "Nada";
        setAdvice(apiAdvice);
      })
      .catch((error) => {
        console.error("Erro ao fazer a solicitação:", error);
      });
  }

  return (
    <>
      <div className="w-full h-screen bg-slate-900 flex flex-col justify-center items-center">
        <h1 className="text-4xl text-white font-semibold text-center">
          Advices
        </h1>
        <p className="text-white font-light text-center">{advice}</p>
        <button
          className="absolute bottom-4 bg-yellow-500 rounded-lg px-4 py-2"
          onClick={api}
        >
          Get an advice
        </button>
      </div>
    </>
  );
}

export default App;
