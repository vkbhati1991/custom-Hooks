import { CreateField } from "../../Utilities/index";

const LoginFormFields = {

    LOGIN_USERNAME: CreateField({
        controlKey: "LOGIN_USERNAME",
        label: "Email id",
        className: "form-control",
        placeholder: "Email-id",
        value: "",
        validations: {
            required: { message: "Email-id is Required" },
            pattern: {regex:/^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid Email-Id" }
        }
    }),
    LOGIN_PASSWORD: CreateField({
        controlKey: "LOGIN_PASSWORD",
        label: "password",
        value: "",
        className: "form-control",
        placeholder: "Password",
        validations: {
            required: { message: "Password is Required" }
        }
    })
}


export { LoginFormFields }