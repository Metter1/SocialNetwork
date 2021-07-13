import React from 'react'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }
    render() {
        return (
            <div>
                <div>
                    {!this.state.editMode &&
                        <h3 onClick={this.activateEditMode.bind(this) }>{this.props.status}</h3>
                    }

                </div>
                <div>
                    {this.state.editMode &&
                        <input autoFocus onBlur={this.deactivateEditMode.bind(this)} type="text" value={this.props.status} />
                    }
                </div>
            </div>
        )
    }

}

export default ProfileStatus;