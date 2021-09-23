import React from 'react';
import './App.css';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
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
import NewsContainer from './components/News/NewsContainer';
import SidebarContainer from './components/sidebar/SidebarContainer';


class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        if (this.props.isAuthProfile) {
            return (
                <div>

                    <HeaderContainer />

                    <div className='container'>
                        <SidebarContainer />
                        <Switch>
                            <Route path='/profile/:userID?' render={() => <ProfileContainer />} />

                            <Route path='/news' render={() => <NewsContainer />} />

                            <Route path='/messages' render={() => <MessengerContainer />} />

                            <Route path='/users' render={() => <UsersContainer />} />

                            <Route path='/login' render={() => <Login />} />

                            <Route exact path='/' render={() => <Redirect to="/profile" />} />

                            <Route path='*' render={() => <div>404</div>} />

                        </Switch>
                    </div>
                </div >
            );
        }else{
            return <Login />
        }
    }
}


const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    isAuth: state.auth.isAuth,
    isAuthProfile: state.AuthProfile.isAuthProfile
})

export default compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);


