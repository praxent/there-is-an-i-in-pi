import React from 'react';
import { connect } from 'react-redux';
import { stateToProps, dispatchToProps } from '../utils';

class Home extends React.Component {
    componentDidMount() {
        console.log('Home ddid mount');
    }

    render() {
        return (
            <div>
                <h1>Home comdponent</h1>
            </div>
        );
    }
}

export default connect(stateToProps, dispatchToProps)(Home);
