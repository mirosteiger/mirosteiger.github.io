import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Flowbite } from 'flowbite-react';

ReactDOM.createRoot(document.getElementById('root')).render(
	<Flowbite>
		<App id="top" />
	</Flowbite>,
);
