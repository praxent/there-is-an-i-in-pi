import React from 'react';
import { connect } from 'react-redux';
import { RaisedButton, TextField } from 'material-ui';
import { stateToProps, dispatchToProps } from '../utils';
import { Header } from '../components/Header.jsx';
import { users } from '../api';

class AddUser extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          id: null,  
          name_first: '',
          name_last: '',
          bluetooth_address: ''
        }; 
    }

    componentDidMount() {
        const { id } = this.props.params;
        if (!id) return;
        users.getSingle(id)
        .then((result) => {
            this.setState(Object.assign({}, this.state, result.data[0]))
        })
        .catch((err) => { console.log(err); });
  
    }

    onBlur(e) {
        if (e && e.target.value.toLowerCase() === 'coker') {
            this.setState({
                name_first: 'Coker',
                name_last: e.target.value
            });
        }
    }

    checkFirstName(e) {
        if (this.state.name_last.toLowerCase() === 'coker') {
            this.setState({
                [e.target.name]: 'Coker'
            });
        }
        else {
            this.updateValue(e);
        }
    }

    submit(e) {
        const { id } = this.props.params;
        e.preventDefault();
        console.log(this.state);
        if (id) {
            users.update(this.state)
                .then((result) => {
                    this.props.history.push('/users');
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        else {
            users.post(this.state)
                .then((result) => {
                    this.props.history.push('/users');
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }

    updateValue(e) {
        let newValue = (e.target.value) ? e.target.value : '';
        this.setState({ [e.target.name]: newValue });
    }

    render() {
        return (
            <div>
                <Header />
                <h1>Add a User</h1>
                <form onSubmit={e => this.submit(e)}>
                  <TextField 
                    placeholder="First Name" 
                    name="name_first"
                    value={this.state.name_first} 
                    onChange={e => this.checkFirstName(e)}
                    />
                  <br />
                  <TextField placeholder="Last Name"
                    name="name_last"
                    value={this.state.name_last}
                    onBlur={e => this.onBlur(e)} 
                    onChange={e => this.updateValue(e)} 
                  />
                  <br />
                  <TextField placeholder="Bluetooth Device ID"
                    name="bluetooth_address"
                    value={this.state.bluetooth_address}
                    onChange={e => this.updateValue(e)} 
                    />
                  <br />
                  <RaisedButton type="Submit">Submit</RaisedButton>
                  <br />
                  <span>If your last name is "Coker", then please do not supply a first name different than "Coker" because it will not be considered.</span>
                </form>
            </div>
        );
    }
}

export default connect(stateToProps, dispatchToProps)(AddUser);
