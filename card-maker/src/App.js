import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './index.css';
import StartScreen from './routes/StartScreen';
import MainScreen from './routes/MainScreen';
import NotFound from './routes/NotFound';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<StartScreen />} />
				<Route path="/main" element={<MainScreen />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
