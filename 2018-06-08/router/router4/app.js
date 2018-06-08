import React from 'react';
import Index from './index';
import Login from './login';
import {Route,Link,Redirect} from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onOff:false
        }
    }
    //点击 开关状态为真
    go = () => {
        this.setState({onOff:true});
    }
    //退出时将开关变为false
    outFn = () => {
        this.setState({onOff:false});
    }
    render() { 
        //解构自己
        let {onOff} = this.state;
        return (
            //匹配路由的路径  同时将开关传下去
            <div>
                <Route exact path="/" render={()=>{
                    return <Index onOff={onOff} outFn={this.outFn}/>
                }} />
                <Route path="/login" render={()=>{
                    //判断是否登录，来决定去往哪个页面
                    if(onOff){
                        return <Redirect to="/" />
                    }else{
                        return <Login go={this.go}/>
                    }
                }} />
            </div>
        )
    }
}
 
export default App;
