import { useState } from "react";
import styled from "styled-components";
import FlashCard from "./FlashCard";





export default function FlashCards({dados}) {

    const {id, pergunta, respondida, resposta} = dados;
   
   
    
    const [virar, setVirar] = useState(false);

  
  

    
    return(
        <Container>
             {dados.map(d => <FlashCard id={d.id}  virar={virar} vsetVirar={setVirar} dados={dados} key={d.id} pergunta={d.pergunta} respondida={d.respondida} resposta={d.resposta}/>)}
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

