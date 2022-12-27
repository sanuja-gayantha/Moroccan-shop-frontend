import React from "react";
import "./Favourite.scss";
import {Link, useParams, useNavigate} from "react-router-dom";
import useFetchAuth from "../../hooks/useFetchAuth";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Loading from "../../components/Loading/Loading";

const Favourite = () => {

    const navigate = useNavigate();
    const id = useParams().id;
    // const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
    
    const { data, loading, error } = useFetchAuth(`/favourites/${id}?populate=*`);

    return(
        <div className="checkout">
            {loading? <Loading/>:(<>
            <div className="previous" onClick={() => navigate(-1)}>
                <NavigateBeforeIcon className="NavigateBeforeIconClass"/>
                {/* <span>BACK</span> */}
            </div>
            
            <div className="checkoutTitle">Favourite Order {id}</div>
            <div className="checkout_container">
                <div className="left">
                    {data?.attributes?.productids?.reversed.map(item => (
                        <div className="item" key={item.id}>
                            <Link className="link" to={`/product/${item.id}`}><img src={item.img} alt=""/></Link>
                            <div className="details">
                                <h1>{item.title}</h1>
                                <p>{item.desc?.substring(0, 70)}...</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="right">
                    {/* {data?.attributes?.email} */}
                        <div className="inputItem">
                            <span className="span1">Email</span>
                            <span className="span2">: {data?.attributes?.email}</span>
                        </div>
                        <div className="inputItem">
                            <span className="span1">Name</span>
                            <span className="span2">: {data?.attributes?.name}</span>
                        </div>
                        <div className="inputItem">
                            <span className="span1">Telephone</span>
                            <span className="span2">: {data?.attributes?.tel}</span>
                        </div>
                        <div className="inputItem">
                            <span className="span1">Message:</span>
                            {/* <span className="span2">: </span> */}
                            
                        </div>
                        <div className="inputItem">
                            <span className="span2">{data?.attributes?.message}</span>     
                        </div>
                        {/* <div className="inputItem">
                            <span className="span1">Reply:</span>  
                        </div>
                        <div className="relpy">
                            <textarea id="" cols="50" rows="auto" name="message" ref={refreply}></textarea>    
                        </div>
                        <input type="submit" value="Send" className="send" onClick={handleReply}/>
                        <div>{alert.show && <AlertMsg {...alert} removeAlert={showAlert} />}</div> */}
                </div>
            </div>
            </>)}
 
        </div>
    )
}

export default Favourite;