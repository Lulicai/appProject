
import React,{Component} from 'react';
import {Header,Footer,Content} from '../../common/components/common';
import '../styles/myxiu.css'
import {Tools} from '../../common/tools/tools'

class MyXiu extends Component {

    constructor(props){
        super(props)
        var data = Tools.getUserId();
        this.state={
            userID:data
        }
    }
    render(){
        return (
            <div>
                <Header title="我的秀" hasBack={false} rightBtn={<a>充值</a>}></Header>
                <Content hasFooter={true} hasSubHeader={false}>
                    <div className="my-wrap">
                    <div className="my-img">
                        <div className="my-pic"><img src="" alt=""/></div>
                        <div className="my-msg">
                            <p>昵称：{this.state.userID}</p>
                            <p>余额：0</p>
                        </div>
                    </div>
                    <div className="my-rem">
                       <ul>
                           {
                               this.props.myData.map((ele,i)=>{
                                   return <a href={ele.path} key={i}>
                                       <li>
                                           <p>{ele.text}</p><span>{ele.icon}</span>
                                       </li>
                                   </a>
                               })
                           }
                       </ul>
                    </div>
                    </div>
                </Content>
                <Footer active={3}/>
            </div>
        )
    }
}
MyXiu.defaultProps={
    myData:[
        {text:"我的订单",icon:">","path":"#/order"},
        {text:"我的优惠券",icon:">","path":"/"},
        {text:"浏览记录",icon:">","path":"#/history"},
        {text:"我的收藏",icon:">","path":"/"},
    ]
};


export {MyXiu}
