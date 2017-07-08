import React, {Component} from 'react';
import SearchResultRow from './SearchResultRow.jsx';
import Pagination from './Pagination.jsx';

export default class SearchResult extends Component {

    // @TODO i18n !
    resultCount(count) {
        return count > 0
            ? count + ' resultados'
            : '';
    }

    render() {
        let {cols, rows} = this.props;

        let data_ths   = cols.map((col, i) => <th key={i} style={{ textTransform: 'capitalize' }}>{col}</th>);
        let action_ths = '';// actions.map((action,i) => <th key={i}>{action}</th>); ...in the future
        // let header_row = <tr>{data_ths}{action_ths}</tr>;
        let header_row = <tr>{data_ths}</tr>;
        let noResultsText = 'Sin resultados',
            noResultsRow  = (<tr><td colSpan={cols.length} className="text-center">
                    <span className="text-muted">{noResultsText}</span>
                </td></tr>);

        let data_rows = rows.length
            ? rows.map((row, i) => <SearchResultRow row={i} key={i} cols={row}/>)
            : noResultsRow;
        let resume = <div id="result-resume">{this.resultCount(rows.length)}</div>;
        return (
            <div>
                {resume}
                <table className="table table-stripped table-bordered table-hover">
                    <thead>{header_row}</thead>
                    <tbody>{data_rows}</tbody>
                </table>
                <Pagination/>
            </div>
        );
    }
}
