import React, {useRef, useState} from "react";
import "./Login.scss";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AlertMsg from "../../components/AlertMsg/AlertMsg";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Login = () => {

    const {setAuth} = useAuth();
    const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.form?.pathname || "/";

    const refUsername = useRef('');
    const refPassword = useRef('');
    const refConfirmPassword = useRef('');
    const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
    // const [success, setSuccess] = useState(false)

    const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

    const showAlert = (show = false, type = '', msg = '') => {
        setAlert({ show, type, msg });
      };

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!refUsername.current.value && !refPassword.current.value && !refConfirmPassword.current.value) {
            showAlert(true, 'error', 'Please fill all fields.');
          }else if(refPassword.current.value!==refConfirmPassword.current.value){
            showAlert(true, 'error', 'Passwords are not matched.');
          }else if(USER_REGEX.test(refUsername.current.value) && PWD_REGEX.test(refPassword.current.value)){
            showAlert(true, 'error', 'Fields have invalid Characters.');
          }else{
            try{
                const identifier = refUsername.current.value;
                const password = refPassword.current.value
                const res = await axios.post(process.env.REACT_APP_API_URL+"/auth/local", 
                    JSON.stringify({identifier, password}),
                    {
                        headers:{'Content-Type':'application/json'},
                        withCredentials:true
                    }
                    )
                    
                const accessToken = res?.data?.jwt;
                
                setAuth({identifier, password, accessToken})
                navigate("/", {replace:true})
                // setSuccess(true)

                showAlert(true, 'success', 'Login successfully.');
                // console.log(res)

            }catch(err){
                // console.log(error)
                if (err.response?.status === 400){
                    showAlert(true, 'error', 'Missing Username or Password');
                }else if (err.response?.status === 401){
                    showAlert(true, 'error', 'Unauthorized');
                }else{
                    showAlert(true, 'error', 'Try again.');
                }
                
            }
          }
    }


    return(
        <div className="login_container">
        <div className="top_box"></div>
        <div className="login">
            <div className="title">
                <LockOpenIcon className="LockOpenIconClass"/>
                <span>LOGIN</span>
            </div>
            <form className="data_container">
                <div className="inputItem">
                    <span>Username</span>
                    <input type="text" name="name" ref={refUsername}/>
                </div>
                <div className="inputItem">
                    <span>Password</span>
                    <input type="email" name="email" ref={refPassword}/>
                </div>
                <div className="inputItem">
                    <span>Confirm password</span>
                    <input type="text" name="tel" ref={refConfirmPassword}/>
                </div>
                <input type="submit" value="Login" className="loginBtn" onClick={handleLogin}/>
                {alert.show && <AlertMsg {...alert} removeAlert={showAlert} />}
            </form>
        </div>              
        </div>
    )
}

export default Login;