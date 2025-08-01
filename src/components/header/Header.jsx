import { Container, Logo } from "../index.js";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LogoutBtn from './LogoutBtn.jsx';


function Header() {
    const authStatus = useSelector(state => state.status);
    const navigate = useNavigate();

    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ];

    return (
        <header>
            <Container>
                <nav className="flex">
                    <div className="mr-4">
                        <Link to="/">
                            <Logo width="70px" />
                        </Link>
                    </div>
                    <ul className="flex ml-auto">
                        {navItems.map(
                            (item) =>
                                item.active && (
                                    <li key={item.name} className="mr-4">
                                        <button onClick={() => navigate(item.slug)}
                                            className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
                                            {item.name}
                                        </button>
                                    </li>
                                )
                        )}
                        {
                            authStatus && (
                                <LogoutBtn />
                            )
                        }
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

export default Header;