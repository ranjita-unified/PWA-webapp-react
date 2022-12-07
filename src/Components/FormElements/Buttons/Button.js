import React from "react";

/**
 * Button Component 
 * re-usable compoenent to show button
 */
const Button = ({type,label}) => (
    <div className="form-button mt-3">
        <button id={type} type={type} className="btn btn-default">{label}</button>
    </div>
)

export default Button