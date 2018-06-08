import React from 'react';
class List extends React.Component {
    render() { 
        //解构父级传过来的数据
        let {txt} = this.props;
        //渲染页面
        return (
            <li>{txt}</li>
        )
    }
}
 
export default List;