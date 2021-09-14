import React from 'react';
import './App.css';
import { Route, withRouter, Switch } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar.jsx';
import NewsData from './components/News/NewsData';
import MessengerContainer from './components/Messenger/MessengerContainer.jsx';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/Login/Login';
import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import { initializeApp } from './redux/app-reducer';


class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized ) {
            return <Preloader />
        }
        return (
            <div>
                <HeaderContainer />
                <div className='container'>
                    <Sidebar />
                    <Switch>
                    <Route  path='/Profile/:userID?' render={() => <ProfileContainer />} />

                    <Route path='/News' render={() => <NewsData />} />

                    <Route path='/Messages' render={() => <MessengerContainer />} />

                    <Route path='/Users' render={() => <UsersContainer />} />

                    <Route path='/Login' render={() => <Login />} />

                    <Route exact path='/' render={()=> <ProfileContainer />} />

                    <Route path='*' render={()=> <div>404</div> }/>

                    </Switch>
                </div>
            </div >
        );
    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    isAuth: state.auth.isAuth
})

export default compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);


