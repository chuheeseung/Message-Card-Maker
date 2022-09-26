import React from 'react';
import 'antd/dist/antd.min.css';
import { Carousel } from 'antd';
import card1 from '../../assets/cardNews/card1.jpeg';
import card2 from '../../assets/cardNews/card2.jpeg';
import card3 from '../../assets/cardNews/card3.jpeg';
import card4 from '../../assets/cardNews/card4.jpeg';
import card5 from '../../assets/cardNews/card5.jpeg';
import card6 from '../../assets/cardNews/card6.jpeg';
import styled from 'styled-components';

function CarouselCard() {
	const onChange = (currentSlide) => {
		console.log(currentSlide);
	};

	return (
		<Carousel afterChange={onChange}>
			<div>
				<CardImage src={card1} alt="card1" />
			</div>
			<div>
				<CardImage src={card2} alt="card2" />
			</div>
			<div>
				<CardImage src={card3} alt="card3" />
			</div>
			<div>
				<CardImage src={card4} alt="card4" />
			</div>
			<div>
				<CardImage src={card5} alt="card5" />
			</div>
			<div>
				<CardImage src={card6} alt="card6" />
			</div>
		</Carousel>
	);
}

export default CarouselCard;

const CardImage = styled.img`
	width: 100%;
	height: 80%;
`;
