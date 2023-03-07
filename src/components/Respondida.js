import styled from "styled-components";



export default function Respondida(props) {
    const {id, emoji, certo, erro, quase, color} = props;

    return(
    <CartaRespondida emoji={emoji} color={color} certo={certo} quase={quase} erro={erro} d={id}>
        <p data-test="flashcard-text">Pergunta {id+1}</p>
        <img  src={emoji} alt="icone"></img>
    </CartaRespondida> 
    );


}



const CartaRespondida = styled.div `
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
        color: ${({emoji, certo, erro, quase, color}) =>  emoji===erro? color : emoji ===quase ? color: emoji === certo ? color : "black"} ;
        text-decoration: line-through;
    }
    img {
        width: 23px;
        height: 23px;

    }
`;
