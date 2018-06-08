import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom'
// import App from './ChildToParent/App/app';
// import App from './router/router1/app';
// import App from './router/router222/app';
// import App from './router/router333/app';
import App from './router/router4/app';


ReactDOM.render(
    <Router>
        <App />
    </Router>
    ,
    document.getElementById('root')
)

if(module.hot){
    module.hot.accept();
}
 
