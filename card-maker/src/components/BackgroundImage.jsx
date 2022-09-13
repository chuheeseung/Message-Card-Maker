import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { images } from '../data/image';

function BackgroundImage({ handleImage }) {
	const [selectedImage, setSelectedImage] = useState(0);

	const getImage = (e) => {
		setSelectedImage(Number(e.target.name));
	};

	useEffect(() => {
		handleImage(selectedImage);
	}, [handleImage, selectedImage]);

	return (
		<div>
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
		</div>
	);
}

export default BackgroundImage;

const MenuImg = styled.img`
	width: 40px;
	height: 40px;
`;
