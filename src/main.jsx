import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const about = 'Desenvolvido com ❤️ por Alan Tanaka';
const link = 'https://github.com/alant2031';
const style = 'color: blue; font-weight: 900; text-decoration: none';
console.log(`%c${about}`, style);
console.log(`%c${link}`, style);

ReactDOM.createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
		,
	</StrictMode>,
);

/*
  Credits: Ed Roh
  github.com/ed-roh
*/
