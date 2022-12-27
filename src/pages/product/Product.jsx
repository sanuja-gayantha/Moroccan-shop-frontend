import React from "react";
import { useState } from "react";
import "./Product.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import useFetch from "../../hooks/useFetch";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import AlertMsg from "../../components/AlertMsg/AlertMsg";
import Loading from "../../components/Loading/Loading";

const Product = () => {
  
  const id = useParams().id;
  const navigate = useNavigate();
  const [selectedImg, setSelectedImg] = useState([0,'jpg']);

  const dispatch = useDispatch()
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  const [alert, setAlert] = useState({ show: false, msg: '', type: 'success' });

  const showAlert = (show = false, type = '', msg = '') => {
      setAlert({ show, type, msg });
    };


  // console.log(data)
  const setNext = () => {

    const nextNum = (selectedImg[0]+1)
    const nextLength = data?.attributes?.allMedia?.data?.length-1

    if (nextNum > nextLength){
      setSelectedImg([0, data?.attributes?.allMedia?.data[0].attributes.ext])
    }else{
      data?.attributes?.allMedia?.data?.forEach((item,index) => {
        if(index===nextNum){
          setSelectedImg([index, data?.attributes?.allMedia?.data[index].attributes.ext])
        }})
    }
  }
    
  const setPrevious = () => {

    const prevNum = (selectedImg[0]-1)
    const nextLength = data?.attributes?.allMedia?.data?.length-1

    if (prevNum < 0){
      setSelectedImg([nextLength, data?.attributes?.allMedia?.data[nextLength].attributes.ext])
    }else{
      data?.attributes?.allMedia?.data?.forEach((item,index) => {
        if(index===prevNum){
          setSelectedImg([index, data?.attributes?.allMedia?.data[index].attributes.ext])
        }
      })
    }
  }

  const AddToCart = (dataCart) => {
      dispatch(addToCart(dataCart))
      showAlert(true, 'success', 'Product added to your favourites.')
  }


  return (
    <div className="product">
      {loading ? (
        <Loading/>
      ) : (
        <>
            <div className="previous" onClick={() => navigate(-1)}>
                <NavigateBeforeIcon className="NavigateBeforeIconClass"/>
                {/* <span>BACK</span> */}
            </div>
          <div className="left">

            <div className="images">
            {/* {console.log(" ")} */}
            {data?.attributes?.allMedia?.data?.map((item,index) => {
                // console.log(item.attributes.url)

                if(item.attributes.ext!== '.mp4'){
                  return(
                    <img
                    key={index}
                    src={process.env.REACT_APP_UPLOAD_URL + item.attributes.formats.thumbnail.url}
                    alt=""
                    onClick={(e) => setSelectedImg([index,'.jpg'])}
                  />
                )
                }
                else{
                  return(
                    <img
                    key={index}
                    src="../../../img/play-button.png"
                    alt=""
                    onClick={(e) => setSelectedImg([index,'.mp4'])}
                  />
                )
                }
                }
            )}


            </div>
            <div className="mainImg">
              {selectedImg[1]!=='.mp4' ? (
                <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.allMedia?.data[selectedImg[0]]?.attributes?.url
                }
                alt=""
              />
              ) : (
                <video src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.allMedia?.data[selectedImg[0]]?.attributes?.url
                } width="100%" height="100%" controls="controls" autoPlay={true} />
              )}
              <div className="nextPrevButtons">
                <NavigateBeforeIcon className="NavigateBeforeIconClass" onClick={setPrevious}/>
                <NavigateNextIcon className="NavigateNextIconClass" onClick={setNext}/>
              </div>
            </div>


          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <p>{data?.attributes?.desc}</p>
  
            <div
              className="add"
              onClick={() => AddToCart({
                id: data.id,
                title: data.attributes.title,
                desc: data.attributes.desc,
                img: process.env.REACT_APP_UPLOAD_URL + data?.attributes?.allMedia?.data[0].attributes.formats.thumbnail.url
              })}>
              <FavoriteBorderIcon /> ADD TO FAVOURITES
            </div>
            {loading?<AlertMsg  {...alert} removeAlert={showAlert}/>:""}
          </div>
        </>
      )}
    </div>
  );
};

export default Product;