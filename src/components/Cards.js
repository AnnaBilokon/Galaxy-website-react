import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
	<div className='cards'>
	  <h1>
		Check these news
		<div className='cards__container'>
			<div className='cards__wrapper'>
				<ul className='cards__items'>
					<CardItem
					src='images/moon-1.jpg'
					text='Why can we sometimes see the moon in the daytime?'
					label = 'article'
					path='/services'
					/>
					<CardItem
					src='images/moon-2.jpg'
					text='Will Earth ever lose its moon?'
					label = 'article'
					path='/services'
					/>
					<CardItem
					src='images/moon-3.jpg'
					text='Who owns the moon?'
					label = 'article'
					path='/services'
					/>
				
				</ul>
				{/* <ul className='cards__items'>
				<CardItem
					src='images/moon-3.jpg'
					text='Who owns the moon?'
					label = 'article'
					path='/services'
					/>
					<CardItem
					src='images/moon-4.jpg'
					text='Why does the moon turn red during a total lunar eclipse?'
					label = 'article'
					path='/services'
					/>
					<CardItem
					src='images/moon-5.jpg'
					text='Facts about the Moon'
					label = 'article'
					path='/services'
					/>
					
				</ul> */}
			</div>

		</div>
	  </h1>
	</div>
  )
}

export default Cards;
