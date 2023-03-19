import React from 'react';
import ReactDomClient from 'react-dom/client';
import ReactionCheck from './ReactionCheck';

const container = document.querySelector('#root');
const root = ReactDomClient.createRoot(container);

root.render(<ReactionCheck />);
