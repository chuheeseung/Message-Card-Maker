import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import '../index.css';
import { images } from '../data/image';
import html2canvas from 'html2canvas';

function Image({ data }) {
	const [message, setMessage] = useState('');
	const [imageIndex, setImageIndex] = useState(0);
	const [bible, setBible] = useState('');
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
	height: 100%;
	overflow-y: scroll;
`;

const ImageWrap = styled.div`
	width: 100%;
	overflow: hidden;
	position: relative;

	&:after {
		display: block;
		content: '';
		padding-bottom: 100%;
	}
`;

const ImageContent = styled.img`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	object-fit: cover;
`;

const Message = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	white-space: pre-wrap;
`;

const Bible = styled.div`
	position: absolute;
	left: 0;
	top: 80%;
`;

const MessageWrap = styled.div`
	width: 100%;
	margin: 10px auto;
	text-align: center;

	textarea {
		width: 90%;
		padding: 10px;
		box-sizing: content-box;
		resize: none;
		border: 1px solid var(--msg-color);
		border-radius: 5px;
	}
`;

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
