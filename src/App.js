import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home.js';
import SignUp from './components/pages/SignUp';
import Articles from './components/pages/Articles.js';
import News from './components/pages/News';

function App() {
  return (
	<>
	<Router>
	<Navbar/>
	<Routes>
		<Route path='/' exact element={<Home/>} />
		<Route path='/articles'  element={<Articles/>} />
		<Route path='/news'  element={<News/>} />
		<Route path='/sign-up' element={<SignUp/>} />
	</Routes>
	</Router>

	</>
  );
}

export default App;
