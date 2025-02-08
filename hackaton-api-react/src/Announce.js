import './App.css';
import styled from "styled-components";
import React from 'react';
import reactDom from 'react-dom';
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';

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
    box-shadow: 2px 0px 0px black;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;


function Annouce(props) {

    const onAccept = () => {
        console.log('Accepted');
    }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <p className='head-window'>
              {props.title}
          </p>
            <p>
                {props.content}
            </p>

        <Button onClick={onAccept}>
            Accept
        </Button>
    </div>
  );
}

export default Annouce;
