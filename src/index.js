import React from 'react';
import ReactDOM from 'react-dom';
import './nomadcoder-react-movie-app/src/index.css';
import App from './nomadcoder-react-movie-app/src/App';
import registerServiceWorker from './nomadcoder-react-movie-app/src/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
