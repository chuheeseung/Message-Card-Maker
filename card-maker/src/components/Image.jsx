import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { images } from '../data/image';
import html2canvas from 'html2canvas';

function Image({ data }) {
	const [message, setMessage] = useState('');
	const [imageIndex, setImageIndex] = useState(0);
	const [bible, setBible] = useState('');

	const imgResult = useRef();

	const handleMessge = (e) => {
		setMessage(e.target.value);
	};

	const handleDownload = () => {
		const capture = document.querySelector('#imgResult');
		html2canvas(capture).then((canvas) => {
			saveAs(canvas.toDataURL('image/jpg'), 'card.jpg');
		});
	};

	const saveAs = (uri, filename) => {
		let link = document.createElement('a');

		if (typeof link.download === 'string') {
			link.href = uri;
			link.download = filename;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		} else {
			window.open(uri);
		}
	};

	useEffect(() => {
		console.log(data);
		setImageIndex(data[0]);
		setBible(data[1]);
	}, [data]);

	return (
		<ImageContainer>
			<ImageWrap id="imgResult" ref={imgResult}>
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
	overflow-y: scroll;
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
