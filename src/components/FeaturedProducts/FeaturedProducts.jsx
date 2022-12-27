import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss"
import  useFetch from "../../hooks/useFetch";
import Loading from "../Loading/Loading" 

const FeaturedProducts = ({type}) => {

    const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);
    
    return(
        <div className="FeaturedProducts">
            <div className="top">
                <h1>{type} products</h1>
                <span className="styles_wave__HM_CU">☄️</span>
            </div>
            <div className="bottom">
            {error ? "Something went wrong!" : loading ? <Loading/> : data?.map((item) => <Card item={item} key={item.id} />)}
            </div>
        </div>
    )
}

export default FeaturedProducts