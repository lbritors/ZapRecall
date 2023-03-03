import styled from "styled-components";
import seta from "../assets/seta_play.png";


export default function FlashCard({id}) {

    return(
        <Carta>
            <p>Pergunta {id}</p>
            <img src={seta} alt="seta-play"></img>
        </Carta>


    );
};




const Carta = styled.div`
    height: 65px;
    width: 300px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-around;
    align-items: center;
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: black;
    }
    img {
        width: 20px;
        height: 23px;
    }
`;