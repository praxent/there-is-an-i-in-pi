import React from 'react';
import { TextField, RaisedButton } from 'material-ui';
import { stateToProps, dispatchToProps } from '../utils';
import { connect } from 'react-redux';
import { login } from '../api';
import { loginSuccess, loginFailure } from '../actions/login';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null
        };
    }

    componentWillMount() {

    }

    submit(e) {
        e.preventDefault();
        login.authenticate(this.state)
            .then((token) => {
                this.props.loginSuccess(token);
                this.props.history.push('/settings');
            })
            .catch((err) => {
                this.props.loginFailure(err)
            });
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <form className="" noValidate onSubmit={e => this.submit(e)}>
                <TextField
                    valKey="username"
                    name="username"
                    value={this.state.username}
                    notEmpty
                    floatingLabelText="Enter Username"
                    onChange={e => this.onChange(e)} />
                <TextField
                    valKey="password"
                    name="password"
                    value={this.state.password}
                    notEmpty
                    floatingLabelText="Enter Password"
                    type="password"
                    onChange={e => this.onChange(e)} />
                <RaisedButton primary={true} label="Log In" type="submit" style={{ marginTop: 15 }} />
            </form>
        );
    }
}

function loginDispatchToProps(dispatch) {
    return {
        loginSuccess: token => dispatch(loginSuccess(token)),
        loginFailure: message => dispatch(loginFailure(message))
    };
}

export default connect(null, loginDispatchToProps)(Login);
