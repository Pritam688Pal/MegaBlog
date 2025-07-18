import {useDispatch} from 'react-redux';
import authService from '../../appWrite/auth.js';
import {logOut} from '../../store/authSlice.js'

function LogoutBtn() {
    const dispatch = useDispatch();
    const handleLogout = async () => {
        try {
            await authService
              .logout()
              .then(() => dispatch(logOut()))
              .catch((err) => alert("Logout failed: " + err));
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return ( 
        <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Log-out</button>
     );
}

export default LogoutBtn;