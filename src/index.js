import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

import './index.css';



// We are saying that the entire file App will redner inside the the public folder/index.html file/ div of 'root'.

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);