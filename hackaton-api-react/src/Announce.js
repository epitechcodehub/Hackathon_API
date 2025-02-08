import './App.css';
import styled from "styled-components";
import React from 'react';
import axios from 'axios';
import reactDom from 'react-dom';
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import { useEffect, useState } from 'react';

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

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [Taken, setTaken] = useState(false);
  const [is_taken, setIs_taken] = useState(false);
  const [deleted, setDeleted] = useState(0);

  const onAccept = () => {
    axios.put(`http://localhost:8801/API/modifAnnouncements/${props.id}`, { taken: true } )
        .then(response => {
            console.log(response.data);
            setIs_taken(true);
        })
        .catch(error => {
            console.log(error);}
        )
}

const onCancel = () => {
    axios.put(`http://localhost:8801/API/modifAnnouncements/${props.id}`, {taken: false})
        .then(response => {
            console.log(response.data);
            setIs_taken(false);
        })
        .catch(error => {
            console.log(error);
        })
      }

const on_delete = () => {
    axios.delete(`http://localhost:8801/API/delAnnouncements/${props.id}`)
        .then(response => {
            console.log(response.data);
            window.location.href = '/';
        })
        .catch(error => {
            console.log(error);
        })
}

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`http://localhost:8801/API/getAnnouncements/${props.id}`)
          .then(response => {
              setTitle(response.data.title);
              setContent(response.data.description);
              setTaken(response.data.taken);
          })
          .catch(error => {
              console.log(error);
          });
    };
    fetchData();
  }, [is_taken, deleted]);


  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
         <p className="head-window" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>{props.title}</span>
          <Button className="wbutton" type="button" style={{ fontSize: "10px", padding: "2px 4px" }}
          onClick={on_delete}>X</Button>
        </p>
            <p>
                {props.content}
            </p>

        {!Taken && <Button onClick={onAccept}>
            Accept
        </Button>}

        {Taken && <Button onClick={onCancel}>
            cancel
        </Button>}
    </div>
  );
}

export default Annouce;
