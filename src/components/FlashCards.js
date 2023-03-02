import styled from "styled-components";

export default function FlashCards() {
    return(
        <Container>
            <FlashCard>s</FlashCard>
        </Container>
    );


}

function FlashCard() {
    return(
        <Carta>

        </Carta>


    );
}

const Carta = styled.div`
    height: 65px;
    width: 300px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);

`

const Container = styled.div`
    width: fit-content;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;

`