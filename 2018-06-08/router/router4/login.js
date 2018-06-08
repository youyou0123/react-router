import React from 'react';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    //点击的时候走这里
    click = () => {
        //解构父级数据
        let {go} = this.props;
        //调用函数 设置开关为真 证明已登录
        go();
    }
    render() { 
        return ( 
            //点击的时候调用点击事件
            <div>
                <button onClick={this.click}>走你</button>
            </div>
        )
    }
}
 
export default Login;