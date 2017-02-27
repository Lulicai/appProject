/**
 * Created by Administrator on 2017/1/4.
 */
import React, {Component} from  "react"
import ReactDOM from "react-dom"
import {Router,Route,hashHistory} from "react-router"

import IndexPage from "./product/main/indexPage2"
import ListPage from "./product/main/listPage"
import CartPage from "./product/main/CartPage"
import OrderListPage from "./product/main/order-list-page"
import DetailPage from "./product/main/detailPage"
import HistoryPage from "./product/main/historyPage"
import ConfirmPage from "./product/main/confirmPage"
import Introduction from "./product/main/productIntroduction"

import {Register} from "./user/main/register"
import {Login} from "./user/main/login"
import {MyXiu} from "./user/main/myxiu"
import {MorePage} from "./user/main/more"
import {ModifyPage} from  "./user/components/modifyPass"

ReactDOM.render(<Router history={hashHistory}>

    <Route path="/" component={IndexPage}  />
    <Route path="detail(/:goodsID)" component={DetailPage}  />
    <Route path="list" component={ListPage}  />
    <Route path="introduce(/:goodsID)" component={Introduction}  />
    <Route path="cart" component={CartPage}  />
    <Route path="confirm" component={ConfirmPage}  />
    <Route path="order" component={OrderListPage}  />
    <Route path="myxiu" component={MyXiu}  />
    <Route path="history" component={HistoryPage}  />
    <Route path="login" component={Login}  />
    <Route path="register" component={Register}  />
    <Route path="more" component={MorePage}  />
    <Route path="more/modifypass" component={ModifyPage}  />
</Router>,document.getElementById("root"));





if(module.hot){
    module.hot.accept();
}
