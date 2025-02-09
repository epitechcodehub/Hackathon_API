import React, { useState } from "react";
import Draggable from "react-draggable";
import styled, { keyframes } from "styled-components";

import './App.css';
// Styled Desktop Container
const Taskbar = styled.div`
  width: 100%;
  height: 50px;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  padding: 0 10px;
  position: absolute;
  bottom: 0;
`;

// Hover Effect on Icons
const Icon = styled.div`
  width: 80px;
  height: 80px;
  text-align: center;
  font-size: 14px;
  color: white;
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    color: #00d7ff;
  }

  img {
    width: 50px;
    height: 50px;
    margin-bottom: 5px;
    transition: transform 0.2s ease-in-out;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const IconContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px; /* Space between icons */
`;

// ✨ Error Animation Keyframes
const flashError = keyframes`
  0%, 100% { background-color: rgba(255, 0, 0, 0); }
  50% { background-color: rgba(255, 0, 0, 0.3); }
`;

// Styled Error Overlay
const ErrorOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ${flashError} 0.5s ease-in-out;
  pointer-events: none;
`;

const Desktop = () => {
  const [icons] = useState([
    { id: 1, name: "Announce", img: "https://cdn-icons-png.flaticon.com/512/3097/3097035.png" },
    { id: 2, name: "Recycle Bin", img: "https://cdn-icons-png.flaticon.com/512/1828/1828970.png" },
    { id: 3, name: "Browser", img: "https://cdn-icons-png.flaticon.com/512/732/732212.png" }
  ]);
  const [error, setError] = useState(false);
  let errorsound = new Audio('https://www.myinstants.com/media/sounds/windows-xp-error.mp3');

  const handleIconClick = (name) => {
    if (name === "Browser") {
      errorsound.play();
      setError(true);
      setTimeout(() => setError(false), 500); // Remove error effect after 0.5s
      alert("This feature is not available.");
    } else {
      window.location.href = "/" + name;
    }
  };

  return (
    <div className="App">
        <header className="App-header">
        
        {error && <ErrorOverlay />}
      <IconContainer>
        {icons.map((icon) => (
          <Icon key={icon.id} onClick={() => handleIconClick(icon.name)}>
            <img src={icon.img} alt={icon.name} />
            <p>{icon.name}</p>
          </Icon>
        ))}
        </IconContainer>
        <p className="taskbar">
        </p>
        </header>
    </div>
  );
};

export default Desktop;
