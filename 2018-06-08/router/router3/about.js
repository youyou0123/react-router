import React from 'react';
import {Link} from 'react-router-dom';
import About1 from './aboutchild/aboutA'
class About extends React.Component {
    render() { 
        //结构赋值 传入父级数据
        let {location:{pathname}} = this.props;
        //控制关于的主页面，判断显示的页面  默认带着关于我们
        let com = pathname == '/about'? <About1 />:'';
        //将结构return出去
        return (
            <div>
                <h1>关于</h1>
                <Link to="/about/a">
                    <button>关于我们</button>
                </Link>
                <Link to="/about/b">
                    <button>关于你们</button>
                </Link>
                <Link to="/about/c">
                    <button>关于它们</button>
                </Link>
                {com}
            </div>
        )
    }
}
 
export default About;