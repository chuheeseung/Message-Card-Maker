import React, { useState } from 'react';
import styled from 'styled-components';
import image0 from '../assets/bh.jpeg';
import image1 from '../assets/suho.jpeg';

function Menu() {
	const [selected, setSelected] = useState('');

	const setBackGround = () => {
		setSelected('backGround');
	};

	const setBible = () => {
		setSelected('bible');
	};

	const setFont = () => {
		setSelected('font');
	};

	const showBackGround = () => {
		return (
			<div>
				<MenuImg src={image0} alt="" />
				<MenuImg src={image1} alt="" />
			</div>
		);
	};

	return (
		<>
			<ButtonWrap>
				<Button value="backGround" onClick={setBackGround}>
					배경
				</Button>
				<Button value="bible" onClick={setBible}>
					성경구절
				</Button>
				<Button value="font" onClick={setFont}>
					폰트
				</Button>
			</ButtonWrap>
			<DataWrap>
				{selected === 'backGround' && showBackGround()}
				{selected === 'bible' && <div>성경 구절</div>}
				{selected === 'font' && <div>폰트</div>}
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
