import React from 'react';
import { connect } from 'react-redux';
import { stateToProps, dispatchToProps } from '../utils';
import { Table,
        TableHeaderColumn, TableRow,
        TableHeader, TableRowColumn, TableBody, RaisedButton
} from 'material-ui';
import { users } from '../api'

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };


            // {
            //     name: 'test',
            //     device: 'test device',
            //     audio:'',
            //     lastSeen: new Date().toString(),
            //     status: 'In Office'
            // }
    }

    componentDidMount() {
        users.getAll()
        .then((data) => {
            this.setState({users: data})
        })
        .catch((err) => { console.log(err); });
    }

    render() {
        return (
            <div>
                <h1>Users</h1>
                    <RaisedButton label="Add" linkButton={true} primary={true} href={`#/users/add`}  />
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Device</TableHeaderColumn>
                            <TableHeaderColumn>Last Seen</TableHeaderColumn>
                            <TableHeaderColumn>Status</TableHeaderColumn>
                            <TableHeaderColumn style={{ textAlign: 'center' }}>Actions</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody showRowHover={true}>
                        {this.state.users.map(user =>
                            <TableRow key={user.name}>
                                <TableRowColumn>{`${user.name_first} ${user.name_last}`}</TableRowColumn>
                                <TableRowColumn>{user.bluetooth_address}</TableRowColumn>
                                <TableRowColumn>{user.last_seen}</TableRowColumn>
                                <TableRowColumn>{user.status}</TableRowColumn>

                                <TableRowColumn style={{ textAlign: 'center' }}>
                                    <RaisedButton linkButton={true} primary={true} label="Edit" href={`#/users/add/${user.id}`} />
                                </TableRowColumn>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default connect(stateToProps, dispatchToProps)(Home);
