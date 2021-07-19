import React, { useEffect, useState } from 'react'

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
                    <span onClick={activateEditMode}>{props.status || '---------'}</span>
                }

            </div>
            <div>
                {editMode &&
                    <input autoFocus={true} onBlur={deactivateEditMode}
                        onChange={onStatusChange} value={status} />
                }
            </div>
        </div>
    )
}



export default ProfileStatusFunc;