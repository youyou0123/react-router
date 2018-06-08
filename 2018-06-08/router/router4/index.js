import React from 'react';
import List from './list';
import {Route,Link} from 'react-router-dom';
class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr:[]
        }
    }
    //点击事件 渲染今日新闻数据
    click = () => {
        this.setState({arr:[1,2,3,4,5]});
    }
    //点击渲染专属新闻事件
    zsclick = () => {
        this.setState({arr:['寂寞','同城','胶友']});
    }
    //点击事件 退出
    out = () => {
        //解构父级数据
        let {outFn} = this.props;
        //调用函数 改变开关为假  退出登录
        outFn();
        //重新渲染
        this.setState({arr:[]});
    }
    //渲染本级数据，渲染当前页面
    render() { 
        let {arr} = this.state;
        //接收父级的开关状态
        let {onOff} = this.props;
    //三木判断开关状态 如果开关为turn 证明已登录，可以直接点击得到数据
    //如果开关为false，走login组件的登陆步骤
    let btn2 = onOff?(
        <span>
            <button
                onClick={this.zsclick}
            >你的专属新闻</button>
            <button 
                onClick={this.out}
            >退出</button>
        </span>
        ):( <Link to="/login"> 
            <button>你的专属新闻</button>
        </Link>)
        //
        return (
            <div>
                <button 
                    onClick={this.click}
                >今日新闻</button>
               {btn2}
                <ul>{
                    //设置循环 展开li 
                    arr.map((e,i)=>{
                        //往list组件中传入值
                        return <List {...{
                            key:i,
                            txt:e
                        }}/>
                    })
                }</ul>
            </div>
        )
    }
}
 
export default Index;