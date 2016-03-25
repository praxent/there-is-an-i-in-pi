import React from 'react'; // eslint-disable-line
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'; // eslint-disable-line
import createHashHistory from 'history/lib/createHashHistory';
import { Provider } from 'react-redux'; // eslint-disable-line
import { createStore } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import reducers  from './reducers';

import {
    Home,
    AddUser,
    Settings
} from './containers';

injectTapEventPlugin();

const store = createStore(reducers);

render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Home} />
                <Route path="users" component={Home} />
                <Route path="users/add(/:id)" component={AddUser} />
                <Route path="settings" component={Settings} />
        </Router>
    </Provider>
),  document.getElementById('App'));
