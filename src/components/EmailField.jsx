var React = require('react');
var validator = require('email-validator');
var classNames = require('classnames');

var EmailField = React.createClass({
    getInitialState: function() {
        return {valid: true, value: ""}
  },
    onChange: function(e) {
        //  make sure email is valid and input is not empty
        if(!validator.validate(e.target.value) && (e.target.value!="")) {
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
        var labelClass = classNames('label', (this.state.valid ? "" : "label-danger"));

        return (
            <div className={divClass}>
                <i className={glyphClass}></i>
                <input className={inputClass} onChange={this.onChange} placeholder="Email"value={this.state.value}/>
                <span className={labelClass}>Please enter a valid email address</span>
          </div>
          );
        },
      });

module.exports = EmailField;
