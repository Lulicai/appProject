/**
 * Created by lilyCai on 2017/1/17.
 */

import "../styles/common.css"
import React,{Component} from 'react';

//头部公用组件
class IndexHeader extends Component {
    constructor (props){
        super(props)
    }
    render (){
        return <div className="header">
            <ul className="header-list">
                {this.props.hasback?<li className="header-back marginLeft">
                    <a href="javascript:window.history.go(-1);" className="iconfont">&#xe601;</a>
                </li>:""}
                <li className="header-search">
                    <i className="iconfont">&#xe600;</i>
                    <input type="text" placeholder="你要的，就在这里~"/>
                </li>
                <li className="header-scan iconfont">&#xe659;</li>
            </ul>
        </div>
    }
}

class SubHeader extends Component{
    constructor (props){
        super(props)
        this.state={
            subClick:0
        }
    }
    changeClick(ele,index){
        //console.log(parseInt(index.substr(index.length-1,1)))
        //console.log(ele)
        this.setState({
            subClick:parseInt(index.substr(index.length-1,1))
        })
    }
    render (){
        return (
            <ul className="indexData">
                {this.props.indexData.map((ele,index)=><li key={index} onClick={(ele,index)=>this.changeClick(ele,index)} className={index==this.state.subClick?"active":""}>{ele}</li>)}
            </ul>
        )
    }
}
SubHeader.defaultProps={
    indexData:["推荐","发现","美妆个护","母婴用品","食品保健","家居日用"]
}

class Content extends Component{
    constructor (props){
        super(props)
    }
    render (){
        let contentClass ="content"+(this.props.hasSubheader?" hassub":"")
            +(this.props.hasFooter?" hasfooter":"");
        return(
            <div className={contentClass}>

            </div>
        )
    }
}


class Footer extends Component{
    constructor (props){
        super(props)
    }
    render (){
        return(
            <div className="footer">
                <ul className="footer-list">
                    {
                        this.props.footerList.map((ele,i)=><li key={i}>
                            <a href={ele.path} className={i==this.props.active?"iconfont active":"iconfont"}>{ele.ico}</a>
                            <a className={i==this.props.active?"footer-nav active":"footer-nav"}>{ele.title}</a>
                        </li>)
                    }
                </ul>
            </div>
        )
    }
}

Footer.defaultProps={
    footerList:[
        {"title":"首页","ico":"\ue60a","path":"#/"},
        {"title":"分类","ico":"\ue6e3","path":"#/list"},
        {"title":"更多","ico":"\ue673","path":"#/more"},
        {"title":"购物车","ico":"\ue604","path":"#/cart"},
        {"title":"我的","ico":"\ue629","path":"#/myxiu"}
    ]
}

export {IndexHeader,SubHeader,Content,Footer}