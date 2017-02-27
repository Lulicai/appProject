

import React,{Component} from 'react';
import {Header,Footer,Content} from '../../common/components/common';
import '../styles/register.css'


class ModifyPage extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <Header title="修改密码" hasback={true}></Header>
                <Content hasFooter={false} hasSubHeader={false}>
                    <div>
                        <ul className="login-list">
                            <li>
                                <input type='text' className="text-bar1" id="username" placeholder="请输入原密码"/>
                            </li>
                            <li>
                                <input type="password" id="psw" placeholder="请输入新密码"/>
                            </li>
                            <li>
                                <input type="password" id="qrpsw" placeholder="请再次输入新密码"/>
                            </li>
                        </ul>

                        <div className="reg"><button className="go-reg">保存</button></div>
                    </div>
                </Content>
            </div>
        )
    }
}
export {ModifyPage}
