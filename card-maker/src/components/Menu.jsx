import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BibleCategories from './BibleCategories';
import BackgroundImage from './BackgroundImage';
import '../index.css';

function Menu({ getData }) {
	const [menu, setMenu] = useState('');
	const [imageData, setImageData] = useState(0);
	const [bibleData, setBibleData] = useState('');

	const setBackGround = () => {
		setMenu('backGround');
	};

	const setBible = () => {
		setMenu('bible');
	};

	const handleBible = (e) => {
		setBibleData(e);
	};

	const handleImage = (e) => {
		setImageData(e);
	};

	useEffect(() => {
		getData([imageData, bibleData]);
	}, [imageData, bibleData]);

	return (
		<>
			<ButtonWrap>
				<Button value="backGround" onClick={setBackGround}>
					배경
				</Button>
				<Button value="bible" onClick={setBible}>
					성경구절
				</Button>
			</ButtonWrap>
			<DataWrap>
				{menu === 'backGround' && <BackgroundImage handleImage={handleImage} />}
				{menu === 'bible' && <BibleCategories handleBible={handleBible} />}
			</DataWrap>
		</>
	);
}

export default Menu;

export const ButtonWrap = styled.div`
	width: 100%;
	height: 20%;
	background-color: #e3f6f5;
	text-align: center;
	display: inline-block;
`;

export const Button = styled.button`
	width: 70px;
	height: 30px;
	margin: 2% 2%;
	background-color: #ffd803;
	border: none;
	border-radius: 50px;
	font-family: 'Nanum Gothic', sans-serif;

	&:hover {
		transition: all ease 0.1s;
		transform: scale(1.05);
	}
`;

const DataWrap = styled.div`
	width: 100%;
	display: block;
`;
