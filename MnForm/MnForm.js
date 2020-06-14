import React, { useState, useEffect } from 'react';
import { MnLayout } from '../MnLayout';
import { getPostData, validate } from "./FormUtility/index";


function MnForm(props) {

    const { handleOnSubmit, actions, layout } = props;
    const [fields, setFields] = useState(props.fields);
    const [postData, setPostData] = useState(null);

    useEffect(() => {

        const postdata = getPostData(props, fields);
        setPostData(postdata);

    }, [props, fields]);


    function postOnSubmitData() {

        const isValid = validate(fields, setFields);

        if (isValid) {
            handleOnSubmit && handleOnSubmit(postData);
        }
        return null;
    }

    function setValue(controkKey, fieldValue) {

        const { ...fieldsCopy } = fields;

        const field = fieldsCopy[controkKey];
        field["value"] = fieldValue;

        const pdata = getPostData(props, fields);

        setFields(fieldsCopy);
        setPostData(pdata);

    }

    function getMnLayout() {
        return (
            <div>
                <MnLayout
                    fields={fields}
                    setValue={setValue}
                    layout={layout}
                />
            </div>
        );

    }

    function getActionButtons() {
        return actions.map((action, idx) => {
            if (action.type === "submit") {
                return (
                    <button method="post" key={idx} onClick={postOnSubmitData} className={`${action.className} pointer`} >
                        {action.text}
                    </button>
                );
            } else if (action.type === "link") {
                if (action.href) {
                    return (
                        <a href={action.href} key={idx} className={`${action.className} pointer`}>
                            {action.text}
                        </a>
                    );
                }
            }
            return (
                <span key={idx} className={`${action.className} pointer`}  >
                    {action.text}
                </span>
            );

        });
    }

    function getFormActions() {
        return (
            <div className="button-row flex items-center">
                {getActionButtons()}
            </div>
        )
    }

    return (
        <div className="MnForm">
            {getMnLayout()}
            {getFormActions()}
        </div>
    );
}

export { MnForm };