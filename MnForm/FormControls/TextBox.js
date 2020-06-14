import React, { Fragment } from 'react';

function TextBox(props) {

    const {
        setValue,
        controlKey,
        name,
        type,
        autoComplete,
        className,
        placeholder,
        isMandotary,
        hasError,
        validateMessage
    } = props;

    const classValue = hasError ? `form-control--error ${className}` : className

    const handleOnChnage = (event) => {
        setValue && setValue(controlKey, event.target.value);
    }

    return (
        <Fragment>
            <div className="input-group">
                <input
                    type={type}
                    name={name}
                    className={classValue}
                    placeholder={placeholder}
                    defaultValue={props.value}
                    autoComplete={autoComplete}
                    onChange={(e) => handleOnChnage(e)}

                />
                {isMandotary && <span className="form-control--star">*</span>}
            </div>
            {hasError && <div className="form-control--help red pt-8">{validateMessage}</div>}
        </Fragment>
    );
}


export { TextBox };