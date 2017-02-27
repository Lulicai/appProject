/**
 * Created by 18865520462 on 2017/1/6.
 */

import {Header,Footer,Content,SubHeader} from  "../../common/components/common"
import React, {Component} from  "react"
import  ProductList from "../components/product-list2"
import ReactIScroll from "react-iscroll"
import {ScrollOptions} from "../../common/config/config"

/*商品页面的顶层组件*/
class HistoryPage extends Component {
    constructor(props){
        super(props) ;//让react 的Component 帮你实现组件的方法
        this.state= {
            productData:JSON.parse(window.localStorage.getItem("historyData")||"[]")
        }
    }
    clearhistoryData(){
        window.localStorage.removeItem("historyData")
        this.setState({
            productData:[]
        })
    }

    render() {
        return (
            <div className="page" id="list-page">
                <Header title="历史记录" hasSearch={true} rightBtn={<a onClick={()=>this.clearhistoryData()}>清除</a>}/>
                <Content hasFooter={true} hasSubHeader={false}>
                    <ReactIScroll iScroll={IScroll}//通过引入iScroll插件生成一个IScroll的实例，就不用手动创建new Scroll对象了
                                  options={ScrollOptions}//通过config.js配置IScroll的一些属性
                    >
                        <ProductList productData={this.state.productData} />
                    </ReactIScroll>

                </Content>
            </div>
        )
    }
}


export default  HistoryPage
