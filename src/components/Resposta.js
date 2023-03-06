import styled from "styled-components";

export default function Resposta(props) {
const {respondeu, color, cartaFinal, dados, id} = props;

    return (
        <ContainerResposta color={color} cartaFinal={cartaFinal}>
            <p data-test="flashcard-text">{dados[id].resposta}</p>
            <div>
                <button  data-test="no-btn" color="#FF3030" onClick={() => respondeu("wrong")}><p>Não lembrei</p></button>
                <button color="#FF922E" data-test="partil-btn" onClick={()  => respondeu("almost")}><p>Quase não lembrei</p></button>
                <button  color="#2FBE34"data-test="zap-btn" onClick={() => respondeu("correct")}><p>Zap!</p></button>
            </div>
        </ContainerResposta>

    )
}

const ContainerResposta = styled.div `
    width: 299px;
    height: 131px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
        margin-left: 6px;
        }
    div {
        width: 270px;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        button {
            width: 85px;
            height: 37px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            border: none;
            p {
                font-family: 'Recursive';
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 14px;
                display: flex;
                align-items: center;
                text-align: center;
                color: #FFFFFF;
            }
            :nth-of-type(1) {
                background-color: #FF3030;
;

            }
            :nth-of-type(2) {
                background-color: #FF922E;

            }
            
            :nth-of-type(3) {
                background-color: #2FBE34;
;

            }

        }
    }
    

`