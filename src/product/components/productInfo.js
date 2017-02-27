
import React,{Component} from 'react';
import '../styles/productlist.css'


class ProductInfo extends Component {
    constructor(props){
        super(props)
    }

    render(){
        //console.log(this.props.orderDataInfo)
        var data = this.props.orderDataInfo || [];
        console.log(111111);
        return (
            <div className="product-info">
                <ul>{
                    data.map((ele,index)=>{
                        return <li className="sigleData" key={index}>
                            <img src={ele.goodsListImg}/>
                            <div className="text-info">
                                <p>{ele.goodsName}</p>
                            </div>
                            <div className="price-number">
                                <div className="price-info">${ele.price}</div>
                                <div className="number-info">*{ele.number}</div>
                            </div>
                        </li>
                    })
                }
                </ul>
            </div>
        )
    }

}
export {ProductInfo}