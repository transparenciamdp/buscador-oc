import React from 'react';
import ReactDOM from 'react-dom';
import SearchApp from './react-customsearch/app.jsx';

ReactDOM.render(<SearchApp src="/api_ordenes/" />, document.querySelector("#search-form"));
