import React from 'react';
import Title from '../components/Title';
import Image from '../components/Image';
import Menu from '../components/Menu';
import styled from 'styled-components';
import '../index.css';

function MainScreen() {
	return (
		<ContentWrap>
			<Title />
			<Menu />
			<Image />
		</ContentWrap>
	);
}

export default MainScreen;

const ContentWrap = styled.div`
	width: 100%;
	height: 100%;

	@media (min-width: var(--laptop-width)) {
		background-color: #f2f2f2;
	}
`;
