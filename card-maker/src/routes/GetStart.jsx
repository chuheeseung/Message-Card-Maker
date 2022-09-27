import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function GetStart() {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/main');
	};
	return (
		<StartButtonWrap>
			<StartButton onClick={handleClick}>디지털 전도카드 시작하기</StartButton>
		</StartButtonWrap>
	);
}

export default GetStart;

const StartButtonWrap = styled.div`
	text-align: center;
`;

const StartButton = styled.button`
	width: fit-content;
	height: 20%;
	/* line-height: 20%; */
	margin: 3% 2%;
	padding: 2% 10%;
	border: none;
	border-radius: 30px;
	background-color: #bae8e8;
	font-size: 1.8em;
	font-family: 'Nanum Gothic', sans-serif;
	font-weight: 600;
	color: #272343;

	&:hover {
		transition: all ease 0.1s;
		transform: scale(1.05);
	}
`;
