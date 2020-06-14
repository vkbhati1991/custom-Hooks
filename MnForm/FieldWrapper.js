import React from "react";
import { TextBox } from "./FormControls/TextBox";

function getFieldLabel(props) {
    const { label, showLabel } = props;
    if (showLabel) {
        return <div className="field-label">{label}</div>
    }
}

function getInputField(props) {

    switch (props.types) {
        case "text":
        case "password":
            return <TextBox {...props} />
        default:
            return <TextBox {...props} />
    }
}

function FieldWrapper(props) {
    return (
        <div className="field mb-16">
            {getFieldLabel(props)}
            <div className="field-value">
                {getInputField(props)}
            </div>
        </div>
    );
}

export { FieldWrapper };