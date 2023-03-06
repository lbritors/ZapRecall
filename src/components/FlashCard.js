import styled from "styled-components";
import setaPlay from "../assets/seta_play.png";
import setaVirar from "../assets/seta_virar.png"
import { useState } from "react";



export default function FlashCard(props) {
    const {id, dados, setVirar, virar} =  props

    const [dadoPergunta, setDadoPergunta] = useState("");
    const [clicados, setClicados] = useState(false);
    const [renderiza, setRenderiza] = useState([])
    const [viuResposta, setViuResposta] = useState(false);

    function virarCarta(item) {
        console.log(item);
        setClicados(true);
        setDadoPergunta(item);     
     }
    
 
    function mostrarResposta(item) {
        console.log(item);
        setViuResposta(true);
        setRenderiza(<Resposta></Resposta>)        

    }
  
    function Resposta(props) {
      
    }

  

    return(clicados === false ?
     
        <Carta >
            <p>Pergunta {id+1}</p>
            <img  onClick={() => virarCarta(props.pergunta)} src={setaPlay} alt="seta-play"></img>
        </Carta>
    : (viuResposta === true ?   <ContainerResposta>
        <p>{props.resposta}</p>
        <div>
           <button><p>Não lembrei</p></button>
           <button><p>Quase não lembrei</p></button>
          <button><p>Zap!</p></button>
       </div>
    </ContainerResposta> :   <ContainerPergunta>
            <p>{dadoPergunta}</p>
            <img onClick={() => mostrarResposta(props.resposta)} src={setaVirar} alt="seta-virar" ></img>
        </ContainerPergunta>)

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
    display: ${(props) => props.viuResposta ? "none" : "initial"}
   
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