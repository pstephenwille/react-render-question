import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Foo from './Foo';
import Bar from './Bar';

function App() {
    return (
        <main className="App">
            <header className="App-header">
                <Link to={'/foo'}>Foo</Link>
                <Link to={'/bar'}>Bar</Link>
            </header>
            <Switch>
                <div id={'body'}>
                    <Route path={'/foo'}>
                        <Foo name={'foo'} />
                    </Route>
                    <Route path={'/bar'}>
                        <Bar name={'bar'} />
                    </Route>
                </div>
            </Switch>

        </main>
    );
}

export default App;
