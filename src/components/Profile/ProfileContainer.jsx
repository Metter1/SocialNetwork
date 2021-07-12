import React from 'react'
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from './../../redux/profile-reducer';
import {  withRouter } from 'react-router-dom';
import { withAuthRedirect } from './../hoc/withAuthRedirect';
class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID){
            userID = 18180;
        }
        this.props.getUserProfile(userID);
    }


    render() {
        
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div >
        )
    }

}
let AuthRedirect = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

let URLContainer = withRouter(AuthRedirect)

export default connect(mapStateToProps, {getUserProfile})(URLContainer)