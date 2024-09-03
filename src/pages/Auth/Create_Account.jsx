import { useState } from "react";
import AuthLayout from "../../components/layout/AuthLayout";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

let user = {
    email: "admin001@gmail.com",
    password: "1234",
    userName: "admin 1"
}

const CreateAccount = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!userName || !email || !password || !confirmPassword) {
            Swal.fire({
                icon: "error",
            });
        } else if (email === user.email) {
            Swal.fire({
                icon: "error",
                text: "This email address has already been used",
            });
        } else if (password !== confirmPassword) {
            Swal.fire({
                icon: "error",
                text: "Passwords don't match",
            });
        } else {
            Swal.fire({
                icon: "success",
                text: "Account created successfully",
            });
        }
    }

    return (
        <AuthLayout title="Create Account">
            <div className="form-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="form-container">
                                <div className="form-icon">
                                    <i className="fa fa-user-circle" />
                                </div>
                                <form className="form-horizontal" onSubmit={handleSubmit}>
                                    <h3 className="title">Create Account</h3>
                                    <div className="form-group">
                                        <span className="input-icon">
                                            <i className="bi bi-person-circle" />
                                        </span>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="username"
                                            name="username"
                                            placeholder="Create name"
                                            onChange={(event) => setUserName(event.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <span className="input-icon">
                                            <i className="fa fa-envelope" />
                                        </span>
                                        <input
                                            className="form-control"
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Enter Email"
                                            onChange={(event) => setEmail(event.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <span className="input-icon">
                                            <i className="fa fa-lock" />
                                        </span>
                                        <input
                                            className="form-control"
                                            type="password"
                                            id="password"
                                            name="password"
                                            placeholder="Password"
                                            onChange={(event) => setPassword(event.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <span className="input-icon">
                                            <i className="fa fa-lock" />
                                        </span>
                                        <input
                                            className="form-control"
                                            type="password"
                                            id="confirm-password"
                                            name="confirm-password"
                                            placeholder="Confirm Password"
                                            onChange={(event) => setConfirmPassword(event.target.value)}
                                        />
                                    </div>
                                    <button className="btn signin">Create</button>
                                    <span className="forgot-pass">
                                        <Link to="/login">Login</Link>
                                    </span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
};

export default CreateAccount;
