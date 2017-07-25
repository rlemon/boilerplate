import React from 'react'; 
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Template from './views/template';
import Home from './views/home';
import Login from './views/login';
import Logout from './views/logout';
import Profile from './views/profile';
import Register from './views/register';

function AppRouter(props) {
	return <Router history={browserHistory}>
		<Route path='/' component={Template}>
			<IndexRoute component={Home} key='route-home' />
			<Route path='/login' component={Login} key='route-login' />
			<Route path='/logout' component={Logout} key='route-logout' />
			<Route path='/profile' component={Profile} key='route-profile' />
			<Route path='/register' component={Register} key='route-login' />
			
		</Route>
	</Router>;
}

export default AppRouter;