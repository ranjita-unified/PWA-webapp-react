import Form from "../../Forms/Form"

/**
 * Login Component 
 * for showing login form
 */
export const Login = () => (<div className="form-body">
<div className="row">
    <div className="form-holder">
        <div className="form-content">
            <div className="form-items">
            <Form 
            type="login"
            heading="Login"
            buttonlabel="Login"
            bottomText="Dont have account ? "
            linkPage="register"
            linkText="Register"
            />
            </div>
        </div>
    </div>
</div>
</div>)
