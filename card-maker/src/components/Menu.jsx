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

	// const setFont = () => {
	// 	setSelected('font');
	// };

	const showBackGround = () => {
		return (
			<div>
				<MenuImg src={images[0]} name="0" onClick={getImage} />
				<MenuImg src={images[1]} name="1" onClick={getImage} />
			</div>
		);
	};

	const getImage = (e) => {
		setImageData(e.target.name);
	};

	const showBibles = () => {
		return (
			<div>
				<p value={bibles[0]} onClick={getBible}>
					{bibles[0]}
				</p>
				<p value={bibles[1]} onClick={getBible}>
					{bibles[1]}
				</p>
			</div>
		);
	};

	const getBible = (e) => {
		setBibleData(e.target.textContent);
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
				{/* <Button value="font" onClick={setFont}>
					폰트
				</Button> */}
			</ButtonWrap>
			<DataWrap>
				{menu === 'backGround' && showBackGround()}
				{menu === 'bible' && showBibles()}
				{/* {selected === 'font' && <div>폰트</div>} */}
			</DataWrap>
		</>
	);
}

export default Menu;

const ButtonWrap = styled.div`
	border: 1px solid red;
`;

const Button = styled.button``;

const DataWrap = styled.div`
	border: 1px solid red;
`;

const MenuImg = styled.img`
	width: 40px;
	height: 40px;
`;
