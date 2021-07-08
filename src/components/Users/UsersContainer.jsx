import React from 'react'
import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC } from './../../redux/users-reducer';
import usersC from './UsersClass';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) =>{
            dispatch(followAC(userID))
        },
        unfollow: (userID) =>{
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) =>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setUsersTotalCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(usersC);


export default UsersContainer;