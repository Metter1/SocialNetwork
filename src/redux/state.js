import reRender from '../render.js'

let state = {
    NewsPage: {
        posts: [
            {
                id: 1,
                message: 'Great',
                likes: 10
            },
            {
                id: 2,
                message: 'Lorem, ipsum.',
                likes: 15
            },
            {
                id: 3,
                message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rerum modi quae, laborum adipisci a eligendi dignissimos repudiandae natus tenetur tempora quibusdam. Veniam animi doloremque ullam aliquid recusandae sint, voluptatem placeat, dolorum nemo delectus, aperiam quia. Rem quos, est numquam autem exercitationem laudantium id, sed iure facere quaerat ab! Sapiente.',
                likes: 5
            }
        ],
        newPostText: 'sfdsd'
    },
    MessengerPage: {
        users: [
            {
                id: 1,
                name: 'Eugene'
            },
            {
                id: 2,
                name: 'Dima'
            },
            {
                id: 3,
                name: 'Sasha'
            },
            {
                id: 4,
                name: 'Vasya'
            }
        ],
        messages: [
            {
                id: 1,
                message: '21321'
            },
            {
                id: 2,
                message: 'fsdfs123'
            },
            {
                id: 3,
                message: 'gsgs'
            },
            {
                id: 4,
                message: 'vcxvx'
            }
        ]
    }
}

window.state = state;
export let addPost = () => {
    let newPost = {
        id: 4,
        message: state.NewsPage.newPostText,
        likes: 0,
    }
    state.NewsPage.posts.push(newPost);
    reRender(state);
    state.NewsPage.newPostText = ''
}


export let updateNewPostText = (newText) => {
    state.NewsPage.newPostText = newText;
    reRender(state);
}
export default state;