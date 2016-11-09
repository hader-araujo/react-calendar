import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, hashHistory } from "react-router"
import { Provider } from "react-redux"

import store from "./store"

import Layout from "./layout/Layout"
import ShowCalendar from "./pages/ShowCalendar"
import NotFound from "./pages/NotFound"

const app = document.getElementById('app')

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={ShowCalendar} />
                <Route path="*" component={NotFound} />
            </Route>
        </Router>
    </Provider>, app);
