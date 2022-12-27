import React, {useState} from "react";
import "./Card.scss";
import {Link} from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import AlertMsg from "../AlertMsg/AlertMsg";

const Card = ({item}) => {


    const dispatch = useDispatch()
  
    const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
  
    const showAlert = (show = false, type = '', msg = '') => {
        setAlert({ show, type, msg });
      };

    const AddToCart = (dataCart) => {
        dispatch(addToCart(dataCart))
        showAlert(true, 'success', 'Product added to your favourites.')
    }
  

    return(
        
            <div className="card">
                <Link className="link" to={`/product/${item.id}`}>
                <div className="image">
                    {item?.attributes.type==="featured" ? <span>Featured</span> : ""}
                    <img src={process.env.REACT_APP_UPLOAD_URL + item?.attributes?.allMedia?.data[0].attributes.formats.small.url} alt=""/>
                    {/* <img src={process.env.REACT_APP_UPLOAD_URL + item?.attributes.img1.data.attributes.url} alt="" className="secondImg" /> */}
                </div>
                </Link>
                <div className="details">
                    <div className="productDetail">
                        <h2>{item?.attributes.title}</h2> 
                    </div>
                    <div className="FavoriteBorderIconClass" onClick={() => AddToCart({
                        id: item?.id,
                        title: item?.attributes.title,
                        desc: item?.attributes.desc,
                        img: process.env.REACT_APP_UPLOAD_URL + item?.attributes?.allMedia?.data[0].attributes.formats.thumbnail.url
                    })}>
                        {/* <h3>Add me to your favourites</h3> */}
                        {<FavoriteIcon className="FavoriteIcon"/>}
                    </div>
                </div>
                {alert.show?<AlertMsg  {...alert} removeAlert={showAlert} />:""}
            </div>
            
        
    )
}

export default Card