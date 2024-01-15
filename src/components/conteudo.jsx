import styled from "styled-components";
import Home from "../pages/Home";
import Classic from "../pages/ClassicRock";
import Heavy from "../pages/Heavy-metal";
import Menu from "./menu";

const StyledConteudo = styled.menu`
  border: 10px solid black;
  border-radius: 0 10px 10px 0;
  width: 70%;
  margin: 0;
`;

function Conteudo() {
  return (
    <StyledConteudo>
      <Home/>
      <Classic/>
      <Heavy/>
    </StyledConteudo>
  );
}

export default Conteudo;
