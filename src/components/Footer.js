import { useCallback, useState } from "react";
import styled from "styled-components";
import DADOS from "../mock"


export default function Footer(props) {
 const {contador} = props;
console.log(DADOS.length);
    return (
        <>
            <Container>
                <h2>{contador}/{DADOS.length} CONCLUÍDOS</h2>
            </Container>
        </>


    );
}


const Container = styled.div`
    background-color: white;
    height: 70px;
    width: 100%;
    bottom:0;
    left: 0;
    position: fixed;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Recursive";
`