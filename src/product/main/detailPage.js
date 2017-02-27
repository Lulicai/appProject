/**
 * Created by 18865520462 on 2017/1/4.
 */
import "../styles/swiper-3.3.1.min.css"

import "../styles/detail.css"

import {Header,Footer,Content,SubHeader} from  "../../common/components/common"

import React, {Component} from  "react"

import {Tools} from "../../common/tools/tools"

class DetailPage extends Component　{
    constructor(props) {
        super(props);
        this.state= {
            goodsName:[],
            price:[],
            goodsID:0,
            buynumber:[],
            bannerList:[],
            goodsListImg:""
        };
        $.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{
            goodsID:this.props.params.goodsID
        },(data)=>{
            console.log(data)
            if(typeof data ==="string"){
                data = JSON.parse(data)

            }
            this.setState({
                goodsID:data[0].goodsID,
                goodsName:data[0].goodsName,
                price:data[0].price,
                buynumber:data[0].buynumber,
                bannerList:JSON.parse(data[0].imgsUrl),
                goodsListImg:data[0].goodsListImg
            });

            var historyItem = {
                goodsID: this.state.goodsID,
                goodsName:this.state.goodsName,
                price:this.state.price
            };
            window.localStorage.setItem("historyItem",JSON.stringify(historyItem));

        },"json");

    }

    addCart () {
        //判断用户是否登录
        var userID =Tools.getUserId();
        if(userID){
            $.get("http://datainfo.duapp.com/shopdata/updatecar.php",
                {userID:userID,goodsID:this.state.goodsID,number:1},function(data){
                    console.log(data);
                    if(data==1){
                        alert("添加成功")
                    }else {
                        alert("添加失败");

                    }
                })
        } else{
            window.location.hash="#/login"
        }
    }

    toCart () {
        Tools.getUserId() && (window.location.hash = "#/cart")
    }

   render() {
        return (
            <div className="page" id="detail-page">
                <Header title="详情" hasSearch={false} rightBtn={<a href="javascript:;" onClick={this.toCart}>购物车</a>}/>
                <Content hasFooter={false} hasSubHeader={false}>
                    <div className="swiper-container" ref="swiper-container">
                        <div className="swiper-wrapper">
                            {
                                this.state.bannerList.map((ele,i)=><div key={i} className="swiper-slide">
                                    <img src={ele}/>
                                </div>)
                            }
                        </div>
                    </div>
                   <div className="swiper-btns">
                        <ul className="self-pagination" ref="pagination"></ul>
                    </div>
                    <ul className="pro-info">
                        <li className="pro-name">{this.state.goodsName}</li>
                        <li className="pro-price"><em>￥{this.state.price}</em><del>￥999</del></li>
                        <li className="pro-num">购买人数{this.state.buynumber}</li>
                    </ul>
                    <div className="detail-footer">
                        <div className="look-wrap">
                            <a className="look-detail" href={"#/introduce/"+this.state.goodsID}>查看商品详情</a>
                            <span className="right">{">"}</span>
                        </div>
                        <div className="add-wrap">
                            <button className="add-cart" onClick={()=>this.addCart()}>添加到购物车</button>
                        </div>
                    </div>
                </Content>
            </div>
        )
    }
    componentDidMount() {

         this.swiper = new Swiper(this.refs["swiper-container"],{
             slidesPerView:'3',
             pagination:this.refs.pagination,
             loop:true
         })

     }
     componentDidUpdate() {
         //更新swiper
         this.swiper.update();
         this.swiper.reLoop();
     }
}
export  default  DetailPage
