/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, useNavigate } from 'react-router-dom';

const SideBar = () => {
    const navigate = useNavigate();
    const logout = () => {
        navigate('/login');
    }
    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav d-flex flex-column" id="sidebar-nav">
                <li className="nav-heading">Menu</li>
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/home">
                        <i className="bi bi-house-door-fill" />
                        <span>Home</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/product-management">
                        <i className="bi bi-basket2-fill" />
                        <span>Product Management</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/employees-management">
                        <i className="bi bi-people-fill" />
                        <span>Employee Management</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/admin-accounts">
                        <i className="bi bi-person-circle" />
                        <span>Admin Accounts</span>
                    </Link>
                </li>
                <li className="nav-item mt-auto">
                    <a className="nav-link collapsed" onClick={logout}>
                        <i className="bi bi-box-arrow-in-right" />
                        <span>Sign Out</span>
                    </a>
                </li>
            </ul>
        </aside>

    );
}

export default SideBar;
