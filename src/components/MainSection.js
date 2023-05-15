import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';
import video from '../video/moon-video.mp4';

function MainSection() {
  return (
	<div className='main-container'>
	  <video src={video} autoPlay loop />
	  
	  <img src='../../public/images/galaxy-1.jpg' alt=''></img>
	  <p>That's one small step for a man, one giant leap for mankind. </p>
	<div className='main-btns'>
		<Button className='btns' buttonStyle='btn--outline'
		buttonSize='btn--large'>GET STARTED</Button>
	<Button className='btns' buttonStyle='btn--primery'
		buttonSize='btn--large'> <i className='far=fa-play-circle'/> WATCH TRAILER </Button>
	</div>
	  	</div>
  )
}

export default MainSection;
