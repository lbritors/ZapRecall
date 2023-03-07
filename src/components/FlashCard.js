import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Carta";
import Pergunta from "./Pergunta";
import Resposta from "./Resposta";
import Respondida from "./Respondida";
import iconeCerto from "../assets/icone_certo.png";
import iconeQuase from "../assets/icone_quase.png";
import iconeErro from "../assets/icone_erro.png";



export default function FlashCard(props) {

    const {id, dados, setVirar, virar} =  props    
    const [dadoPergunta, setDadoPergunta] = useState("");
    const [clicados, setClicados] = useState(false);
    const [viuResposta, setViuResposta] = useState(false);
    const [color, setColor] = useState();
    const [emoji, setEmoji] = useState();
    const [respondida, setRespondida] = useState(false)
    const [cartaFinal, setCartaFinal] = useState(false);

    function virarCarta(item) {
        console.log(item);
        setClicados(true);
        setDadoPergunta(item);     
     }
    
 
    function mostrarTexto() {
        setViuResposta(true);
    }

   

    function respondeu(e) {
    console.log(e);
    if(respondida === false) {
        if(e === "wrong") {
            console.log("errrou")
            setRespondida(true);
            setClicados(false);
            setCartaFinal(true);
            setEmoji(iconeErro);
            setColor("#FF3030");
            const erro = "#FF3030";
            setColor(erro);
            
            
        } else if(e === "almost") {
            console.log("quasseeee")
            setRespondida(true);
            setClicados(false);
            setCartaFinal(true);
            setEmoji(iconeQuase);
            setColor("#FF922E");
            const erro = "#FF922E";
            setColor(erro);
           
            
        }else if (e === "correct"){ 
            console.log("aeee")
            setRespondida(true);
            setClicados(false);
            setCartaFinal(true);
            setEmoji(iconeCerto);
            setColor("#2FBE34");
            const erro = "#2FBE34";
            setColor(erro);
        }
        
        
    }

}
  

    return((clicados === false) ?
     <Card virarCarta={virarCarta} id={id} dados={dados}></Card>
  
    : (viuResposta === false ?  
    <Pergunta dadoPergunta={dadoPergunta} dados={dados} mostrarTexto={mostrarTexto}></Pergunta>
    : (respondida === true ? 
     <Respondida id={id} dados={dados} emoji={emoji} color={color} setEmoji={setEmoji} certo={iconeCerto} quase={iconeQuase} erro={iconeErro} virarCarta={virarCarta}></Respondida>   
   
    :

     <Resposta dados={dados} id={id} respondeu={respondeu}></Resposta>)  )

    ); 
        
};











