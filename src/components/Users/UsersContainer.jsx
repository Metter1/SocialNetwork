import React from 'react'
import { connect } from 'react-redux';
import { followSuccess, unfollowSuccess, toggleIsFollowingProgress, getUsers, getPageNum, follow, unfollow } from './../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader.jsx';
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsersS } from '../../redux/users-selectors';

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        
    }
    onPageChanged = (pageNumber) => {
        this.props.getPageNum(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}

            <Users onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                followingInProgress={this.props.followingInProgress}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
    }
}



let mapStateToProps = (state) => {
    return {
        users: getUsersS(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, { followSuccess, unfollowSuccess, follow, unfollow, toggleIsFollowingProgress, getUsers, getPageNum }),
)(UsersAPIComponent)

