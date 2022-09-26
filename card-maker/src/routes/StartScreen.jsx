import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CarouselCard from '../components/StartScreen/CarouselCard';
import Title from '../components/Title';

function StartScreen() {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/main');
	};
	return (
		<>
			<Title />
			<CarouselCard />
			<StartButton onClick={handleClick}>디지털 전도카드 시작하기</StartButton>
		</>
	);
}

export default StartScreen;

const StartButton = styled.button``;
