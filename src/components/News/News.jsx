import React from 'react'
import s from './news.module.css'
import Post from './post/Post.jsx'

let postsData = [
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
]
let postEl = postsData.map(p => {
    return <Post message={p.message} likes={p.likes}/>
})


export default function News() {
    
    return (
        <div className={s.block}>
            <div className={s.news}>
                {postEl}
            </div>
            <div className={s.rightside}>
                gfgfgf
            </div>
        </div>
    )
}
