import React from 'react';
import ReactDOM from 'react-dom';
import SearchApp from './react-customsearch/app.jsx';

let rootElement = document.querySelector("#search-form");
ReactDOM.render(<SearchApp src={rootElement.attributes["api-src"].value || "/"} />, rootElement);
