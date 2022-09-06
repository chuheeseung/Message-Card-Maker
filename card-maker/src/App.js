import React, { useState } from 'react';
import Image from './components/Image';
import Menu from './components/Menu';
import Title from './components/Title';

function App() {
	const [data, setData] = useState([]);

	const getData = (response) => {
		// console.log(response);
		setData(response);
	};

	return (
		<div className="App">
			<Title />
			<Menu getData={getData} />
			<Image data={data} />
		</div>
	);
}

export default App;
