import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import NewPassword from '../pages/NewPassword';
import Confirm from '../pages/Confirm';
import RecoveryPassword from '../pages/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Orders from '../pages/Orders';
import Checkout from '../pages/Checkout';
import CreateAccount from '../pages/CreateAccount';
import MyAccount from '../pages/MyAccount';


import '../styles/global.css';

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/Confirm" component={Confirm} />
					<Route exact path="/account" component={MyAccount} />
					<Route exact path="/checkout" component={Checkout} />
					<Route exact path="/orders" component={Orders} />
					<Route exact path="/signup" component={CreateAccount} />
					<Route exact path="/account" component={MyAccount} />
					<Route exact path="/NewPassword" component={NewPassword} />
					<Route exact path="/recovery-password" component={RecoveryPassword} />
					<Route path="*" component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;