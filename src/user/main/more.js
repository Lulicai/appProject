/**
 * Created by caicai on 2017/1/6.
 */

import React,{Component} from 'react';
import {Header,Footer,Content} from '../../common/components/common';
import '../styles/more.css'

class MorePage extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <Header title="更多" hasBack={true}></Header>
                <Content hasFooter={true} hasSubHeader={false}>
                    <div className="my-more">
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
                </Content>
            </div>
        )
    }
}
MorePage.defaultProps={
    myData:[
        {text:"修改密码",icon:">","path":"#/more/modifypass"},
        {text:"用户反馈",icon:">","path":"/"},
        {text:"关于",icon:">","path":"/"}
    ]
}
export {MorePage}
