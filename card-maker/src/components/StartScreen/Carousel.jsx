import React from 'react';
import styled from 'styled-components';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';

function Carousel() {
	const onChange = (currentSlide) => {
		console.log(currentSlide);
	};

	return (
		<>
			<InfoText>디지털 가이드 사용법 숙지하고 시작하세요!</InfoText>
		</>
	);
}

export default Carousel;

const InfoText = styled.div``;
