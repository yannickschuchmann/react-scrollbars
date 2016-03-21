/** @jsx React.DOM */
'use strict'
var React = require('react');
var ReactDOM = require('react-dom');

var Home = require('./views/home/index.jsx');

require('normalize.css/normalize.css');
require('./app.css');

var App = React.createClass({
  render: function () {
    return (
      <div className="App">
        <header className="App-header">
        </header>

        <div className="App-content">
          <Home />
        </div>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById("App"));
