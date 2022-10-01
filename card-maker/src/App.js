import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './index.css';
import StartScreen from './routes/StartScreen';
import MainScreen from './routes/MainScreen';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<StartScreen />} />
				<Route path="/main" element={<MainScreen />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
