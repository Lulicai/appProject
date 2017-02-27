
import React,{Component} from 'react';
import {Header,Footer,Content} from '../../common/components/common';
import '../styles/register.css'


class Register extends Component {
	constructor(props){
		super(props)
		this.state={
			username:"",
			password:"",
			confirmPsw:''
		}

	}
	//通过onchange 事件来获取用户输入的用户名和密码
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
	getConfirmPsw(event){
		this.setState({
			confirmPsw:event.target.value
		})
	}
	submit(){
		console.log(this.state.username)
		console.log(this.state.password)
		console.log(this.state.confirmPsw)
		var user = this.state.username;
		var pass = this.state.password;
		var qrpass = this.state.confirmPsw;
			
		if(user == ""){
			alert('用户名不能为空')
			return
		}else if(!/^(1[3-9][0-9]|15[0|1|3|6|7|8|9]|18[8|9])\d{8}$/.test(user)){
			alert('用户名不符合格式')
			return
		}else{
		}
		if(pass == ""){
			alert('密码不能为空')
			return
		}else if(!/^\w{5,16}$/.test(pass)){
			alert('密码不符合格式')
			return
		}else if(pass.length<6 && pass.length>16){
			alert('密码不符合长度')
		}else{

		}
		if(qrpass!==pass){
			console.log('请再次输入密码')
			return
		}else{
		}
		$.get('http://datainfo.duapp.com/shopdata/userinfo.php',
			{status:'register',userID:user,password:pass},
			function(data){
				if(data == 1){
				alert('注册成功');
					window.location.hash = '#/login'
				}else if(data == 2){
					console.log('数据库出错')
				}else{
					console.log('此账号已注册')
				}
			}
		)
	}
	render(){
		return (
		<div>
			<Header title="注册"></Header>
			<Content hasFooter={false} hasSubHeader={false}>
				<div>
				<ul className="login-list">
					<li>
						<span>账户名称&nbsp;:&nbsp;</span>
						<input type='text' className="text-bar1" defaultvalue={this.state.username} onChange={(event)=>this.getUserName(event)} id="username" placeholder="请输入账户"/>
					</li>
					<li>
						<span>登录密码&nbsp;:&nbsp;</span>						
						<input type="password" id="psw" placeholder="请输入密码" defaultvalue={this.state.password} onChange={(event)=>this.getPsw(event)}/>
					</li>
					<li>
						<span>确认密码&nbsp;:&nbsp;</span>
						<input type="password" id="qrpsw" placeholder="请输入密码" defaultvalue={this.state.confirmPsw} onChange={(event)=>this.getConfirmPsw(event)}/>
					</li>
				</ul>
				<div className="reg"><button className="go-reg submit" onClick={()=>this.submit()}>注册</button></div>
			</div>
			</Content>
		</div>
		)
	}
}
export {Register}
