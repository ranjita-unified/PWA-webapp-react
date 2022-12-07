import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Link,useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import Alert from "react-bootstrap/Alert";

import { TextField,EmailField,PasswordField,Button } from '../FormElements'
import { userActions } from '../../store/actions/userAction';
import { CryptoHandlertoEncrypt, CryptoHandlertoDecrypt } from '../../helper/crypto';

/**
 * Form Component 
 * re-usable compoenent for login and registration
 */
const Form = ({type="",heading="",buttonlabel="",bottomText="",linkText="",linkPage=""}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.usersReducer.user);
    const loginStatus = useSelector(state => state.usersReducer.loginStatus);

    const [messageDetails, checkUserLoggedIn] = useState({});

    const methods = useForm({
        defaultValues: {
          fullName: "",
          email: "",
          password: "",
          confirmpassword: "",
        },
    });

    const onSubmit = data => {
        delete data.confirmpassword;
        delete data.confPassword;
        switch(type) {
            case 'login':
                const decryptedPassword = user.password?CryptoHandlertoDecrypt(user.password,data.password):'';
                if (data.email === user.email && data.password === decryptedPassword && !loginStatus) {
                    dispatch(userActions.login({user:user},true));
                    navigate("/my-account");
                    return false 
                }
                else {
                    checkUserLoggedIn({
                        errorType:'danger',
                        status:true,
                        errorMessage:"Invalid Credentials !!",
                        nextPage:"",
                        nextPageLink:""
                    })
                }
              break;
            case 'registration':
                data.password = CryptoHandlertoEncrypt(data);
                dispatch(userActions.register(data));
                checkUserLoggedIn({
                    errorType:'success',
                    status:true,
                    errorMessage:"Successfully Registered !!",
                })
              break;
            default:
                checkUserLoggedIn({
                    errorType:'',
                    status:false,
                    errorMessage:"",
                })
          }
    }
    
    return(
    <>
    <Alert
        show={messageDetails.status}
        variant={messageDetails.errorType}
        >{messageDetails.errorMessage}
    </Alert>
    <h3>{heading}</h3>
    <FormProvider {...methods} >
        <form onSubmit={methods.handleSubmit(onSubmit)}>
            {type!== 'login' && <TextField label="Name" fieldId="fullName"/>}
            <EmailField label="Email" fieldId="email"/>
            <PasswordField 
                reConfirm={type!== 'login'} 
                fieldId="password" 
                label="Password"
                />
            <Button 
                type="submit" 
                label={buttonlabel}
            />
            <p className="App-link">{bottomText}
            {linkPage && <Link className="App-link" to={'/'+linkPage}>{linkText}</Link>}
            </p>
        </form>
    </FormProvider>
    </>
    )
}

export default Form