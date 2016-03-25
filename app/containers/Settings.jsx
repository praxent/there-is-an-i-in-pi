import React from 'react';
import { connect } from 'react-redux';
import { stateToProps, dispatchToProps } from '../utils';

class Settings extends React.Component {
    componentDidMount() {
        console.log('Settings did mount');
    }

    render() {
        return (
            <div>
                <h1>Settings component</h1>
            </div>
        );
    }
}

export default connect(stateToProps, dispatchToProps)(Settings);
