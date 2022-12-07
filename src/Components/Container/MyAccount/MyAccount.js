import React,{ useEffect } from "react";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";


/**
 * MyAccount Component 
 * for showing account details after login
 */
export const MyAccount = () => {
    const user = useSelector(state => state.usersReducer.user);
    const navigate = useNavigate();
    useEffect(() => {        
        if(!user.email || user.length === 0) {
            navigate("/login");
        }
    });
    return(
        <div className="form-body">
        <div className="row">
            <div className="form-holder">
                <div className="form-content">
                    <div className="form-items">
                        <h3>Welcome</h3>
                        <p>{user.fullName?user.fullName:''} !! </p>
                        <p className="App-link"><Link className="App-link" to="/logout">Logout</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}