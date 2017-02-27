
import "../styles/list.css"
import React,{Component} from "react"

/*写组件的时候，尽量 把组件名写完整，描述清晰*/
class  ProductList extends Component {
     constructor(props){
         super(props)
     }
    toDetail(ele){

        var historyData = JSON.parse(window.localStorage.getItem("historyData")||"[]");

        for(var i=0;i<historyData.length;i++){
            if(historyData[i].goodsID==ele.goodsID){
                historyData.splice(i,1);
                break
            }
        }
        historyData.unshift(ele);
        window.localStorage.setItem("historyData",JSON.stringify(historyData));

        window.location.hash = "#/detail/"+ele.goodsID;
    }
     render(){
         return (
             <ul className="pro-list">
                 {
                     this.props.productData.map((ele,i)=><li onClick={()=>this.toDetail(ele)} className="pro-item" key={i}>
                         <div className="productbox">
                             <a className="pic" href={"#/detail/"+ele.goodsID}><img src={ele.goodsListImg}/></a>
                             <p className="pro-name">{ele.goodsName}</p>
                             <p className="price"><em>￥{ele.price}</em><del>￥888</del></p>
                         </div>

                     </li>)
                 }
             </ul>
         )
     }

}
ProductList.defaultProps={
    productData:[]
};


export default ProductList