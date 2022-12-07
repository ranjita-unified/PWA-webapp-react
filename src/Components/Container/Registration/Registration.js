import Form from "../../Forms/Form"

/**
 * Registration Component 
 * for showing registration form
 */
export const Registration = () => (
    <div className="form-body">
    <div className="row">
        <div className="form-holder">
            <div className="form-content">
                <div className="form-items">
                <Form 
                type="registration"
                heading="Register Today"
                buttonlabel="Register"
                bottomText="Already have account? "
                linkPage="login"
                linkText="Login"
                />
                </div>
            </div>
        </div>
    </div>
</div>
)
