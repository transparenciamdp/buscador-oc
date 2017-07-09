import React, {Component} from 'react';

// another way to define React component
export default function SearchResultRow(props) {

    let {cols, rowId, displayCols} = props;
    let data_cols = Object.keys(cols).map((columnName) => {
        return (displayCols.indexOf(columnName) === -1)
            ? null
            : <td key={rowId + "-" + columnName}>{trim(cols[columnName])}</td>
    });
    let action_cols = '';
    return <tr>{data_cols}</tr>;

    function trim(s) {
        return s;
    }
}
