import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { images } from '../data/image';
import { bibles } from '../data/bible';

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
				<MenuImg src={images[0]} name="0" onClick={getImage} />
				<MenuImg src={images[1]} name="1" onClick={getImage} />
				<MenuImg src={images[2]} name="2" onClick={getImage} />
				<MenuImg src={images[3]} name="3" onClick={getImage} />
				<MenuImg src={images[4]} name="4" onClick={getImage} />
				<MenuImg src={images[5]} name="5" onClick={getImage} />
				<MenuImg src={images[6]} name="6" onClick={getImage} />
				<MenuImg src={images[7]} name="7" onClick={getImage} />
			</div>
		);
	};

	const getImage = (e) => {
		setImageData(Number(e.target.name));
	};

	const showBibles = () => {
		return (
			<TextWrap>
				<MinText
					value={bibles[0]['max']}
					name={bibles[0]['index']}
					onClick={getBible}
				>
					{bibles[0]['min']}
				</MinText>
				<MinText
					value={bibles[1]['max']}
					name={bibles[1]['index']}
					onClick={getBible}
				>
					{bibles[1]['min']}
				</MinText>
				<MinText
					value={bibles[2]['max']}
					name={bibles[2]['index']}
					onClick={getBible}
				>
					{bibles[2]['min']}
				</MinText>
				<MinText
					value={bibles[3]['max']}
					name={bibles[3]['index']}
					onClick={getBible}
				>
					{bibles[3]['min']}
				</MinText>
				<MinText
					value={bibles[4]['max']}
					name={bibles[4]['index']}
					onClick={getBible}
				>
					{bibles[4]['min']}
				</MinText>
				<MinText
					value={bibles[5]['max']}
					name={bibles[5]['index']}
					onClick={getBible}
				>
					{bibles[5]['min']}
				</MinText>
			</TextWrap>
		);
	};

	const getBible = (e) => {
		// console.log(e.target.attributes[0].textContent);
		setBibleData(e.target.attributes[0].textContent);
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
				{menu === 'backGround' && showBackGround()}
				{menu === 'bible' && showBibles()}
			</DataWrap>
		</>
	);
}

export default Menu;

const ButtonWrap = styled.div`
	background-color: #f0eefa;
	justify-content: space-between;
`;

const Button = styled.button`
	width: 80px;
	height: 30px;
	margin: 10px 20px;
	background-color: #b4aee8;
	border: none;
	border-radius: 50px;
`;

const DataWrap = styled.div``;

const MenuImg = styled.img`
	width: 40px;
	height: 40px;
`;

const TextWrap = styled.div`
	display: flex;
`;

const MinText = styled.p`
	white-space: pre;
`;
