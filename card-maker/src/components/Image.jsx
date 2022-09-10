import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { images } from '../data/image';
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
			<ImageWrap ref={imgResult} backgroundImage={images[imageIndex]}>
				{/* <ImageSelected src={images[imageIndex]} alt="background" /> */}
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
			<ButtonWrap>
				<SubmitButton onClick={handleDownload}>이미지 저장하기</SubmitButton>
			</ButtonWrap>
		</>
	);
}

export default Image;

const ImageWrap = styled.div`
	width: 100%;
	height: 50vh;
	background-image: url(${(props) => props.backgroundImage});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

// const ImageSelected = styled.img`
// 	width: 100%;
// 	overflow: hidden;
// `;

const Message = styled.div``;

const Bible = styled.div``;

const WriteMessage = styled.div``;

const ButtonWrap = styled.div``;

const SubmitButton = styled.button`
	width: 100%;
	height: 15vh;
	border: none;
	position: fixed;
	bottom: 0;
	border-top-left-radius: 30px;
	border-top-right-radius: 30px;
	background-color: #4440b3;
	font-size: 26px;
	color: white;

	&:hover {
		transition: all ease 0.1s;
		transform: scale(1.05);
	}
`;
