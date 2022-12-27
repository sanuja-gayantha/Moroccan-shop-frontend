import React, {useRef, useState} from "react";
import "./CheckoutFavourites.scss";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/cartReducer";
import AlertMsg from "../../components/AlertMsg/AlertMsg";
import {Link} from "react-router-dom";
import axios from "axios";

const CheckoutFavourites = () => {

    // const catId = parseInt(useParams().id);
    const products = useSelector(state => state.cart.products)
    const reversed = [...products].reverse()
    const dispatch = useDispatch()
    const formRef = useRef(null);
    const refName = useRef('');
    const refEmail = useRef('');
    const refTel = useRef('');
    const refMessage = useRef('');
    const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

    const showAlert = (show = false, type = '', msg = '') => {
        setAlert({ show, type, msg });
      };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!refEmail.current.value) {
            showAlert(true, 'error', 'Email is a required * field.');
          }else{
            try{
                await axios.post(process.env.REACT_APP_API_URL+"/favourites", {
                    data:{
                        name: refName.current.value,
                        email: refEmail.current.value,
                        message: refMessage.current.value,
                        tel: refTel.current.value,
                        productids:{reversed}
                
                }, 
                    headers: {
                            Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
                    }
                    })
                showAlert(true, 'success', 'Favourites sent successfully.');
                // console.log(res)

            }catch(error){
                // console.log(error)
                showAlert(true, 'error', 'Process Faield try again.');
            }
            
          }
    }

    return(
        <div className="checkout">
            <div className="checkoutTitle">Your Favourite Products</div>
            <div className="checkout_container">
                <div className="left">
                    {reversed.length===0?"No product":reversed?.map(item => (
                        <div className="item" key={item.id}>
                            <Link className="link" to={`/product/${item.id}`}><img src={item.img} alt=""/></Link>
                            <div className="details">
                                <h1>{item.title}</h1>
                                <p>{item.desc?.substring(0, 70)}...</p>
                            </div>
                            <DeleteOutlinedIcon className="delete" onClick={()=>dispatch(removeItem(item.id))}/>
                        </div>
                    ))}
                </div>
                <div className="right">
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="inputItem boxSize">
                            <span>Name</span>
                            <input type="text" name="name" ref={refName}/>
                        </div>
                        <div className="inputItem boxSize">
                            <span>Email *</span>
                            <input type="email" name="email" ref={refEmail}/>
                        </div>
                        <div className="inputItem boxSize">
                            <span>Telephone / Mobile</span>
                            <input type="text" name="tel" ref={refTel}/>
                        </div>
                        <div className="inputItem">
                            <span>Message</span>
                            <textarea id="" cols="30" rows="7" name="message" ref={refMessage}></textarea>
                        </div>
                        <input type="submit" value="Send Your Favourites" className="send"/>
                        {/* load aleart */}
                        <div>{alert.show && <AlertMsg {...alert} removeAlert={showAlert} />}</div>
                    </form>
                </div>
            </div>
 
        </div>
    )
}

export default CheckoutFavourites;