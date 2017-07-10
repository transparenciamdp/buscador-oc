import React from 'react';
import ReactDOM from 'react-dom';
import SearchApp from './react-customsearch/app.jsx';

ReactDOM.render(<SearchApp src="/api/" />, document.querySelector("#search-form"));
