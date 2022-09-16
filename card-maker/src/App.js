import React, { useEffect, useState } from 'react';
import Image from './components/Image';
import Menu from './components/Menu';
import Title from './components/Title';
import styled from 'styled-components';

function App() {
	const [data, setData] = useState([0, '']);

	const getData = (response) => {
		setData(response);
	};

	useEffect(() => {
		setData([0, '']);
	}, []);

	return (
		<div className="App">
			<ContentWrap>
				<Title />
				<Menu getData={getData} />
				<Image data={data} />
			</ContentWrap>
		</div>
	);
}

export default App;

const ContentWrap = styled.div`
	width: 100%;
	height: 100%;

	@media (min-width: 1024px) {
		background-color: #f2f2f2;
	}
`;
