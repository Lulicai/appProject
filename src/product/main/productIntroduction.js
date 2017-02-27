/**
 * Created by 18865520462 on 2017/1/5.
 */
import "../styles/introduction.css"

import {Header,Footer,Content,SubHeader} from  "../../common/components/common"

import React, {Component} from  "react"

class Introduction extends Component　{
    constructor(props) {
        super(props);
        this.state= {
            goodsName:[],
            goodsListImg:""
        };
        $.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{
            goodsID:this.props.params.goodsID
        },(data)=>{
            console.log(data[0].goodsListImg)
            if(typeof data ==="string"){
                data = JSON.parse(data)

            }
            this.setState({
                goodsName:data[0].goodsName,
                goodsListImg:data[0].goodsListImg
            })
        },"json");
    }
    render() {
        console.log(this.state.data)
        return (
            <div className="introductionPage" id="introduction-page">
                <Header title="商品资料" hasSearch={false} rightBtn={<a href="javascript:;" onClick={this.toCart}>购物车</a>}/>
                <Content hasFooter={false} hasSubHeader={false}>
                    <div className="intro-img">
                        <img src={this.state.goodsListImg} alt=""/>
                    </div>
                    <ul className="intro-dec">
                        <li>商品名称{this.state.goodsName}</li>
                        <li>品牌名称：美特斯邦威连衣裙</li>
                        <li>详细描述：收款返款了贷款放款快索拉卡打开发到手机付款健康的数据反馈的时间空间打开手机的快速打开了速度 几点上课打开了手机付款的数据发送到收到了房东说开了房间看电视了 卡洛斯的分散</li>
                        <li>编号：12554548488512</li>
                        <li>产地：中国</li>
                        <li>洗涤说明：悬挂晾干，水洗</li>
                        <li>备注：中国都是打算打算打算的撒的</li>
                    </ul>
                </Content>
            </div>
        )
    }
}

export default Introduction

