import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { bibles } from '../data/bible';
import { Button, ButtonWrap } from './Menu';
import '../index.css';

function BibleCategories({ handleBible }) {
	const [category, setCategory] = useState('');
	const [selectedBible, setSelectedBible] = useState('');

	const showBibleButtons = () => {
		return (
			<TextWrap>
				{bibles[category].map((item) => {
					return (
						<MinText key={item.index} value={item.max} onClick={getBible}>
							{item.min}
						</MinText>
					);
				})}
			</TextWrap>
		);
	};

	const getBible = (e) => {
		setSelectedBible(e.target.attributes[0].textContent);
	};

	useEffect(() => {
		handleBible(selectedBible);
	}, [handleBible, selectedBible]);

	return (
		<>
			<ButtonWrap>
				<Button value="pleasure" onClick={() => setCategory('pleasure')}>
					기쁨
				</Button>
				<Button value="grace" onClick={() => setCategory('grace')}>
					은혜
				</Button>
				<Button value="recovery" onClick={() => setCategory('recovery')}>
					회복
				</Button>
				<Button value="impression" onClick={() => setCategory('impression')}>
					감동
				</Button>
			</ButtonWrap>
			<BibleWrap>
				{category === 'pleasure' && showBibleButtons()}
				{category === 'grace' && showBibleButtons()}
				{category === 'recovery' && showBibleButtons()}
				{category === 'impression' && showBibleButtons()}
			</BibleWrap>
		</>
	);
}

export default BibleCategories;

const TextWrap = styled.div`
	display: flex;
	padding: 0 2%;
`;

const MinText = styled.p`
	white-space: pre;
	background-color: var(--background-color);
	border: 1px solid red;
	margin: 0 2%;
	font-family: 'Nanum Gothic', sans-serif;
`;

const BibleWrap = styled.div`
	width: 100%;
	overflow-x: scroll;
	background-color: var(--secondary-color);
`;
