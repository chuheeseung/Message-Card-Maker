import React, { useState } from 'react';
import styled from 'styled-components';
import BibleCategories from './BibleCategories';
import BackgroundImage from './BackgroundImage';
import '../index.css';

function Menu() {
	const [menu, setMenu] = useState('');

	const setBackGround = () => {
		setMenu('backGround');
	};

	const setBible = () => {
		setMenu('bible');
	};

	return (
		<MenuContainer>
			<ButtonWrap>
				<Button value="backGround" onClick={setBackGround}>
					배경
				</Button>
				<Button value="bible" onClick={setBible}>
					성경구절
				</Button>
			</ButtonWrap>
			<DataWrap>
				{menu === 'backGround' && <BackgroundImage />}
				{menu === 'bible' && <BibleCategories />}
			</DataWrap>
		</MenuContainer>
	);
}

export default Menu;

const MenuContainer = styled.div`
	width: 100%;

	@media (min-width: 1024px) {
		width: 800px;
		margin: 0 auto;
	}
`;

export const ButtonWrap = styled.div`
	width: 100%;
	height: 20%;
	background-color: #e3f6f5;
	text-align: center;
	display: inline-block;

	@media (min-width: 1024px) {
		width: 100%;
	}
`;

export const Button = styled.button`
	width: 70px;
	height: 30px;
	margin: 2% 2%;
	background-color: #ffd803;
	border: none;
	border-radius: 50px;
	font-family: 'Nanum Gothic', sans-serif;
	font-size: 1.2em;
	color: #272343;

	&:hover {
		transition: all ease 0.1s;
		transform: scale(1.05);
	}
`;

const DataWrap = styled.div`
	width: 100%;
	display: block;
`;
