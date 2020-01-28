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

let API_URI

if (process.env.NODE_ENV === 'production') {
    // API_URI = process.env.API_URI
    API_URI = 'https://node-control-visitas.herokuapp.com'
} else {
    API_URI = 'http://localhost:3000'
    API_URI = 'https://node-control-visitas.herokuapp.com'
}
axios.defaults.baseURL = API_URI

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();