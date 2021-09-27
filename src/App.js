import React, { Suspense } from 'react';
import './App.css';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import HeaderContainer from './components/header/HeaderContainer';
import SidebarContainer from './components/sidebar/SidebarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import NewsContainer from './components/News/NewsContainer';
// import MessengerContainer from './components/Messenger/MessengerContainer.jsx';
// import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import Preloader from './components/common/Preloader/Preloader';
import UnknownURL from './components/UnknownURL/UnknownURL';

const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const MessengerContainer = React.lazy(() => import('./components/Messenger/MessengerContainer'));

class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        if (!this.props.isAuth) {
            return <Login />
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

                            <Route path='/messages' render={() => {
                                return <Suspense fallback={<Preloader />}>
                                    <MessengerContainer />
                                </Suspense>
                            }} />

                            <Route path='/users' render={() => {
                                return <Suspense fallback={<Preloader />}>
                                    <UsersContainer />
                                </Suspense>
                            }} />
                            <Route exact path='/' render={() => <Redirect to="/profile" />} />

                            <Route path='*' render={() => <UnknownURL />} />

                        </Switch>
                    </div>
                </div >
            );
        } else {
            return <Preloader />
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