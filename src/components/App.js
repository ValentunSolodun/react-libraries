import React from 'react';
import './App.css';
import {Router, Route, NavLink} from 'react-router-dom';

import StyledComponents from "./StyledComponents/StyledComponents";
import ReactVirtyalized from "./ReactVirtyalized/ReactVirtyalized";
import ReduxForm from "./ReduxForm/ReduxForm";
import Sidebar from "./Sidebar";

import {createBrowserHistory} from 'history';
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducers from "../reducers";
import {composeWithDevTools} from 'redux-devtools-extension';

export const history = createBrowserHistory();

const store = createStore(rootReducers, composeWithDevTools());

function App() {

  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="App">
          <Sidebar className={'sidebar-container'}/>
          <div className={'router-container'}>
            <Route path='/styled-component' component={StyledComponents}/>
            <Route path='/react-virtyalized' component={ReactVirtyalized}/>
            <Route path='/redux-form' component={ReduxForm}/>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
