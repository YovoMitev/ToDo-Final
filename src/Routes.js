import {Route, Switch} from 'react-router-dom'
import React from "react";
import Todos from './components/Todos'
import NotFoundPage from './components/notFoundPage'

const Routes = ()=>(
    <Switch>
        <Route exact path='/' component={Todos}/>
        <Route path='/show/all' component={Todos}/>
        <Route path='/add' component={Todos}/>
        <Route path='/update' component={Todos}/>
        <Route component={NotFoundPage}/>
    </Switch>
);

export default Routes