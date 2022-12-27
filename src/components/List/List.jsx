import React, {useState} from "react";
import "./List.scss";
import Card from "../Card/Card";
import  useFetch from "../../hooks/useFetch";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import Loading from "../Loading/Loading";


const List = ({cats}) => {
    
    // // if(catId)
    // const catId = parseInt(useParams().id);
    // console.log(catId)

    let cati=""
    cats.map((item) => {
        return cati+=`&[filters][categories][id][$eq]=${item}`    
    })
    

    const [page, setPage] = useState(0);
    
    // &pagination[limit]=15
    const { data, loading, error } = useFetch(`/products?populate=*${cati}&pagination[start]=${page}`);

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


    // console.log(data?.length)
    // console.log(page)
    

    return(
        <div className="list-container">
            <div className="list">
                {loading ? "" : data?.map(item=>(
                    <Card item={item} key={item.id}></Card>
                ))}
            </div>
            
            {loading ? <Loading/> : (<div className="btn-container">
                         {/* <hr></hr> */}
                        <span>{page} to {page+25}</span> 
                        <div className="btns">
                            <NavigateBeforeIcon className="btn" onClick={() => handlePage("dec")}/>
                      
                            {data?.length<25? "": (<NavigateNextIcon className="btn" onClick={() => handlePage("inc")}/>)}
                        </div>
                  
            </div>)}
        </div>
    )
}

export default List