import React from 'react';
import { connect } from 'react-redux';
import { RaisedButton, TextField } from 'material-ui';
import { stateToProps, dispatchToProps } from '../utils';


class AddUser extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          name_first: '',
          name_last: ''
        }; 
    }

    componentDidMount() {
        const { id } = this.props.params;
        if(!id) return;
        console.log(id);
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
            this.updateName(e);
        }
    }

    updateName(e) {
        let name = (e.target.value) ? e.target.value : '';
        this.setState({
            [e.target.name]: name
        });
    }

    render() {
        return (
            <div>
                <h1>Add a User</h1>
                <form onSubmit="">
                  <TextField 
                    placeholder="First Name" 
                    name="name_first"
                    value={this.state.name_first} 
                    onChange={e => this.checkFirstName(e)}
                    />
                  <br />
                  <TextField placeholder="Last Name"
                    name="name_last"
                    onBlur={e => this.onBlur(e)} 
                    onChange={e => this.updateName(e)} 
                    />
                  <br />
                  <RaisedButton>Upload</RaisedButton>
                  <br />
                  <span>If your last name is "Coker", then please do not supply a first name different than "Coker" because it will not be considered.</span>
                </form>
            </div>
        );
    }
}

export default connect(stateToProps, dispatchToProps)(AddUser);
