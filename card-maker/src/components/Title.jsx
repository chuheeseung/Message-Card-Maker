import React from 'react';
import styled from 'styled-components';

function Title() {
	return <TitleText>광천교회 메시지 카드</TitleText>;
}

export default Title;

const TitleText = styled.div`
	width: 100%;
	height: 7vh;
	padding-top: 10px;
	font-size: 30px;
	font-weight: 700;
	text-align: center;
	background-color: #c7c1db;
`;
