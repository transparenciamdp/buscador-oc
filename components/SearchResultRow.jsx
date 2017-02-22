import React, {Component} from 'react';

// another way to define React component
export default function SearchResultRow(props) {

    let {cols, rowId} = props;
    let data_cols = Object.keys(cols).map((columnName) => <td key={rowId + "-" + columnName}>
        {trim(cols[columnName])}
    </td>);
    let action_cols = ''; // <td></td>;
    return (
        <tr>
            {data_cols}
            {action_cols}
        </tr>
    );

    function trim(s) {
        return s;
    }
}
