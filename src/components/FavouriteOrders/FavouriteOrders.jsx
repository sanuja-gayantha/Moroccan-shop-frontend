import React, {useState} from "react";
import "./FavouriteOrders.scss";
import useFetchAuth from "../../hooks/useFetchAuth";
import { Link } from "react-router-dom";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Loading from "../Loading/Loading";

const FavouriteOrders = () => {

    const [page, setPage] = useState(0);
    const { data, loading, error } = useFetchAuth(`/favourites?sort=id%3Adesc&pagination[start]=${page}`);
    
    // console.log(page)

    const handlePage = (condition) => {
        // e.preventDefault();
        if (condition==="inc"){
            setPage(page+25)    
        }
        if (condition==="dec"){
            if(page-25<0){
                // console.log("No more products")
            }else{
                setPage(page-25)
            }
        }

    }

    return(       
        <div className="favourite_orders">
                <div className="favouriteTitle">Favourite Orders</div>
                <div className="orders">
                    <div className="item_titles">
                        <div className="details">Id</div>
                        <div className="details name">Name</div>
                        <div className="details">Email</div>
                        <div className="details tel">Telepone</div>
                        <VisibilityOutlinedIcon className="delete_color"/>
                    </div>
                {loading ? <Loading/> : data?.map(item=>(
                    <div className="item" key={item.id}>
                        {/* <Link className="link" to={`/favourite/${item.id}`}>
                            <img src={item.img} alt=""/>
                        </Link> */}
                            <div className="details">{item.id}</div>
                            <div className="details name">{item.attributes.name}</div>
                            <div className="details">{item.attributes.email}</div>
                            <div className="details tel">{item.attributes.tel}</div>

                            <Link className="delete_color" to={`/favourite/${item.id}`}><VisibilityOutlinedIcon className="view"/></Link>
                        {console.log(item)}
                    </div>
                ))}
                    {/* {reversed.length===0?"No product":reversed?.map(item => (
                        <div className="item" key={item.id}>
                            <Link className="link" to={`/product/${item.id}`}><img src={item.img} alt=""/></Link>
                            <div className="details">
                                <h1>{item.title}</h1>
                                <p>{item.desc?.substring(0, 70)}...</p>
                            </div>
                            <DeleteOutlinedIcon className="delete" onClick={()=>dispatch(removeItem(item.id))}/>
                        </div>
                        
                    ))} */}

                    {loading ? "" : (<div className="btn-container">
                         {/* <hr></hr> */}
                        <span>{page} to {page+25}</span> 
                        <div className="btns">
                            <NavigateBeforeIcon className="btn" onClick={() => handlePage("dec")}/>
                      
                            {data?.length<25? "": (<NavigateNextIcon className="btn" onClick={() => handlePage("inc")}/>)}
                        </div>
                  
                    </div>)}
                </div>
        </div>       
    )
}

export default FavouriteOrders;