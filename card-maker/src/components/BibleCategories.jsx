import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { bibles } from '../data/bible';
import { Button, ButtonWrap, DataWrap } from './Menu';

function BibleCategories({ handleBible }) {
	const [category, setCategory] = useState('');
	const [selectedBible, setSelectedBible] = useState('');

	const showPleasure = () => {
		return (
			<TextWrap>
				{bibles['기쁨'].map((item) => {
					return (
						<MinText key={item.index} value={item.max} onClick={getBible}>
							{item.min}
						</MinText>
					);
				})}
			</TextWrap>
		);
	};

	const showGrace = () => {
		return (
			<TextWrap>
				{bibles['은혜'].map((item) => {
					return (
						<MinText key={item.index} value={item.max} onClick={getBible}>
							{item.min}
						</MinText>
					);
				})}
			</TextWrap>
		);
	};

	const showRecovery = () => {
		return (
			<TextWrap>
				{bibles['회복'].map((item) => {
					return (
						<MinText key={item.index} value={item.max} onClick={getBible}>
							{item.min}
						</MinText>
					);
				})}
			</TextWrap>
		);
	};

	const showImpression = () => {
		return (
			<TextWrap>
				{bibles['감동'].map((item) => {
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
			<DataWrap>
				{category === 'pleasure' && showPleasure()}
				{category === 'grace' && showGrace()}
				{category === 'recovery' && showRecovery()}
				{category === 'impression' && showImpression()}
			</DataWrap>
		</>
	);
}

export default BibleCategories;

const TextWrap = styled.div`
	display: flex;
`;

const MinText = styled.p`
	white-space: pre;
`;
