import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './index.css';



// We are saying that the entire file App will redner inside the the public folder/index.html file/ div of 'root'.
ReactDOM.render(<App />, document.getElementById('root'));