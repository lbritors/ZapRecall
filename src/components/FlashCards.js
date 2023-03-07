import { useState } from "react";
import styled from "styled-components";
import FlashCard from "./FlashCard";





export default function FlashCards({dados, contador, setContador}) {

    
   
    
    const [virar, setVirar] = useState(false);

  
  

    
    return(
        <Container>
             {dados.map(d => <FlashCard id={d.id}  contador={contador} setContador={setContador} contavirar={virar} vsetVirar={setVirar} dados={dados} key={d.id} pergunta={d.pergunta} respondida={d.respondida} resposta={d.resposta}/>)}
        </Container>
    );


}

const Container = styled.div`
    width: 330px;
    height: 600px;
    overflow-y: hidden;
    
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
    flex-direction: column;

`

