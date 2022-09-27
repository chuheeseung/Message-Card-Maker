import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { SubmitButton } from '../components/MainScreen/Image';
import Carousel from '../components/StartScreen/Carousel';
import Title from '../components/Title';

function StartScreen() {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/main');
	};
	return (
		<>
			<Title />
			<Carousel />
			<SubmitButton onClick={handleClick}>
				디지털 전도카드 시작하기
			</SubmitButton>
		</>
	);
}

export default StartScreen;
