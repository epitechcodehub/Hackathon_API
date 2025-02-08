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

function CreateAccount() {

    const submiting = (formData) => {
        const name = formData.get("name");
        const lastname = formData.get("lastname");
        const email = formData.get("email");
        const age = formData.get("age");
        if (name == '') {
            alert("missing name")
            return
        }
        if (lastname == '') {
            alert("missing lastname")
            return
        }
        if (email == '') {
            alert("missing email")
            return
        }
        if (age == '') {
            alert("missing age")
            return
        }
        alert(`you inputed '${name}' and '${lastname}' and '${email}' and '${age}'`);
    }

return (
    <div className="CreateAccount" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <header className="CreateAccount-header">
            <p className="window">
                <p className='head-window'>
                    window
                    <Button className='wbutton' type="button" style={{ position: "sticky", left: "100%", fontSize: "10px", padding: "2px 4px" }}>X</Button>
                </p>
                <GlitchSquiggly>
                    <h1>Create an account</h1>
                </GlitchSquiggly>
                <h4>texte placeholder ici pour expliquer le but ou les inputs peut etre</h4>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <form action={submiting} id="input1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <label style={{ marginBottom: '5px' }}>name : </label>
                    <input type="text" name="name" style={{ marginBottom: '10px' }} />
                    <label style={{ marginBottom: '5px' }}>lastname: </label>
                    <input type="text" name="lastname" style={{ marginBottom: '10px' }} />
                    <label style={{ marginBottom: '5px' }}>email: </label>
                    <input type="email" name="email" style={{ marginBottom: '10px' }} />
                    <label style={{ marginBottom: '5px' }}>Age</label>
                    <input type="number" name="age" style={{ marginBottom: '10px' }} />
                    <Button type="submit" style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>Submit</Button>
                </form>
                </div>
            </p>
        </header>
    </div>
);
}

export default CreateAccount;