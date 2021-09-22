import React from 'react'
import { connect } from 'react-redux';
import Sidebar from './Sidebar';
const SidebarContainer = (props) => {
    return <Sidebar userID={props.userID}/>
}

const mapStateToProps = (state) => ({
    userID: state.auth.userID,
})

export default connect(mapStateToProps, {})(SidebarContainer);
