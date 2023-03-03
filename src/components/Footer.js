import styled from "styled-components";


export default function Footer() {
    return (
        <>
            <Container>
                <h2>0/4 CONCLUÍDOS</h2>
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