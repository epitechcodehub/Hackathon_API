import './App.css';
import styled from "styled-components";
import React from 'react';
import GlitchSquiggly from 'react-glitch-effect/core/GlitchSquiggly';
import Annouce from './Announce';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
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
  border-style: solid;
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

function Home() {

    const [Annoucees, setAnnoucees] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8801/API/getAnnouncements')
            .then(response => {
                setAnnoucees(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
    };

    return (
        <div className="App">
            <header className="App-header">
                <div className="window" style={{ display: "inline-block", minHeight: "300px", padding: "20px", maxWidth: "80%" }}>
                    <div className='head-window' style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        Test
                        <Button className='wbutton' type="button" style={{ fontSize: "10px", padding: "2px 4px" }}
                        onClick={() => {
                            window.location.href = "/"
                        }}>X</Button>
                    </div>
                    <GlitchSquiggly>
                        <h1>WELCOME</h1>
                    </GlitchSquiggly>

                    {/* Carousel for Announcements */}
                    <div style={{ width: "100%", marginTop: "20px" }}>
                        <Slider {...settings} >
                            {Annoucees.map((annouce, index) => (
                                <Annouce key={index} title={annouce.title} content={annouce.description} taken={annouce.taken} id={annouce._id} />
                            ))}
                        </Slider>
                    </div>
                    
                </div>
                <Button className='wbutton' type="button" style={{padding: "2px 4px" }}
                onClick={() => window.location.href = '/createAnnounce'}>
                create an announce
                </Button>
            </header>
            
        </div>
    );
}

export default Home;
