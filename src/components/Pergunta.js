import styled from "styled-components"
import setaVirar from "../assets/seta_virar.png"


export default function Pergunta(props) {
    const {dadoPergunta, dados, mostrarTexto, id} = props;
    console.log(dados);

    return (
    <ContainerPergunta dadoPergunta={dadoPergunta}>
        <p data-test="flashcard-text">{dadoPergunta}</p>
        <img data-test="turn-btn" onClick={() => mostrarTexto(dados[id])} src={setaVirar} alt="seta-virar" ></img>
    </ContainerPergunta>
    )
}


const ContainerPergunta = styled.div`
    width: 299px;
    height: 131px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    position: relative;
   
    p {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    margin-left: 6px;
    }
    img {
        width: 30px;
        height: 20px;
        margin-right: 6px;
        position: absolute;
        bottom: 6px;
        right: 8px;
    }
`;