import React from "react";
import s from "./FormControl.module.css"
import {required} from "../../../utils/validators/validator";
import {Field} from "redux-form";

const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}>
        <textarea {...input} {...restProps} />
    </FormControl>
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}>
        <input {...input} {...restProps} />
    </FormControl>
}

export const createField = (type, placeholder, name, validators, component, text) => (
    <div>
        <Field type={type} name={name} validate={validators} placeholder={placeholder} component={component}/>{text}
    </div>
)
