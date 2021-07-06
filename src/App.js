import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Messenger from './components/Messenger/Messenger.jsx';
import MessengerContainer from './components/Messenger/MessengerContainer.jsx';
import NewsData from './components/News/NewsData';
let App = (props) => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <div className='container'>
                    <Sidebar />
                    <Route path='/Profile' component={Profile} />

                    <Route path='/News' render={() => <NewsData store={props.store} />} />

                    <Route path='/Messages' render={() => <MessengerContainer store={props.store} />} />
                </div>
            </BrowserRouter>
        </div >
    );
}


export default App;
