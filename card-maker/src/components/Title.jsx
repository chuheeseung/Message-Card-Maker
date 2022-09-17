import React from 'react';
import styled from 'styled-components';
import '../index.css';

function Title() {
	return <TitleText>광천교회 목장축제 전도카드</TitleText>;
}

export default Title;

const TitleText = styled.div`
	width: 100%;
	height: 7vh;
	line-height: 7vh;
	font-size: 2.6em;
	font-weight: 800;
	font-family: 'Nanum Gothic', sans-serif;
	text-align: center;
	background-color: var(--background-color);
	color: var(--headline-color);

	@media (min-width: var(--laptop-width)) {
		width: 800px;
		margin: 0 auto;
	}
`;
