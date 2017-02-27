
import React,{Component} from 'react';
import {Header,Footer,Content} from '../../common/components/common';
import '../styles/login.css'

class Login extends Component {
	constructor(props){
		super(props)
		this.state = {
			username:"",
			password:"",
			showpass:false,
			remember:false
		}
	}
	getUserName(event){
		this.setState({
			username:event.target.value
		})
	}
	getPsw(event){
		this.setState({
			password:event.target.value
		})
	}
	
	changeclick(){
		this.setState({
			showpass:!this.state.showpass
		})
		
	}
	remember(){
		this.setState({
			remember:!this.state.remember
		})
	}
	verification(){
		var user = this.state.username;
		var pass = this.state.password;
		var rem = this.state.remember;
		$.get('http://datainfo.duapp.com/shopdata/userinfo.php',{
			status:'login',
			userID:user,
			password:pass
		},function(data){
			if(data == 2){
				alert('用户名密码不符')
			}else if(data == 0){
				alert('用户名不存在')
			}else{
				if(rem){
					localStorage.setItem('userID',user)
				}else{
					sessionStorage.setItem('userID',user)
				}
				//alert('登录成功')
				window.location.hash = '#/'
			}
		})
	}
	
	render(){
		return (
		<div>
			<Header title="登录" subTitle=""></Header>
			<Content hasSubHeader={false}>
				<div>
				<ul className="login-listin">
					<li>
						<input type='text' className="text-bar" id="username" placeholder="请输入账户" defaultvalue={this.state.username} onChange={(event)=>this.getUserName(event)}/>
					</li>
					<li>
						<input type={this.state.showpass?'text':'password'} className="text-bar" id="psw" placeholder="请输入密码" defaultvalue={this.state.password} onChange={(event)=>this.getPsw(event)}/>
					</li>
					<li>
						<label>
							<input type='checkbox' onClick={()=>this.remember()}/>
							<span>记住密码</span>
						</label>
						<a className="go-forget">忘记密码</a>
					</li>
					<li>
						<label>
							<input type='checkbox' onClick={()=>this.changeclick()}/>
							<span>显示密码</span>
						</label>
					</li>
					<li>
						<button className="login-in submit" onClick={()=>this.verification()}>登录</button>
					</li>
					<li>
						<button className="go-reg"><a href="#/register">注 册</a></button>
					</li>
				</ul>
			</div>
			</Content>
		</div>
		)
	}
}
export {Login}
