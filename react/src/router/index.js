import React from "react";
import App from '../App'
import Main from './Main'
import UseState from '../components/useState/index'
import UseEffect from '../components/useEffect/index'
import UseContext from '../components/useContext/index'
import UseRef from '../components/useRef/index'
import Fragments from '../components/fragment/index'
import Partals from '../components/partals/index'


import {BrowserRouter, Route,Switch} from "react-router-dom";
const BasicRoute = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route
                path="/"
                render={() => (
                    <Main>
                        <Route path='/useState' component={UseState}/>
                        <Route path='/useEffect' component={UseEffect}/>
                        <Route path='/useContext' component={UseContext}/>
                        <Route path='/useRef' component={UseRef}/>
                        <Route path='/fragments' component={Fragments}/>
                        <Route path='/partals' component={Partals}/>
                    </Main>

                )}
            />
        </Switch>
    </BrowserRouter>
);

export default BasicRoute;
