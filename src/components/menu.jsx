import styled from "styled-components"
import Home from "../pages/Home";
import Classic from "../pages/ClassicRock";
import Heavy from "../pages/Heavy-metal";

const StyledMenu = styled.menu`

    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 30%;
    border-radius: 10px 0 0 10px;
    background-color: yellow;
    margin: 0;
    padding: 0;

    a{
        font-size: 25px;
        padding: 90px 0;
        text-align: center;
        color: black;
    
    }

    a:hover{
        background-color: black;
        color: white;
    }
`;

function Menu(){
    return <StyledMenu>
        <Home/>
        <Classic/>
        <Heavy/>
    </StyledMenu>
}

export default Menu;