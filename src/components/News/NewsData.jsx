import React from 'react'
import NewsContainer from './NewsContainer';


export default function NewsData(props) {
    return (
        <div>
            <NewsContainer store={props.store} />
        </div>
    )
}

