import React from 'react'
import * as axios from 'axios';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from './../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { profileAPI } from './../../api/api';
class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID){
            userID = 18180;
        }
        profileAPI.getProfile(userID).then(data => {
            this.props.setUserProfile(data);
        })
    }


    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div >
        )
    }

}
let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

let URLContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(URLContainer)