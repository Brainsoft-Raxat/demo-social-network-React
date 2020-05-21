import React from 'react';
import './App.css';
import Nav from "./components/navbar/nav";
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/profile/myposts/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/WithSuspense";

//import Settings from "./components/Settings/Settings";
const Settings = React.lazy(() => import('./components/Settings/Settings'));
//import News from './components/News/News';
const News = React.lazy(() => import('./components/News/News'));
//import Music from "./components/Music/Music";
const Music = React.lazy(() => import('./components/Music/Music'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav nav={this.props.store.getState().nav}/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/news' render={ withSuspense(News)}/>
                    <Route path='/music' render={withSuspense(Music)}/>
                    <Route path='/settings' render={withSuspense(Settings)}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);

const SocialNetwork = (props) => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <AppContainer store={store}/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default SocialNetwork;