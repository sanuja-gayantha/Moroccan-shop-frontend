import React, {useState} from "react";
import "./AdminPanal.scss";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavouriteOrders from "../../components/FavouriteOrders/FavouriteOrders"


const AdminPanal = () => {

    const [id, setId] = useState(<FavouriteOrders/>);


    return(       
        <div className="admin_panal">
            <div className="left">
                <div className="titles">
                    <h2>Dashboard</h2>
                    <div className="item_cards" onClick={() => setId(<FavouriteOrders/>)}>
                        <span><FavoriteBorderIcon/>Favourite Orders</span>
                    </div>
                    <div className="item_cards" onClick={() => setId("")}>
                        <span><SettingsOutlinedIcon/>Settings</span>
                    </div>
                </div>
            </div>
            <div className="right">
                {id}
            </div>
        </div>       
    )
}

export default AdminPanal;