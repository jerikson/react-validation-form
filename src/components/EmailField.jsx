var React = require('react');
var validator = require('email-validator');
var classNames = require('classnames');

var EmailField = React.createClass({
    getInitialState: function() {
        return {valid: true, value: ""}
  },
    onChange: function(e) {
        if(!validator.validate(e.target.value)) {
            this.setState({valid: false, value: e.target.value})
        } else {
            this.setState({valid: true, value: e.target.value});
        }
    },
    clear: function() {
        this.setState({valid: true, value: ""})
    },
    render: function() {
        var divClass = classNames('form-group has-feedback', (this.state.valid ? "has-success" : "has-error"));
        var inputClass = classNames('form-control', (this.state.valid ? "has-success" : "has-error"));
        var glyphClass = classNames('form-control-feedback', 'glyphicon', (this.state.valid ? "glyphicon-ok" : "glyphicon-remove"));

        return (
            <div className={divClass}>
                <i className={glyphClass}></i>
                <input className={inputClass} onChange={this.onChange} placeholder="Email"value={this.state.value}/>
            </div>
          );
        },
      });

module.exports = EmailField;
