import React from "react";
import Slider from "../../components/Slider/Slider"
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts"
import Categories from "../../components/Categories/Categories"
import Contact from "../../components/Contact/Contact"
import WhoAreWe from "../../components/WhoAreWe/WhoAreWe"
import Help from "../../components/Help/Help"

import "./Home.scss"

const Home = () => {
    return(
        <div className="home">
            <Slider/>
            {/* <FeaturedProducts type="featured"/> */}
            <WhoAreWe/>
            <Help/>
            <Categories/>
            <FeaturedProducts type="featured"/>
            <Contact/>
        </div>
    )
}

export default Home