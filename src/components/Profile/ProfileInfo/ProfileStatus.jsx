import React from 'react'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () =>{
        this.setState({
            editMode: true,
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    render() {
        return (
            <div>
                <div >

                    {!this.state.editMode &&
                        <h3 onClick={this.activateEditMode }>{this.state.status || '---------'}</h3>
                    }

                </div>
                <div>
                    {this.state.editMode &&
                        <input autoFocus={true} onBlur={this.deactivateEditMode} 
                         onChange={this.onStatusChange} value={this.state.status} />
                    }
                </div>
            </div>
        )
    }

}

export default ProfileStatus;