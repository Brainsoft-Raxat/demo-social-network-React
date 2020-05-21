import React from "react";
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }
    deactivateEditMode = () => {
        this.setState({
           editMode: false
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusOnChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
        this.setState({
           status: this.props.status
        });
        }
    }


    render() {
        return (<>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "Enter your Status"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusOnChange} autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.state.status}/>
                    </div>
                }
            </>
        );
    }
}

export default ProfileStatus