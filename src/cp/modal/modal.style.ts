import styled from "styled-components/native"

const ViewPrincipal = styled.View<{$background:string}>`
    position: absolute; 
    flex: 1;
    top: 37.5%;
    left: 12.5%;
    width: 75%;
    height: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    border: 1px;
    padding: 10px;
    background-color: ${p=>p.$background} ;
    z-index: 1;
`;

const ViewTopo = styled.View<{$background:string}>`

    display: flex;
    position: relative;
    height: 15%;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${p=>p.$background};
    
`;

const ViewCentral = styled.View<{$background:string}>`

    display: flex;
    position: relative;
    width: 100%;
    height: 70%;
    justify-content: center;
    align-items: center;
    background-color: ${p=>p.$background};
    
`;

const ViewFinal = styled.View<{$background:string}>`

    display: flex;
    width: 100%;
    height: 15%;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: ${p=>p.$background};
    
    
`;

const Texto = styled.Text`
  height: 80%;
  font-size: 18px;
  color: black;
`;

const Botao = styled.Button`
  border: none;
  &:hover{
    transition: 500ms;
    background-color: #9b0101;
    cursor: pointer;
  }

  &:active{
    border: none !important;
  }

`;
export {ViewPrincipal, ViewTopo, ViewCentral, ViewFinal, Botao, Texto}