// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
//
// ReactDOM.render(<App />, document.getElementById('root'));

import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './Routes';

const container = document.getElementById('root');

if (container) {
  ReactDOM.render(<Routes/>, container);
}
registerServiceWorker();
