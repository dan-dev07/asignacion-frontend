import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { consLogged } from '../const/consLogged';

export const PrivateRoute = ({ children }) => {
    const { logged } = useSelector((state) => state.userReducer);
    
    return (logged === consLogged.LOGGED)
        ? children
        : <Navigate to="/login" />
}