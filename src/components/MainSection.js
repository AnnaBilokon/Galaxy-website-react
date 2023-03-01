import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';

function MainSection() {
  return (
	<div className='main-container'>
	  <video src='/public/video/galaxy-video-1.mp4' autoPlay loop muted />
	  <p>That's one small step for a man, one giant leap for mankind. </p>
	<div className='main-btns'>
		<Button className='btns' buttonStyle='btn--outline'
		buttonSize='btn--large'>GET STARTED</Button>
	<Button className='btns' buttonStyle='btn--primery'
		buttonSize='btn--large'>WATCH TRAILER <i className='far=fa-play-circle'/> </Button>
	</div>
	  	</div>
  )
}

export default MainSection
