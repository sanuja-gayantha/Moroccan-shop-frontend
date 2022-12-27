import React from "react";
import List from "../../components/List/List";
import "./Products.scss";
import  useFetch from "../../hooks/useFetch";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Products = () => {

    const [selectedCats, setSelectedCats] = useState([])
    const [collection, setCollection] = useState(true)
    const [none, setNone]= useState("none");

    // eslint-disable-next-line
    const { data, loading, error } = useFetch(`/categories`);

    const handleChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        setSelectedCats(isChecked ? [...selectedCats, value] : selectedCats.filter(item=> item!==value));
    }

    const showHideDown = () => {
        setNone("flex")
        setCollection(!collection)
    }

    const showHideUp = () => {
        setNone("none")
        setCollection(!collection)
    }

    // console.log(selectedCats)

    return(
        <div className="products" id="products">
            <div className="left">
                <div className="filterItems">
                    <div className="collectionTitle">
                        <h2>Our Collection</h2>
                        {/* {(!collection)?(<ExpandMoreIcon className="ExpandMoreIconClass" onClick={() => setCollection(!collection)}/>):(<KeyboardArrowUpIcon className="ExpandMoreIconClass" onClick={() => setCollection(!collection)}/>)} */}
                        <div className="upDownArrows">
                            {/* <ExpandMoreIcon className="ExpandMoreIconClass" onClick={() => setCollection(!collection)}/> */}
                            {(collection)?(<ExpandMoreIcon className="ExpandMoreIconClass" onClick={showHideDown}/>):(<KeyboardArrowUpIcon className="ExpandMoreIconClass" onClick={showHideUp}/>)}
                        </div>
                    </div>

                    <div className="mobileProductData">
                        <div className="productData" style={{display:`${none}`}}>
                        {data?.map((item) => (
                            <div className="inputItem" key={item.id}>
                                <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
                                <label htmlFor={item.id}>{item.attributes.title}</label>
                            </div>
                        ))}</div>
                    
                    </div>
                    
                    <div className="desktopProductdata">
                    {loading?"":(<div className="productData">
                    {data?.map((item) => (
                        <div className="inputItem" key={item.id}>
                            <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
                            <label htmlFor={item.id}>{item.attributes.title}</label>
                        </div>
                    ))}</div>)}
                    </div>
                </div>
            </div>
            <div className="right">
                {/* <img className="catImg" src="../../img/banner.webp" alt="" /> */}
                <List cats={selectedCats}/>
            </div>
        </div>
    )
}

export default Products





