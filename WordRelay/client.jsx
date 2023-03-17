const React = require('react');
const ReactDomClient = require('react-dom/client'); // React 18버전으로 변경

const WordRelay = require('./wordRelayFunc');
const container = document.querySelector('#root');
const root = ReactDomClient.createRoot(container);

root.render(<WordRelay />);
// ReactDom.render(<WordRelay />, document.querySelector('#root')); // React 17버전
