import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { images } from '../data/image';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { toPng } from 'html-to-image';

function Image({ data }) {
	const [message, setMessage] = useState('');
	const [imageIndex, setImageIndex] = useState(0);
	const [bible, setBible] = useState('');

	const imgResult = useRef();

	const handleMessge = (e) => {
		setMessage(e.target.value);
	};

	// html-to-image
	const handleDownload = () => {
		const imageRef = imgResult.current;

		toPng(imageRef).then((image) => {
			const link = window.document.createElement('a');
			link.style = 'display: none;';
			link.download = 'card.png';
			link.href = image;
			link.click();
		});
	};

	// const handleDownload = () => { // dom-to-image
	// 	const image = imgResult.current;

	// 	const filter = (image) => {
	// 		return image.tagName !== 'BUTTON';
	// 	};

	// 	domtoimage.toBlob(image, { filter: filter }).then((blob) => {
	// 		saveAs(blob, 'card.png');
	// 	});
	// };

	useEffect(() => {
		console.log(data);
		setImageIndex(data[0]);
		setBible(data[1]);
	}, [data]);

	return (
		<ImageContainer>
			<ImageWrap ref={imgResult}>
				<ImageContent src={images[imageIndex][0]} />
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
		</ImageContainer>
	);
}

export default Image;

const ImageContainer = styled.div`
	height: 100%;
`;

const ImageWrap = styled.div`
	width: 100%;
	height: 50vh;
	/* background-image: url(${(props) => props.backgroundImage});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover; */
	overflow: hidden;
	position: relative;
`;

const ImageContent = styled.img`
	width: 100%;
	height: 100%;
	position: relative;
`;

const Message = styled.div`
	position: absolute;
	left: 0;
	top: 0;
`;

const Bible = styled.div`
	position: absolute;
	left: 0;
	top: 80%;
`;

const WriteMessage = styled.div``;

const ButtonWrap = styled.div``;

const SubmitButton = styled.button`
	width: 100%;
	height: 10vh;
	border: none;
	/* position: fixed;
	bottom: 0; */
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
