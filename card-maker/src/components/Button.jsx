import React from 'react';
import styled from 'styled-components';

function Button() {
	return <SubmitButton>이미지 저장하기</SubmitButton>;
}

export default Button;

const SubmitButton = styled.button`
	border: 1px solid red;
`;
