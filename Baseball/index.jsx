const React = require('react');
const ReactDomClient = require('react-dom/client');
const Baseball = require('./baseball');

const container = document.querySelector('#root');
const root = ReactDomClient.createRoot(container);

root.render(<Baseball />);
