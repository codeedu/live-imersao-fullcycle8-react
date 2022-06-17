import { useState } from "react";
import { Title } from "./components/Title";

//let count = 0;

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Title color="red" variant="md">
        Live React.js do Full cycle
      </Title>
      <p id="count">Contador de cliques: {count}</p>
      <button
        onClick={(e) => {
          console.log(e);
          setCount(count + 1);
          //document.querySelector("#count")!.innerHTML = `Contador de cliques: ${++count}`;
          //count = count + 1
        }}
      >
        Me clique!!!
      </button>
      <button
        onClick={(e) => {
          setCount(0);
        }}
      >
        Zera clique
      </button>
    </div>
  );
}

export default App;

//Isto vai se repetir muitas vezes na aplicação
//Para grandes componentes, crie filhos ou segregue o filho
//Performance - renderização
