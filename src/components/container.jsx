import styled from "styled-components";
import Menu from "./menu";
import Conteudo from "./conteudo";

      const StyledContainer = styled.main`
        display: flex;
        width: 60vw;
        height: 70vh;
        /* border: 10px solid black; */
        position: relative;
        left: 35%;
        border-radius: 10px;
        box-shadow: 2px 2px 50px;
        background-color: white;
        
      `;

function Container() {
    return <StyledContainer>
            <Menu/> 
            <Conteudo/>
        </StyledContainer>;
}

export default Container;

