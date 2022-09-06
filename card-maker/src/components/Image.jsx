import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { images } from '../data/image';
import { bibles } from '../data/bible';

function Image({ data }) {
	const [message, setMessage] = useState('');
	const [imageIndex, setImageIndex] = useState(0);
	const [bible, setBible] = useState('');

	const handleMessge = (e) => {
		setMessage(e.target.value);
	};

	useEffect(() => {
		setImageIndex(data[0]);
		setBible(data[1]);
	}, [data]);

	return (
		<>
			<ImageWrap>
				<ImageSelected src={images[imageIndex]} alt="background" />
				<Message>{message}</Message>
				<Bible>{bible}</Bible>
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
			<SubmitButton>이미지 저장하기</SubmitButton>;
		</>
	);
}

export default Image;

const ImageWrap = styled.div`
	border: 1px solid red;
`;

const ImageSelected = styled.img`
	width: 50%;
	height: 50%;
	overflow: hidden;
`;

const Message = styled.div``;

const Bible = styled.div``;

const WriteMessage = styled.div`
	border: 1px solid red;
`;

const SubmitButton = styled.button`
	border: 1px solid red;
`;
