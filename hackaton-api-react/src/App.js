import './App.css';
import styled from "styled-components"
import React from 'react'
//import TextGlitchEffect from "react-text-glitch-effect";

const Button = styled.button`
  background-color: #c3c3c3;
  color: black;
  font-family: W95;
  font-size: 25px;
  
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  border-width: 1px; 
  border-style: solid
  text-transform: uppercase;
  margin: 4px 4px;
  cursor: pointer;
  box-shadow: 0px 2px 2px black;
  transition: ease background-color 250ms;
  &:hover {
    background-color: white;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

function submiting(formData) {
  const input = formData.get("input");
  alert(`you inputed '${input}'`);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="window">
          <p className='head-window'>
              Test
          </p>
          <form action={submiting}>
    <input name="input" />
<Button className='wbutton' type="submit">bouton test</Button></form>
        </p>
        <p className="taskbar">
        <Button onPress={() => {alert('1');}}> 
        <img src={require('./img/W95_logo.png')} alt="win"/>
        Start
        </Button>
        </p>
        <p></p>
      </header>
    </div>
  );
}

export default App;
