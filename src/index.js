import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ToggleData from './pages/ToggleData';
import ArrayFetch from './Array/ArrayFetch';
import ObjectFetch from './Array/ObjectFetch';
import NavBar2 from './component/common/NavBar2';
import Chat from './Hook/Chat';
import AutoCount from './Hook/AutoCount';
import { FetchApi } from './Hook/FetchApi';
import FetchApiData from './Array/FetchApiData';
  import FetchApiPic from './Hook/fetchApiPic';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ToggleData/> */}
    {/* <ArrayFetch/> */}
    {/* <ObjectFetch/> */}
    {/* <NavBar2/> */}
    {/* <Chat/> */}
    {/* <AutoCount/> */}
    {/* <FetchApi/> */}
    {/* <FetchApiData/> */}
   <FetchApiPic/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
