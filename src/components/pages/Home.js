import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import '../MainSection.css';
import MainSection from '../MainSection.js';


function Home () {
	return (
		<>
		<MainSection/>
		<Cards/>
		<Footer/>
		</>
	)
}

export default Home;