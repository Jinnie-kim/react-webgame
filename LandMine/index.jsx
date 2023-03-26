import React from 'react';
import ReactDomClient from 'react-dom/client';
import LandMine from './LandMine';

const container = document.querySelector('#root');
const root = ReactDomClient.createRoot(container);

root.render(<LandMine />);
