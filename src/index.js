import React from "react";

import { Provider } from "react-redux";
import {  BrowserRouter, Router } from "react-router-dom";
//import { Router } from "react-router";
import { render } from "react-dom";
import "./index.css";

import App from "./App";
import createStore from "./store/createStore";
import * as serviceWorker from "./serviceWorker";
import { createBrowserHistory, History } from "history";

const history = createBrowserHistory();
const store = createStore();
const rootElement = document.getElementById("root");

const CustomRouter = ({
                          basename,
                          children,
                          history,
                      }) => {
    const [state, setState] = React.useState({
        action: history.action,
        location: history.location,
    });
    React.useLayoutEffect(() => history.listen(setState), [history]);

    return(
                <Router
                    basename={"count"}
                    children={children}
                    location={state.location}
                    navigationType={state.action}
                    navigator={history}
                />
    );
}

render(
    <Provider store={store}>
        <CustomRouter
            basename={"service"}
            history={history}
        >
            <App />
        </CustomRouter>

    </Provider>,
    rootElement
);


serviceWorker.unregister();

