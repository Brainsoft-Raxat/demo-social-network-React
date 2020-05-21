import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, CreateField, Input} from "../common/FormsControls/FormControls";
import {required} from "../../utils/validators/validator";
import {login} from "../../redux/authReducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import s from "./../common/FormsControls/FormControl.module.css"


const LoginForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
                {createField('email','Email', 'email', [required], Input, null)}
                {/*<Field name={"email"} validate={required} placeholder={"Email"} component={Input}/>*/}

                {createField('password','Password', 'password', [required], Input, null)}
                {/*<Field name={"password"} validate={required} placeholder={"Password"} type="password" component={Input}/>*/}
                {createField('checkbox', null, 'rememberMe', null, Input, 'Remember me')}
               {/* <Field name={"rememberMe"} type={"checkbox"} component={Input}/> Remember me*/}


            {props.error && <div className={s.formError}>{props.error}</div>}

            <div>
                <button>Login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Redirect to={"/profile"} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);