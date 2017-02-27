
import {Header,Footer,Content,SubHeader} from  "../../common/components/common"
import ProductList from "../components/product-list2"
import React, {Component} from  "react"
import ReactIScroll from "react-iscroll"
import {ScrollOptions} from "../../common/config/config"

//console.log(ScrollOptions)
/*商品分类列表*/
class ClassList extends Component{
    constructor(props){
        super(props)
    }
    HandClick(id){
    	this.props.changeClassID(id)
    }
    render (){
        return (
            <ul className="class-list">
                {
                    this.props.classData.map((ele,i)=><li key={i} onClick={()=>this.HandClick(ele.classID)}>{ele.className}</li>)
                }
            </ul>
        )
    }
}
ClassList.defaultProps={
    classData:[]
};

/*商品页面的顶层组件*/
class ListPage extends Component {
    constructor(props){

        super(props) ;//让react 的Component 帮你实现组件的方法

        this.state= {
            classData:[],
            productData:[],
        };
        //设置默认数据请求
        this.classID = 0;
        this.linenumber = 6;
        this.pageCode = 0;
        this.refresh = false;
        $.get("http://datainfo.duapp.com/shopdata/getclass.php",(data)=>{
            if(typeof data ==="string"){
                data = JSON.parse(data)
            }

            this.setState({
                classData:data
            })
        },"json");
        
        this.getProductData();
        
        this.onScrollEnd = this.onScrollEnd.bind(this);
        
        this.onScroll = this.onScroll.bind(this);
        
    }
	getProductData(){
		$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{
			"classID":this.classID,
			"linenumber":this.linenumber,
			"pageCode":this.pageCode
		},(data)=>{
			if(data){
				this.setState({
					productData : this.pageCode == 0?data:this.state.productData.concat(data)
	              
				})
			}   
        })
	}
	changeClassID(id){
		this.classID = id;
		this.pageCode = 0;
		this.getProductData();
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
			this.pageCode++;
			this.getProductData();
		}
	}
	onScroll(myScroll){
		console.log(myScroll.y);
		if(myScroll.y>60){
			//console.log("刷新");
			this.refresh = true;
		}
	}
    render() {
        return (
            <div className="page" id="list-page">
                <Header title="列表" hasSearch={true} hasBack={false} rightBtn={<a>搜索</a>}  />
                <SubHeader>
                    <ClassList changeClassID={(id)=>this.changeClassID(id)} classData={this.state.classData} />
                </SubHeader>
                <Content hasFooter={true} hasSubHeader={true}>
                    <ReactIScroll iScroll={IScroll}//通过引入iScroll插件生成一个IScroll的实例，就不用手动创建new Scroll对象了
                                  options={ScrollOptions}//通过config.js配置IScroll的一些属性
                                  onScroll={this.onScroll}
                                  onScrollEnd={this.onScrollEnd}>
                        <ProductList productData={this.state.productData} />
                    </ReactIScroll>
                </Content>
                <Footer active={1} />
            </div>
        )
    }
}

ListPage.defaultProps= {
    listData:[]
};

export default  ListPage

