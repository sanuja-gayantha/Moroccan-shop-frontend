import React from "react";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AnchorLink from "react-anchor-link-smooth-scroll";

import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";
import Cart from "../Cart/Cart";
import {useSelector} from "react-redux";
import useAuth from "../../hooks/useAuth";


const Navbar = () => {

    const [open, setOpen] = useState(false);
    const products = useSelector(state => state.cart.products)
    const {auth, setAuth} = useAuth();
    const [show, setShow] = useState(false)

    // const handleHamburger = () => {
    //     setShow(true)
    // }

    const updateSetOpen = () => {
        setOpen(!open)
    }

    return(
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                        <Link className="link" to="/"><img src="../../../img/Moroccan_Logo.png" alt="logo" width="40px" height="50px"></img></Link>       
                        <Link className="link logo_text" to="/">Moroccan</Link>   
                </div>
                <div className="right">
                    <div className="item">
                        <Link className="link" to="/">Home</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/about">About</Link>
                    </div>
                    <div className="item">
                        {/* <KeyboardArrowDownIcon/> */}
                        <Link className="link" to="/products">Our collection</Link>
                    </div>
                    <div className="item">
                        <AnchorLink className="link" href="#help">Help</AnchorLink>
                    </div>
                    <div className="item">
                        <AnchorLink className="link" href="#contact">Contact</AnchorLink>
                    </div>
                    {auth?.accessToken ?
                     (<div className="item">
                        <Link className="link" to="/admin_panal">Dashboard</Link>
                    </div>) : ""}
                    <div className="icons">
                        {/* <SearchIcon/> */}
                        {auth?.accessToken===null ? (<Link className="link" to="/login"><PersonOutlineIcon/></Link>) : <Link className="link" to="/" onClick={() => setAuth({identifier:null, password:null, accessToken:null})}><PowerSettingsNewOutlinedIcon/></Link>}
                        <div className="cartIcon" onClick={() => setOpen(!open)}>
                            <FavoriteBorderIcon className="FavoriteBorderIconClass" />
                            <span>{products.length}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className="wrapper_mobile">
                <div className="left">
                        <MenuOutlinedIcon className="MenuOutlinedIconClass" onClick={() => setShow(!show)}/>
                        <Link className="link" to="/"><img src="../../../img/Moroccan_Logo.png" alt="logo" width="40px" height="50px"></img></Link>       
                        <Link className="link logo_text" to="/">Moroccan</Link>   
                </div>
                <div className="right">
                    {auth?.accessToken ?
                     (<div className="item">
                        <Link className="link" to="/admin_panal">Dashboard</Link>
                    </div>) : ""}
                    <div className="icons">
                        {/* <SearchIcon/> */}
                        {auth?.accessToken===null ? (<Link className="link" to="/login"><PersonOutlineIcon/></Link>) : <Link className="link" to="/" onClick={() => setAuth({identifier:null, password:null, accessToken:null})}><PowerSettingsNewOutlinedIcon/></Link>}
                        <div className="cartIcon" onClick={() => setOpen(!open)}>
                            <FavoriteBorderIcon className="FavoriteBorderIconClass" />
                            <span>{products.length}</span>
                        </div>
                        
                    </div>
                </div>
            </div>

            {show?(<div className="disply_only_mobile">
                        <Link className="link" to="/" onClick={() => setShow(!show)}>Home</Link>
                        <Link className="link" to="/about" onClick={() => setShow(!show)}>About</Link>
                        {/* <KeyboardArrowDownIcon/> */}
                        <Link className="link" to="/products" onClick={() => setShow(!show)}>Our collection</Link>
                        <Link className="link" to="/contact" onClick={() => setShow(!show)}>Help</Link>
                        <Link className="link" to="/contact" onClick={() => setShow(!show)}>Contact</Link>
            </div>):""}

            {open && <Cart updateSetOpen={updateSetOpen}/>}
        </div>
    )
}

export default Navbar