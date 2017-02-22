import React, {Component} from 'react';
export default class SearchForm extends Component {
    constructor(props) {
        super(props);
        var defaults = props.defaults || {};
        this.state = {
            matchType: defaults.matchType || 'any'
        };
    }

    render() {
        let searchQueryLabel = 'Buscar';
        let searchQueryPlaceholder = '';
        let matchTypeLabel = 'Incluir término';
        let matchTypes = {
            any: 'Cualquier palabra',
            all: 'Todas las palabras',
            full: 'Frase exacta'
        };
        let searchLabel = 'Buscar';
        let typeIs = t => this.state.matchType === t;
        return (
            <form onSubmit={this.props.action}>
                <div className="form-group">
                    <label htmlFor="search-query">{searchQueryLabel}</label>
                    <input id="search-query" name="q" className="form-control" placeholder={searchQueryPlaceholder} />
                </div>
                <label style={{float: 'left', fontSize: '1.1em', padding: '8px 4px'}}>{matchTypeLabel}: </label>
                <div className="btn-group form-group">
                    <label className="btn btn-default" htmlFor="typeAny">
                        <input type="radio" name="type" id="typeAny" value="any" autoComplete="off" defaultChecked={typeIs('any')} />
                        <span> {matchTypes.any}</span>
                    </label>
                    <label className="btn btn-default" htmlFor="typeAll">
                        <input type="radio" name="type" id="typeAll" value="all" autoComplete="off" defaultChecked={typeIs('all')} />
                        <span> {matchTypes.all}</span>
                    </label>
                    <label className="btn btn-default" htmlFor="typeFull">
                        <input type="radio" name="type" id="typeFull" value="full" autoComplete="off" defaultChecked={typeIs('full')} />
                        <span> {matchTypes.full}</span>
                    </label>
                </div>
                <div className="form-actions">
                    <button className="btn btn-primary btn-lg" type="submit">{searchLabel}</button>
                </div>
                <hr />
            </form>
        );
    }
}
