import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { images } from '../data/image';
import { bibles } from '../data/bible';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

function Image({ data }) {
	const [message, setMessage] = useState('');
	const [imageIndex, setImageIndex] = useState(0);
	const [bible, setBible] = useState('');

	const imgResult = useRef();

	const handleMessge = (e) => {
		setMessage(e.target.value);
	};

	const handleDownload = () => {
		const image = imgResult.current;
		const filter = (image) => {
			return image.tagName !== 'BUTTON';
		};

		domtoimage.toBlob(image, { filter: filter }).then((blob) => {
			saveAs(blob, 'card.png');
		});
	};

	useEffect(() => {
		setImageIndex(data[0]);
		setBible(data[1]);
	}, [data]);

	return (
		<>
			<ImageWrap ref={imgResult}>
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
			<SubmitButton onClick={handleDownload}>이미지 저장하기</SubmitButton>;
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
