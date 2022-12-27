import React, { useState } from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/cartReducer";
import { Link } from "react-router-dom";

const Cart = ({updateSetOpen}) => {

    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch()
    let firstFourproducts = []
    const reversed = [...products].reverse()
    let restCount = 0
    const [cart, setCart] = useState(true)

    // console.log(products)

    if (reversed!==null){
        const productsLength = products.length;
        if (productsLength>4){
            firstFourproducts = reversed.filter((product,idx) => idx < 4)
            restCount = productsLength-4;
        }else{
            firstFourproducts = reversed;
        }  
        }
    
    const UpdatesetCart = () => {
        setCart(!cart)
        updateSetOpen()
    }

    return(
        <div className="cart">
            {cart?(            <>
            <h1 className="productTitle"><b>Your Favourite Products</b></h1>
            <div className="item_container">
                {firstFourproducts.length===0?<div style={{display:"flex", justifyContent:"center", color:"#E04F5F"}}>No product to show</div>:firstFourproducts?.map(item => (
                    <div className="item" key={item.id}>
                        <Link className="link" to={`/product/${item.id}`} ><img src={item.img} alt="" onClick={UpdatesetCart}/></Link>
                        <div className="details">
                            <h1>{item.title}</h1>
                            <p>{item.desc?.substring(0, 70)}...</p>
                        </div>
                        <DeleteOutlinedIcon className="delete" onClick={()=>dispatch(removeItem(item.id))}/>
                    </div>
                    
                ))}  
            </div>
            {/* <div className="more">+5</div> */}
            <Link className="viewCart" to="/checkout_favourites" onClick={UpdatesetCart}><u>{restCount>0?"+"+restCount:""} View Favourites</u></Link>
            <Link className="sendCollection" to="/checkout_favourites" onClick={UpdatesetCart}>Send Your Favourites To Us</Link>
            {/* <div className="reset">Clear Cart</div> */}
            {/* <SentimentSatisfiedAltOutlinedIcon className="SentimentSatisfiedAltOutlinedIconClass"/> */}
            </>):""}


        </div>
    )
}

export default Cart