import React from 'react';
import { connect } from 'react-redux';
import { RaisedButton, TextField, SvgIcon } from 'material-ui';
import { stateToProps, dispatchToProps } from '../utils';


class AddUser extends React.Component {

    componentDidMount() {
        const { id } = this.props.params;
        if(!id) return;
        console.log(id);
    }

    render() {
        return (
            <div>
                <h1>Add a User</h1>
                <form onSubmit="">
                  <TextField placeholder="First Name"></TextField>
                  <br />
                  <TextField placeholder="Last Name"></TextField>
                  <br />
                  <SvgIcon>Upload</SvgIcon>
                  <br />
                  <span>If your last name is "Coker", then please do not supply a first name different than "Coker" because it will not be considered.</span>
                </form>
            </div>
        );
    }
}

export default connect(stateToProps, dispatchToProps)(AddUser);
