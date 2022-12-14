import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import '../../index.css';
import { images } from '../../data/image';
import html2canvas from 'html2canvas';
import logo from '../../assets/logo.png';
import { useRecoilState } from 'recoil';
import { BibleData, ImageData } from '../../states/ImageState';

function Image() {
	const [imageIndex, setImageIndex] = useRecoilState(ImageData);
	const [bible, setBible] = useRecoilState(BibleData);

	const [message, setMessage] = useState('');

	const maxLength = 50;

	const imgResult = useRef();

	const handleMessage = (e) => {
		setMessage(e.target.value);
	};

	const handleDownload = () => {
		const capture = document.querySelector('#imgResult');
		html2canvas(capture).then((canvas) => {
			saveAs(canvas.toDataURL('image/jpg'), 'card');
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

	return (
		<ImageContainer>
			<ImageWrap id="imgResult" ref={imgResult}>
				<ImageContent src={images[imageIndex][0]} />
				<LogoImage src={logo} />
				<Message>{message}</Message>
				<Bible>{bible}</Bible>
			</ImageWrap>
			<MessageWrap>
				<textarea
					placeholder="메시지를  입력하세요."
					id="message"
					maxLength={maxLength}
					rows="8"
					value={message}
					onChange={handleMessage}
				/>
			</MessageWrap>
			<ButtonWrap>
				<SubmitButton onClick={handleDownload}>이미지 저장하기</SubmitButton>
			</ButtonWrap>
		</ImageContainer>
	);
}

export default Image;

const ImageContainer = styled.div`
	width: 100%;
	height: 100%;
	overflow-y: scroll;
	font-family: 'Nanum Gothic', sans-serif;

	@media (min-width: 1024px) {
		width: 800px;
		margin: 0px auto;
		text-align: center;
	}
`;

const ImageWrap = styled.div`
	width: 100%;
	overflow: hidden;
	position: relative;
	align-items: center;

	&:after {
		display: block;
		content: '';
		padding-bottom: 100%;
	}

	@media (min-width: 1024px) {
		width: 100%;
		padding: 0px;
	}
`;

const ImageContent = styled.img`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	object-fit: cover;
	opacity: 0.6;
`;

const LogoImage = styled.img`
	width: 20%;
	position: absolute;
	top: 2%;
	right: 5%;
`;

const Message = styled.div`
	width: 90%;
	height: 70%;
	position: absolute;
	left: 2%;
	top: 7%;
	overflow-y: hidden;
	white-space: pre-wrap;
	font-family: 'Gowun Dodum', sans-serif;
	font-size: 3em;
	font-weight: 800;
	color: var(--image-text-color);

	@media (min-width: 1024px) {
		text-align: left;
		font-size: 6em;
	}
`;

const Bible = styled.div`
	width: 96%;
	position: absolute;
	right: 2%;
	bottom: 1%;
	text-align: right;
	white-space: pre-wrap;
	font-family: 'Nanum Gothic', sans-serif;
	font-size: 1.3em;
	color: var(--image-text-color);

	@media (min-width: 1024px) {
	}
`;

const MessageWrap = styled.div`
	width: 100%;
	margin: 10px auto;
	text-align: center;
	border: 1px solid var(--paragraph-color);

	textarea {
		width: 90%;
		padding: 10px;
		box-sizing: content-box;
		resize: none;
		border-radius: 5px;
	}
`;

const ButtonWrap = styled.div`
	width: 100%;
	height: 80%;
	text-align: center;
`;

const SubmitButton = styled.button`
	width: fit-content;
	height: 7%;
	line-height: 7%;
	margin: 3% 2%;
	padding: 2% 10%;
	border: none;
	border-radius: 30px;
	background-color: #bae8e8;
	font-size: 1.6em;
	font-family: 'Nanum Gothic', sans-serif;
	font-weight: 600;
	color: #272343;

	&:hover {
		transition: all ease 0.1s;
		transform: scale(1.05);
	}
`;
