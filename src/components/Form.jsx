var React = require('react');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx');

var Form = React.createClass({
    onSubmit: function(e) {

        if(!this.refs.fieldEmail.state.valid) {
            console.log("email-error thrown");
            alert("invalid email address");
        } else {
          //  Some request
          var someRequest = {
              //  email: this.refs.fieldEmail.state.value,
              //  username: this.refs.fieldName.state.value
          };
          this.refs.fieldEmail.clear();
          this.refs.fieldName.clear();
        }
    },
    render: function() {
        return (
            <div className="col-sm-3">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <NameField type="First" ref="fieldName"/>
                        <br />
                        <EmailField ref="fieldEmail"/>
                        <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Form;