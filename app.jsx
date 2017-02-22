import 'whatwg-fetch'
import SearchForm from './components/SearchForm.jsx';
import SearchResult from './components/SearchResult.jsx';

import React from 'react';
import ReactDOM from 'react-dom';

var $$ = document.querySelector.bind(document);
var $root = $$('#search-form'); // @TODO get as config

class SearchApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            cols: []
        };
    }

    componentWillMount() {
        fetch('/columns/selected').then(function(response) {
            return response.json();
        }).then(data => this.setState({cols: data}));
        // @TODO trigger "SearchResult is loading its header!"
    }

    loadResults(evt) {
        evt.preventDefault();

        let
            thisNode = ReactDOM.findDOMNode(this),
            $$       = thisNode.querySelector.bind(thisNode);

        // @TODO get these 2 values from SearchForm somehow
        var q = $$("input[name=q]").value;
        var type = ($$("input[name=type]:checked") || {
            value: 'any'
        }).value;

        this.setState({
            loading: true // @TODO ...SearchResult is loading its data!
        })
        fetch(`/search?q=${q}&type=${type}`).then(function(response) {
            return response.json();
        }).then(data => this.setState({
            loading: false,
            data: data
        }));
    }

    render() {
        let action = this.loadResults.bind(this);
        return (
            <div>
                <SearchForm action={action} />
                <SearchResult cols={this.state.cols} rows={this.state.data}/>
            </div>
        );
    }
}

ReactDOM.render(<SearchApp />, $root);
