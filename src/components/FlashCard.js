import styled from "styled-components";
import setaPlay from "../assets/seta_play.png";
import setaVirar from "../assets/seta_virar.png"



export default function FlashCard(props) {
    const {id, dados, virarCarta, renderiza, setVirar, virar} =  props
  


    return(
    <> 
    {virar === true ? 
        <ContainerPergunta>
            <p>{renderiza.pergunta}</p>
            <img src={setaVirar} alt="seta-virar" ></img>
        </ContainerPergunta>
        : <Carta>
            <p>Pergunta {id+1}</p>
            <img onClick={() => virarCarta(id)} src={setaPlay} alt="seta-play"></img>
        </Carta>}
        
    </>
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

const ContainerPergunta = styled.div`
    width: 299px;
    height: 131px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    position: relative;
    display: none;
   
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
`
