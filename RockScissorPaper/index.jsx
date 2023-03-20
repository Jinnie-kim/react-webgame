import React from 'react';
import ReactDomClient from 'react-dom/client';
import RockScissorPaper from './RockScissorPaper';

const container = document.querySelector('#root');
const root = ReactDomClient.createRoot(container);

root.render(<RockScissorPaper />);
