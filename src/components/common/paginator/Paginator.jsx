import React, { useState } from 'react'
import s from './Paginator.module.css'
import cn from 'classnames'
import nextArrow from '../../../assets/images/next-arrow.svg'
import leftArrow from '../../../assets/images/left-arrow.svg'


export default function Paginator({ totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPotrionPageNumber = portionNumber * portionSize

    return (
        <div className={s.paginator}>
            {portionNumber > 1 ? <img src={leftArrow} alt='arrow' className={s.pagination_btn} onClick={() => {
                setPortionNumber(portionNumber - 1);
                onPageChanged((portionNumber - 1) * portionSize)
            }}/> : <img src={leftArrow} alt='arrow' className={s.pagination_btnHidden}/>}
            {
                pages.filter(p => (p >= leftPortionPageNumber && p <= rightPotrionPageNumber))
                    .map(p => {
                        return <span className={cn({ [s.pageActive]: currentPage === p }, s.page)}
                            key={p} onClick={(e) => { onPageChanged(p) }}>
                            {p}
                        </span>
                    })
            }
            {portionCount > portionNumber ? <img src={nextArrow} alt='arrow' className={s.pagination_btn} onClick={() => {
                setPortionNumber(portionNumber + 1);
                onPageChanged((portionNumber) * portionSize + 1)
            }}/> : <img src={nextArrow} alt='arrow' className={s.pagination_btnHidden}/>}
        </div>
    )
}
