import React from "react";
import "./Footer.scss";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BusinessIcon from '@mui/icons-material/Business';
import { Link } from "react-router-dom";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const Footer = () => {
    let getYear = ()=> {
        return new Date().getFullYear();
    }

    return(
        <div className="footer_container" id="contact">
        <div className="footer">
            <div className="top">

                <div className="item">
                <h1>Links</h1>
                    <div className="h1rule">
                        <div className="rule"></div>
                    </div>
                    
                    <div className="icon_container">
                    <Link className="link" to="/checkout_favourites">      
                        <div className="sub_item">
                            <span><FavoriteBorderIcon/></span>
                            <span>Favourites</span>
                        </div>
                    </Link>
                    <Link className="link" to="/">      
                        <div className="sub_item">
                            <span><HomeOutlinedIcon/></span>
                            <span>Home</span>
                        </div>
                    </Link>
                    <Link className="link" to="/">      
                        <div className="sub_item">
                            <span><BusinessIcon/></span>
                            <span>Who Are We</span>
                        </div>
                    </Link>
                    <Link className="link" to="/#help">      
                        <div className="sub_item">
                            <span><HelpOutlineOutlinedIcon/></span>
                            <span>Help</span>
                        </div>
                    </Link>
                    </div>


                </div>
                
                <div className="item">
                <h1>Contact us</h1>
                <div className="h1rule">
                    <div className="rule"></div>
                    </div>

                    <div className="sub_item">
                        <div className="title">
                        <span><PhoneOutlinedIcon/></span>
                            <span>Phone</span>
                        </div> 
                    </div>
                    <div className="phone_details">
                            
                            <a className="link" href="tel: +31648976894">
                            <span>+31648976894</span>
                            </a>
                            |
                            <a className="link" href="tel: +31648976894">
                            <span>+31648976894</span>
                            </a>
                        </div>

                    <div className="sub_item">
                        <div className="title">
                        <span><EmailOutlinedIcon/></span>
                        <span>Email</span>
                        </div> 
                    </div>
                    <div className="email_details">
                    <a className="link" href="mailto:info@moroccan-rugs-poufs.com">
                        <span>info@moroccan-rugs-poufs.com</span>
                    </a>
                    </div>
                
                </div>

                <div className="item">
                <h1>Follow us</h1>
                <div className="h1rule">
                    <div className="rule"></div>
                    </div>
                    <div className="social_icons">
                        <a href="https://www.instagram.com/moroccan_rugs_poufs/" className="instagram" target="_blank" rel="noreferrer"><InstagramIcon/></a>
                        {/* <a href="#" className="facebook" target="_blank" rel="noreferrer"><FacebookOutlinedIcon/></a> */}
                        <a href="https://youtube.com/channel/UCVEgfok6YFg1aXEdohwuIjQ" className="youtube" target="_blank" rel="noreferrer"><YouTubeIcon/></a>
                    </div>
                    <div className="sub_item">
                        <img src="../../../img/Moroccan_Logo.png" alt="logo" width="60px" height="70px"></img>
                    </div>
                </div>


                <div className="item">
                <h1>About us</h1>
                <div className="h1rule">
                <div className="rule"></div>
                </div>
                <div className="text">
                <span>Our Moroccan carpet poufs are shipped worldwide and we only sell unique, handmade items with fair prices! We sell new and vintage items.</span>
                </div>

                </div>
                

            </div>
            <div className="bottem">
                <div className="right">
                    <img src="../../../img/payment.png" alt="payment logo" />
                </div>
                <div className="left">
                    <span className="copyright">Copyright &copy; {getYear()} Moroccan. All Rights Reserved</span>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer