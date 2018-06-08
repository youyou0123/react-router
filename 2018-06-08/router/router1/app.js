import React from 'react';
import {Route} from 'react-router-dom';
//引入index 文件
import Index from './index';
//引入about 文件
import About from './about';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        //将结构返出去 结内匹配路由
        return (
            <div>
                <div>都是页面</div>
                <Route exact path="/" component={Index}/>
                <Route exact path="/about" component={About}/>
                {/*如果要超精确匹配，那么要加 exact strict  比如:/about/aa*/}
                {/* <Route exact strict  path="/about/" component={About}/> */}
            </div>
        )
    }
}

export default App;