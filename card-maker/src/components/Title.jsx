import React from 'react';
import styled from 'styled-components';
import '../index.css';

function Title() {
	return <TitleText>광천교회 메시지 카드</TitleText>;
}

export default Title;

const TitleText = styled.div`
	width: 100%;
	height: 7vh;
	line-height: 7vh;
	font-size: 30px;
	font-weight: 700;
	text-align: center;
	background-color: var(--background-color);
	color: var(--headline-color);
`;
