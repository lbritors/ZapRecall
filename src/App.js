import styled from "styled-components";
import "./components/Footer";
import Footer from "./components/Footer";
import "./css/reset.css"
import logo from "./assets/logo.png"
import FlashCards from "./components/FlashCards";

function App() {
  return (
    <Container>
      <Titulo>
        <img src={logo} alt="logo"></img>
        <h1>ZapRecall</h1>
      </Titulo>
      <FlashCards/>
      <Footer/>
    </Container>
  );
}

export default App;


const Container = styled.div`
  background: #FB6B6B;
  border: 1px solid #DBDBDB;
  width: 375px;
  height: 667px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
  

`

const Titulo = styled.div`
display: flex;
margin-top: 15px;

  h1{
    font-family: "Righteous";
    font-size: 36px;
    line-height: 45px;
    letter-spacing: -0.012em;
    font-weight: 400;
    color: white;
    font-style: normal;
  }
  img{
    margin-top: 15px;
    margin-right: 10px;
    width: 52px;
    height: 60px;
  }



`