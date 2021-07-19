'use strict';

import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './search.less'

class Search extends Component {
  render() {
    return (
      <div className="search-text">
        Search Text
      </div>
    );
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root'),
)
