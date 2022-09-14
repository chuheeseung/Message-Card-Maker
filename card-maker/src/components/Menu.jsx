import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BibleCategories from './BibleCategories';
import BackgroundImage from './BackgroundImage';

function Menu({ getData }) {
	const [menu, setMenu] = useState('');
	const [imageData, setImageData] = useState('');
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
	background-color: #f0eefa;
	justify-content: space-between;
`;

export const Button = styled.button`
	width: 70px;
	height: 30px;
	margin: 10px 20px;
	background-color: #b4aee8;
	border: none;
	border-radius: 50px;
`;

export const DataWrap = styled.div``;
