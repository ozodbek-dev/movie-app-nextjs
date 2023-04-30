import React from 'react';
import {TextFieldProps} from "@/components/text-field/props";
import {FieldHookConfig, useField} from "formik";

const TextField = ({...props}:TextFieldProps & FieldHookConfig<string>) => {
    const [field,meta,helpers] = useField(props)
    return (
        <label>
            <input {...props} className={"input"}/>
        </label>
    );
};

export default TextField;
 