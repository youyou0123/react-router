import React from 'react';
import {Link} from 'react-router-dom';
class Btn extends React.Component {
    //用来操作历史记录
    click = () => {
        //点击时往后退
        let {url:{history:{goBack}}} = this.props;
        //调用函数点击一次后退一次
        goBack();
    }
    render() { 
        return (
            <div>
                <Link to="/">
                    <button>首页</button>
                </Link>
                <Link to="/about">
                    <button>关于</button>
                </Link>
                <button
                    onClick={this.click}
                >上次操作</button>
            </div>
        )
    }
}
 
export default Btn;