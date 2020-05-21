import React from "react";
import Profile from "../Profile";
import {connect} from "react-redux";
import {getStatus, setUserProfile, updateStatus} from "../../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.loggedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.setUserProfile(userId);
        this.props.getStatus(userId);

    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    loggedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {setUserProfile, getStatus, updateStatus}),
    withRouter
    //withAuthRedirect
)(ProfileContainer);

/*
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);*/
