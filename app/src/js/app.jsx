import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import '../style/style.scss';

import Header from './Header';
import Main from './Main';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Main/>
                </div>
            </BrowserRouter>
        );
    }
}

render(<App/>, document.getElementById('app'));