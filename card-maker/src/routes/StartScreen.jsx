import React from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../components/Title';

function StartScreen() {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/main');
	};
	return (
		<>
			<Title />

			<button onClick={handleClick}></button>
		</>
	);
}

export default StartScreen;
