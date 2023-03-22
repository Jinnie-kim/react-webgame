import React from 'react';
import ReactDomClient from 'react-dom/client';
import Lotto from './lotto';

const container = document.querySelector('#root');
const root = ReactDomClient.createRoot(container);

root.render(<Lotto />);
