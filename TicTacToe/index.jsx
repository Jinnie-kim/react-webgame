import React from 'react';
import ReactDomClient from 'react-dom/client';
import Tictactoe from './Tictactoe';

const container = document.querySelector('#root');
const root = ReactDomClient.createRoot(container);

root.render(<Tictactoe />);
