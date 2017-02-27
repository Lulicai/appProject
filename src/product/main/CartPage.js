/**
 * Created by lhsh on 2017/1/5.
 */
import {Header,Content,SubHeader,Footer} from "../../common/components/common"
import {Tools} from "../../common/tools/tools"
import React,{Component} from "react"
import "../styles/cart.css"

import {ScrollOptions} from "../../common/config/config"

class CartList extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <ul className="cart-list">
                {
                    this.props.cartData&&this.props.cartData.map((ele,i)=><li key={i} className="cart-item">
                        <a href="###" className="pic"><img src={ele.goodsListImg} /></a>
                        <div className="info">
                            <p className="p-name">{ele.goodsName}</p>
                            <p className="price"><em>${ele.price}</em></p>
                            <div className="num-wrap">
                                <button onClick={()=>this.props.changeData(-1,i) } className="minus">-</button>
                                <input type="text" value={ele.number}/>
                                <button onClick={()=>this.props.changeData(1,i)} className="plus">+</button>
                            </div>
                        </div>
                        <button  className="delete" onClick={()=>this.props.changeData(0,i)} href="javascript:void(0);">删除</button>
                    </li>)
                }
            </ul>
        )
    }
}


class CartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartData: [],
            totalNumber: 0,
            totalPrice: 0
        };
        var id = Tools.getUserId();
        id && $.getJSON("http://datainfo.duapp.com/shopdata/getCar.php?callback=?", {userID:id}, (data)=> {
            console.log(data);
            this.setState({
                cartData: data
            });
            this.getTotal(data)
        });
        this.changeData = this.changeData.bind(this)
    }

    changeData(type, index) {
        console.log(this)
        console.log(type);
        console.log(index)
        var data = this.state.cartData;
        var id = data[index].goodsID;
        var number = data[index].number;
        if (type) {
            number = type + number * 1;
            data[index].number = number
        } else {
            number = 0;
            data.splice(index, 1)
        }
        this.setState({
            cartData: data
        });
        this.getTotal(data);
        var userID=Tools.getUserId();
        console.log(userID);
        $.get("http://datainfo.duapp.com/shopdata/updatecar.php",{
            userID:userID,
            goodsID:id,
            number:number
        },function(data){
            console.log("添加购物车成功！")
        })

    }

    getTotal(data) {
        var number = 0;
        var price = 0;
        for (var i = 0; i < data.length; i++) {
            number += data[i].number * 1;
            price += data[i].number * data[i].price
        }
        this.setState({
            totalNumber:number,
            totalPrice:price
        });


    }
    toConfirm(){
        window.localStorage.setItem("cartData",JSON.stringify({
            totalPrice:this.state.totalPrice,
            totalNumber:this.state.totalNumber,
            productInfo:this.state.cartData
        }));
        window.location.hash="#/confirm"
    }
    render(){
        return(
            <div id="cart-page" className="page">
                <Header title="购物车" rightBtn={<a href="javascript:;" onClick={()=>this.toConfirm()}>结算</a>}/>
                <SubHeader className="sub-header">
                    <div className="cart-bar">
                        <span>总数：{this.state.totalNumber}</span>
                        <span>总金额：${this.state.totalPrice}</span>
                    </div>
                </SubHeader>
                <Content HasFooter={true} hasSubHeader={true} hasIscroll={true}>
                    <CartList changeData={this.changeData} cartData={this.state.cartData}></CartList>
                </Content>
                <footer active="2"/>
            </div>
        )
    }
}

export default  CartPage

/**
 * Created by lhsh on 2017/1/6.
 */
