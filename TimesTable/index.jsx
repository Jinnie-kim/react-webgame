const React = require('react');
const ReactDomClient = require('react-dom/client');
const GuGudan = require('./GuGudan');

const container = document.querySelector('#root');
const root = ReactDomClient.createRoot(container);

root.render(<GuGudan />);
