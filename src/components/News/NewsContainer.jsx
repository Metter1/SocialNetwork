import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/news-reducer';
import News from './NewsComp/News';
import { withAuthRedirect } from './../hoc/withAuthRedirect';

// export default function NewsContainer(props) {


//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();

//                     let addPost = () => {
//                         store.dispatch(addPostActionCreator())
//                     }

//                     let onPostChange = (text) => {
//                         let action = updateNewPostTextActionCreator(text)
//                         store.dispatch(action);
//                     }

//                     return <News
//                         updateNewPostText={onPostChange}
//                         addPost={addPost}
//                         posts={state.NewsPage.posts}
//                         newPostText={state.NewsPage.newPostText} />
//                 }
//             }

//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        posts: state.NewsPage.posts,
        newPostText: state.NewsPage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(News)

