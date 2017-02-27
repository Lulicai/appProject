
import "../styles/index.css"
import "../styles/swiper-3.3.1.min.css"
import {Header,Footer,Content,SubHeader} from  "../../common/components/common"
import React, {Component} from  "react"
import ReactIScroll from "react-iscroll"
import {ScrollOptions} from "../../common/config/config"
import ProductList from "../components/product-list2"
console.log(ScrollOptions)
class IndexClass extends Component　{
    constructor(props){
        super(props);
        this.state = {
            classList:["\ue646","\ue603","\ue62e","\ue655","\ue63e","\ue61e","\ue616","\ue618","\ue61a","\ue63c"]
        };
    }
    render() {
        return (
            <div className="indexClass">
               <ul className="classMuch">
                   {
                       this.state.classList.map((ele,i)=><a href={"#/list/"}><li className="iconfont" key={i}>
                           {ele}
                       </li></a>)
                   }
               </ul>
            </div>
        )
    }
}
class IndexPage extends Component　{
    constructor(props){
        super(props);
        this.state = {
            banner:[],
            productData:[],
            data:[]
        };
        this.linenumber = 8;
        this.pageCode = 0;
        this.refresh = false;
        $.getJSON("http://datainfo.duapp.com/shopdata/getBanner.php?callback=?",{
        },(data)=>{
            //console.log(data)
            this.setState({
                banner:[JSON.parse(data[0].goodsBenUrl)[0],JSON.parse(data[1].goodsBenUrl)[0],JSON.parse(data[2].goodsBenUrl)[0],JSON.parse(data[3].goodsBenUrl)[0]],
                data:data
            })
        },"json");
        this.getProductData();
        this.onScrollEnd = this.onScrollEnd.bind(this);
        this.onScroll = this.onScroll.bind(this);
    }
    getProductData(){
        $.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?", {}, (data)=> {
            this.setState({
                productData : this.pageCode == 0?data:this.state.productData.concat(data)

            })
        })
    }
    onScrollEnd(myScroll){
        console.log(myScroll)
        if(this.refresh){
            this.pageCode = 0;
            this.getProductData();
            this.refresh = false;
        }
        else if(myScroll.y-myScroll.maxScrollY<=20){
            //console.log("加载");
           // this.pageCode++;
            this.getProductData();
        }
    }
    onScroll(myScroll){
        console.log(myScroll.y)
        if(myScroll.y>60){
            //console.log("刷新");
            this.refresh = true;
        }
    }
    render() {
        var bannerlist = this.state.banner;
        var data = this.state.data;
        console.log(data);
        return (
            <div className="indexpage" id="index-page">
                <Header title="首页" hasSearch={false}  hasBack={false} rightBtn={<a href="#/login">登录</a>}/>
                <Content hasFooter={true} hasSubHeader={false}>
                    <ReactIScroll iScroll={IScroll}//通过引入iScroll插件生成一个IScroll的实例，就不用手动创建new Scroll对象了
                                  options={ScrollOptions}//通过config.js配置IScroll的一些属性
                                  onScroll={(myScroll)=>this.onScroll(myScroll)}
                                  onScrollEnd={(myScroll)=>this.onScrollEnd(myScroll)}>
                        {/*Iscroll 下面只有一个子级*/}
                      <div>

                          <div className="swiper-container" ref="swiper-container">
                              <div className="swiper-wrapper">
                                  {
                                      bannerlist.map((ele,i)=><div key={i} className="swiper-slide">
                                          <a href={"#/detail/"+data[i].goodsID}><img className="bannerImg" src={ele}/></a>
                                      </div>)
                                  }
                              </div>
                              <div className="swiper-pagination"></div>
                          </div>
                          <IndexClass/>
                          <ProductList productData={this.state.productData}/>
                      </div>
                    </ReactIScroll>
                </Content>
                <Footer active={0} />
            </div>
        )
    }
    componentDidMount() {

        this.swiper = new Swiper(this.refs["swiper-container"],{
            pagination:'.swiper-pagination',
            loop:true,
            autoplay : 5000
        });

    }
    componentDidUpdate() {
        //更新swiper
        this.swiper.update();
        this.swiper.reLoop();
    }
}
export  default  IndexPage