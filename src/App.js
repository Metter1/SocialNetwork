import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Messanger from './components/Messanger/Messanger.jsx';
import News from  './components/News/News.jsx';
let App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <div className='container'>
                <Sidebar />
                <Route path='/Profile' component={Profile} />
                <Route path='/News' component={News}/>
                <Route path='/Messages' component={Messanger}/>
                </div>
            </BrowserRouter>
        </div >
    );
}

export default App;
