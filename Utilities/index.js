
 export const CreateField = (props) => {
    return {
        controlKey: props.controlKey,
        ControlType: 1,
        label: props.label,
        value: props.value || "",
        className: props.className || "form-control",
        required: props.required || false,
        placeholder: props.placeholder,
        validations: props.validations || {},
        isReadOnly: props.isReadOnly || false,
        hasError: false,
        validateMessage: ""

    }
}
