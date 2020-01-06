import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Noty from 'noty'
import axios from 'axios'
import * as moment from 'moment'
import 'moment/locale/es'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/noty/lib/noty.css";  
import "../node_modules/noty/lib/themes/bootstrap-v4.css";

Noty.overrideDefaults({
    theme: 'bootstrap-v4',
    layout   : 'topRight',
    timeout: 3000,
});

moment.locale('es');

axios.defaults.baseURL = 'https://node-control-visitas.herokuapp.com';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();