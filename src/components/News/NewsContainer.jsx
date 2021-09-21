import { connect } from 'react-redux';
import { compose } from 'redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/news-reducer';
import News from './NewsComp/News';
import { withAuthRedirect } from './../hoc/withAuthRedirect';

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

