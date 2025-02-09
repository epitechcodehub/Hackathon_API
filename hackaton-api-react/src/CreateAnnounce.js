import styled from "styled-components";
import React from 'react';
import reactDom from 'react-dom';
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import axios from "axios";

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

function CreateAnnounce() {

    const submiting = (formData) => {
        const title = formData.get("name");
        const content = formData.get("lastname");
        if (title == '') {
            alert("missing title")
            return
        }
        if (content == '') {
            alert("missing content")
            return
        }
        const response = axios.post('http://localhost:8801/API/addAnnouncements', { title: title, description: content, taken: false })
        .then(response => {
            console.log(response.data);
            window.location.href = '/Announce';
        })
        .catch(error => {
            alert(error);
        });
    }

return (
    <div className="App">
        <header className="App-header">
            <p className="window">
                <p className='head-window'>
                    window
                    <Button className='wbutton' type="button" style={{ position: "sticky", left: "100%", fontSize: "10px", padding: "2px 4px" }}
                    onClick={() => {window.location.href = "/Announce"}}>X</Button>
                </p>
                <GlitchSquiggly>
                    <h1>Create an announce</h1>
                </GlitchSquiggly>
                <h4>texte placeholder ici pour expliquer le but ou les inputs peut etre</h4>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <form action={submiting} id="input1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <label style={{ marginBottom: '5px' }}>Title : </label>
                    <input type="text" name="name" style={{ marginBottom: '10px' }} />
                    <label style={{ marginBottom: '5px' }}>discription: </label>
                    <input type="text" name="lastname" style={{ marginBottom: '10px' }} />
                    <Button type="submit" style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>Submit</Button>
                </form>
                </div>
            </p>
        </header>
    </div>
);
}

export default CreateAnnounce;