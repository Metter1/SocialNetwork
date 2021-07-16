import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar.jsx';
import NewsData from './components/News/NewsData';
import MessengerContainer from './components/Messenger/MessengerContainer.jsx';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/Login/Login';
import { Component } from 'react';


class App extends Component {

    componentDidMount(){
        
    }

    render() {
        return (
            <div>
                <HeaderContainer />
                <div className='container'>
                    <Sidebar />
                    <Route path='/Profile/:userID?' render={() => <ProfileContainer />} />

                    <Route path='/News' render={() => <NewsData />} />

                    <Route path='/Messages' render={() => <MessengerContainer />} />

                    <Route path='/Users' render={() => <UsersContainer />} />

                    <Route path='/Login' render={() => <Login />} />

                </div>
            </div >
        );
    }
}


export default App;
