import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import Swal from "sweetalert2"; 
import AuthLayout from "../../components/layout/AuthLayout";
import "./main.css";

let user = {
    email: "admin001@gmail.com",
    password: "1234",
    userName: "admin01"
}

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();  

    const handleLogin = (event) => {
        event.preventDefault();
        if (email === user.email && password === user.password) {
            Swal.fire({
                icon: "success",
                text: `Welcome ${user.userName}`,
                showConfirmButton: false,
                timer: 1500
            }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    navigate('/home');
                }
            });

        } else if(password !== user.password) {
            Swal.fire({
                icon: "error",
                text: "You have entered an incorrect password!",
            });
        }else if(email !== user.email){
            Swal.fire({
                icon: "error",
                text: "The email address you entered was not found!",
            });
        }
    };

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    return (
        <AuthLayout title="Login">
            <div className="form-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-8">
                            <div className="form-container">
                                <div className="form-icon">
                                    <i className="fa fa-user-circle" />
                                    <span className="signup">
                                        <Link to="/Create_Account">Don't have an account? Singup</Link>
                                    </span>
                                </div>
                                <form className="form-horizontal" onSubmit={handleLogin}>
                                    <h3 className="title">Login</h3>
                                    <div className="form-group">
                                        <span className="input-icon">
                                            <i className="fa fa-envelope" />
                                        </span>
                                        <input
                                            className="form-control"
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Email Address"
                                            onChange={handleEmail}
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
                                            onChange={handlePassword}
                                        />
                                    </div>
                                    <button className="btn signin">Login</button>
                                    <span className="forgot-pass">
                                        <Link to="/forgot">Forgot Password?</Link>
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

export default Login;
