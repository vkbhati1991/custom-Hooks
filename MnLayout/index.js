import React from "react";
import { FieldWrapper } from "../MnForm/FieldWrapper";

function MnLayout(props) {

    function getRows(rowsArray) {
        return rowsArray.map((cell, idx) => {
            return <div key={idx}>{getCells(cell)}</div>;
        });
    }

    function getCells(cellArray) {
        return cellArray.Cells.map((field, idx) => {
            return <div key={idx}>{getField(field)}</div>;
        });
    }

    function getField(field) {
        const controlKey = field.ControlKey;
        const fieldProps = props.fields[controlKey];
        return <FieldWrapper {...fieldProps} setValue={props.setValue} />;
    }


    if (!props.layout) {
        return;
    }

    const { Rows } = props.layout["Tabs"][0].Sections[0];

    return (
        <div className="mnLayout">
            {getRows(Rows)}
        </div>
    );
}

export { MnLayout };