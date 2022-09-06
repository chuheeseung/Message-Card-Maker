import React from 'react';
import Button from './components/Button';
import Image from './components/Image';
import Menu from './components/Menu';
import Message from './components/Message';
import Title from './components/Title';

function App() {
	return (
		<div className="App">
			<Title />
			<Menu />
			<Image />
			<Message />
			<Button />
		</div>
	);
}

export default App;
