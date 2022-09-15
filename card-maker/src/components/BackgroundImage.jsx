import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { images } from '../data/image';
import '../index.css';

function BackgroundImage({ handleImage }) {
	const [selectedImage, setSelectedImage] = useState(0);

	const getImage = (e) => {
		setSelectedImage(Number(e.target.name));
	};

	useEffect(() => {
		handleImage(selectedImage);
	}, [handleImage, selectedImage]);

	return (
		<ImageWrap>
			{images.map((item) => {
				return (
					<MenuImg
						key={item[1]}
						src={item[0]}
						name={item[1]}
						onClick={getImage}
					/>
				);
			})}
		</ImageWrap>
	);
}

export default BackgroundImage;

const ImageWrap = styled.div`
	width: 100%;
	background-color: var(--secondary-color);
	text-align: center;
	margin: 0px;
	display: block;
	overflow-x: scroll;
`;

const MenuImg = styled.img`
	width: 6vh;
	height: 6vh;
	padding: 2px 4px;
	border-radius: 8px;

	&:hover {
		transition: all ease 0.1s;
		transform: scale(1.05);
	}
`;
