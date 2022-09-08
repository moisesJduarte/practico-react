import React from 'react';
import { BrowserRouter, Switch, Router, Route } from "react-router-dom";
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import '../styles/globla.css';

const App = () => {
    return (
        <BrowserRouter>  
            <Switch>
                <Layout>
                    <Route exact path='/' component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/recovery-password" component={RecoveryPassword} />
                    <Route component={NotFound} />
                </Layout>
            </Switch>
        </BrowserRouter>
        
    );
} 

export default App;

