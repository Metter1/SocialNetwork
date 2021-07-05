import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Messenger from './components/Messenger/Messenger.jsx';
import News from './components/News/News.jsx';
let App = (props) => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <div className='container'>
                    <Sidebar />
                    <Route path='/Profile' component={Profile} />

                    <Route path='/News' render={() => <News
                        NewsPages={props.state.NewsPage}
                        dispatch={props.dispatch}
                    />} />

                    <Route path='/Messages' render={() => <Messenger
                        MessengerPage={props.state.MessengerPage}
                        dispatch={props.dispatch} 
                    />} />
                </div>
            </BrowserRouter>
        </div >
    );
}


export default App;
