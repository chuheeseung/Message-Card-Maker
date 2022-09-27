import React from 'react';
import Carousel from '../components/StartScreen/Carousel';
import Title from '../components/Title';
import GetStart from './GetStart';

function StartScreen() {
	return (
		<>
			<Title />
			<Carousel />
			<GetStart />
		</>
	);
}

export default StartScreen;
