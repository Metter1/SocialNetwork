import React, { useEffect, useState } from 'react'
import s from '../profile.module.css'

const ProfileStatusFunc = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])
    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    let activateEditMode = () => {
        setEditMode(true)
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            <div >

                {!editMode &&
                    <p className={s.status} onClick={activateEditMode}>{props.status || 'Установить статус'}</p>
                }

            </div>
            <div>
                {editMode &&
                    <input className={s.status_active} autoFocus={true} onBlur={deactivateEditMode}
                        onChange={onStatusChange} value={status} />
                }
            </div>
        </div>
    )
}



export default ProfileStatusFunc;