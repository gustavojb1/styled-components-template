import {Aluno} from "./EstudanteStyled"

function Estudante(props) {
  return (
    <Aluno>
      <div>
        <ul>
          <li>nome: {props.nome}</li>
          <li>idade: {props.idade}</li>
          <li>corDaRoupa:{props.corDaRoupa}</li>
          <li>criadoPor:{props.criadoPor}</li>
        </ul>
      </div>
    </Aluno>
  );
}

export default Estudante;
