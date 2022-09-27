import React from 'react';
import styled from 'styled-components';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import card1 from '../../assets/cardNews/card1.jpeg';
import card2 from '../../assets/cardNews/card2.jpeg';
import card3 from '../../assets/cardNews/card3.jpeg';
import card4 from '../../assets/cardNews/card4.jpeg';
import card5 from '../../assets/cardNews/card5.jpeg';
import card6 from '../../assets/cardNews/card6.jpeg';

function Carousel() {
	const responsive = {
		0: {
			items: 1,
		},
		1024: {
			items: 4,
		},
	};

	const images = [card1, card2, card3, card4, card5, card6];

	const items = images.map((image) => {
		return (
			<ItemsContain>
				<ItemsWrap>
					<img src={image} alt="" />
				</ItemsWrap>
			</ItemsContain>
		);
	});

	return (
		<CarouselSection>
			<InfoTextWrap>
				<InfoText>디지털 가이드 사용법 숙지하고 시작하세요!</InfoText>
			</InfoTextWrap>
			<CarouselConatiner>
				<AliceCarousel
					mouseTracking
					infinite={1000}
					animationDuration={1000}
					disableDotsControls
					responsive={responsive}
					items={items}
					paddingRight={40}
				/>
			</CarouselConatiner>
		</CarouselSection>
	);
}

export default Carousel;

const CarouselSection = styled.div`
	margin-top: 30%;
`;

const InfoTextWrap = styled.div`
	text-align: center;
`;

const InfoText = styled.div`
	margin: 2% auto;
	font-family: 'Nanum Gothic', sans-serif;
	font-size: 1.5em;
`;

const CarouselConatiner = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	margin: 0 auto;
`;

const ItemsContain = styled.div`
	width: 100%;
	height: 100%;
`;

const ItemsWrap = styled.div`
	width: 100%;
	border-radius: 20px;
	overflow: hidden;
	margin: 0 5%;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
