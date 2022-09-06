import React, { useState } from 'react';
import styled from 'styled-components';

function Image() {
	const [message, setMessage] = useState('');

	const handleMessge = (e) => {
		console.log(e.target.value);
		setMessage(e.target.value);
	};

	return (
		<>
			<ImageWrap>
				<ImageSelected />
				<Message>{message}</Message>
				<Bible>성경 구절</Bible>
			</ImageWrap>
			<WriteMessage>
				<div>메시지를 입력하세요.</div>
				<input
					type="text"
					id="message"
					maxLength="200"
					onChange={handleMessge}
				/>
			</WriteMessage>
		</>
	);
}

export default Image;

const ImageWrap = styled.div`
	border: 1px solid red;
`;

const ImageSelected = styled.img``;

const Message = styled.div``;

const Bible = styled.div``;

const WriteMessage = styled.div`
	border: 1px solid red;
`;
