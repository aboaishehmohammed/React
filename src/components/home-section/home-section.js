import react from 'react';
import {Button} from "../button/button";
import './home-section.css';
import '../../App.css'
import video from './video-2.mp4';

import React from "react";

function HomeSection() {

    return (
        <div className='home-container'>
            <video src={video} autoPlay loop
                   muted >
                <source src={video} type="video/mp4"/>

            </video>            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className='home-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn-outline'
                    buttonSize='btn-large'
                >
                    GET STARTED
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn-primary'
                    buttonSize='btn-large'
                >
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>    )
}

export default HomeSection;
