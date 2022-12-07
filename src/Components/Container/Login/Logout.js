import { useSelector,useDispatch } from 'react-redux';
import { Navigate } from "react-router-dom";
import { userActions } from '../../../store/actions';

/**
 * Logout Component 
 * for logout functionality
 */
export const Logout = () => {
    const user = useSelector(state => state.usersReducer.user);
    const dispatch = useDispatch();
    dispatch(userActions.login({user:user},false));
    return <Navigate to="/login" />    
}