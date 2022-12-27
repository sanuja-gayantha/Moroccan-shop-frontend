import React from "react";
import "./Slider.scss"
import Typewriter from "typewriter-effect";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Slider = () => {

    // const [currentSlide, setCurrentSlide] = useState(0);

    // const data = [
    //   "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //   "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //   "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    // ];
  
    // const prevSlide = () => {
    //   setCurrentSlide(currentSlide === 0 ? 1 : (prev) => prev - 1);
    // };
    // const nextSlide = () => {
    //   setCurrentSlide(currentSlide === 1 ? 0 : (prev) => prev + 1);
    // };
  
    return (
      <div className="slider" id="home">
        <div className="container">
          <img src="../../img/homeImg.webp" alt="" />
          {/* <img src={data[1]} alt="" /> */}
          {/* <img src={data[2]} alt="" /> */}
        </div>
        <div className="titles">
          <div className="title_first">
          <Typewriter   options={{
              strings: ['Exclusive', 'Collection'],
              autoStart: true,
              loop: true,
            }}
          />
          </div>
          {/* <div className="title_second">
            Collection
          </div> */}
          <div className="title_thired">
            <AnchorLink href="#collection" className="link">On sale</AnchorLink>
          </div>
        </div>


        {/* <div className="icons">
          <div className="icon" onClick={prevSlide}>
            <WestIcon />
          </div>
          <div className="icon" onClick={nextSlide}>
            <EastIcon />
          </div>
        </div> */}
      </div>
    );
}

export default Slider