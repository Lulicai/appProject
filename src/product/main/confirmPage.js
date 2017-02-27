
import {Header,Content,SubHeader,Footer} from "../../common/components/common"
import {ProductInfo} from "../components/productInfo"
import React,{Component} from "react"
import "../styles/confirm.css"
import ReactIScroll from "react-iscroll"
import {ScrollOptions} from "../../common/config/config"

class ConfirmFooter extends Component {
    constructor(props){
        super(props)
    }
    submit(){
        var orderItem = {
            orderID: new Date().getTime(),
            totalPrice:this.props.allprice,
            totalNumber:this.props.allNumber,
            orderProductInfo:this.props.orderDataInfo,
            orderState:2
        };


        var orderArray = JSON.parse(localStorage.getItem('orderData') || '[]');

        orderArray.push(orderItem);
        console.log(orderArray)
        localStorage.setItem('orderData',JSON.stringify(orderArray))
        window.location.hash = "#/order"

    }
    render(){
        return (
            <div className="account-price">
                <div className="all-price">
                    <p>总数量:{this.props.allNumber}</p>
                    <p>总价格(含运费):{this.props.allprice}</p>
                </div>
                <div className="check-price"><button onClick={()=>this.submit()}>提交订单</button></div>
            </div>
        )
    }
}

class ConfirmPage extends Component {
    constructor(props){
        super(props)
        //从本地的存储里面获取总的数据


        var orderData =JSON.parse(localStorage.getItem('cartData'))
        var orderDataInfo = orderData.productInfo
        this.totalPrice = orderData.totalPrice
        this.totalNumber = orderData.totalNumber
        console.log(1111111);
        this.state={
            orderDataInfo:orderDataInfo,
            fee:10,
            allprice:0,
            allNumber:0
        }

    }
    componentWillMount(){
        var totalPrice = this.totalPrice
        this.setState({
            allprice:totalPrice*1+this.state.fee*1,
            allNumber:this.totalNumber
        })
    }




    render(){
        console.log(this.state.allNumber);
        console.log(this.state.orderDataInfo);
        return (
            <div>
                <Header title="确认订单"></Header>
                <Content hasFooter={false} hasSubHeader={false}>
                    <ReactIScroll iScroll={IScroll}//通过引入iScroll插件生成一个IScroll的实例，就不用手动创建new Scroll对象了
                                  options={ScrollOptions}//通过config.js配置IScroll的一些属性
                                  >
                        <div>
                            <div className="address">收货地址</div>
                            <ProductInfo orderDataInfo={this.state.orderDataInfo}/>
                            <div id="order-price">
                                <p>运费:10</p>
                                <p>实付(含运费):{this.state.allprice}</p>
                            </div>
                            <textarea>附加信息</textarea>
                        </div>

                    </ReactIScroll>

                </Content>
                <ConfirmFooter allprice={this.state.allprice} allNumber={this.state.allNumber} orderDataInfo={this.state.orderDataInfo}></ConfirmFooter>
            </div>
        )
    }
}
export default ConfirmPage