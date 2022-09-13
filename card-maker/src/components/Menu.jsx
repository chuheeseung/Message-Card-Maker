import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { images } from '../data/image';
import { bibles } from '../data/bible';
import BibleCategoreis from './BibleCategoreis';

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

	const showBackGround = () => {
		return (
			<div>
				{images.map((item) => {
					return (
						<MenuImg
							key={item[1]}
							src={item[0]}
							name={item[1]}
							onClick={getImage}
						/>
					);
				})}
			</div>
		);
	};

	const getImage = (e) => {
		setImageData(Number(e.target.name));
	};

	const showBibles = () => {
		return <div>bibles</div>;
	};

	// const getBible = (e) => {
	// 	setBibleData(e.target.attributes[0].textContent);
	// };

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
				{menu === 'backGround' && showBackGround()}
				{menu === 'bible' && <BibleCategoreis />}
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
	width: 80px;
	height: 30px;
	margin: 10px 20px;
	background-color: #b4aee8;
	border: none;
	border-radius: 50px;
`;

export const DataWrap = styled.div``;

const MenuImg = styled.img`
	width: 40px;
	height: 40px;
`;
