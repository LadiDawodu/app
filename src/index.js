import React from 'react';
import { createRoot } from 'react-dom/client'


import App from './App';

import './App.css';



// We are saying that the entire file App will redner inside the the public folder/index.html file/ div of 'root'.
createRoot(document.getElementById('root')).render(<App />)