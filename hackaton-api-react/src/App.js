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
  const input1 = formData.get("input1");
  const input2 = formData.get("input2");
  if (input1 == '') {
    alert("missing input 1")
    return
  }
  if (input2 == '') {
    alert("missing input 2")
    return
  }
  alert(`you inputed '${input1} and ${input2}'`);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="window">
          <p className='head-window'>
              Test
          </p>
          <form action={submiting} id="input1">
          <label>Input 1: </label>
          <input name="input1" placeholder='input something here...' />
          <label> <br />Input 2:</label>
          <input name="input2" placeholder='input something else here...' />
          <br />
          <Button className='wbutton' type="submit">Send</Button></form>
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
