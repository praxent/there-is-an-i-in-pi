import React from 'react';
import { AppBar } from 'material-ui';

export class Header extends React.Component {
    render() {
        return (
            <div>
                <AppBar
                  title='There is an "i" in Pi'
                />
            </div>
        );
    }
}
