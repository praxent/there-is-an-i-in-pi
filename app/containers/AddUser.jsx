import React from 'react';
import { connect } from 'react-redux';
import { RaisedButton, TextField } from 'material-ui';
import { stateToProps, dispatchToProps } from '../utils';


class AddUser extends React.Component {

    render() {
        return (
            <div>
                <h1>Add a User</h1>
            </div>
        );
    }
}

export default connect(stateToProps, dispatchToProps)(AddUser);
