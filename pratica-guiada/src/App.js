import Turma from "./Componentes/Turma";
import styled from "styled-components";
import { GlobalStyled } from "./GlobalStyled";

//A estilização global está em outro arquivo chamado "GlobalStyled.js"
// const GlobalStyled = createGlobalStyle`
//   *{
//     font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
//     padding: 0;
//     margin: 0;
//     box-sizing: border-box;
//   }
// `

const TextoVermelho = styled.h1`
  color: red;
  background-color: black;
`

function App() {
  const responsavel = "João";
  const nomeDaTurma = "Ammal";

  function apresentarTurma() {
    alert(`Bom dia turma! ${nomeDaTurma}`);
  }

  return (
    <div className="App">
      <GlobalStyled/>
      <TextoVermelho>
        Olá, Bom dia
      </TextoVermelho>
      <Turma
        turma={nomeDaTurma}
        responsavel={responsavel}
        apresentar={apresentarTurma}
      />
    </div>
  );
}

export default App;
