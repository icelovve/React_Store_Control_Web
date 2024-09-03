import React, { useState } from 'react'
import AuthLayout from '../../components/layout/AuthLayout'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';

let user = {
    email: "admin001@gmail.com",
    password: "1234",
    userName: "admin 1"
}

const Forgot = () => {
    const [email,setEmail] = useState('')

    const handleChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (email !== user.email) {
            Swal.fire({
                icon: "error",
                text: "This email was not found",
            });
        }else{
            Swal.fire({
                icon: "success",
                text: "Password reset link sent to your email",
            });
        }
    }
    return (
        <div>
            <AuthLayout title="Forgot Password">
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
                                <form className="form-horizontal" onSubmit={handleSubmit}>
                                    <h6 className="title">Forgot password?</h6>
                                    <p className='note'>Enter your email to reset your password</p>
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
                                            onChange={handleChangeEmail}
                                        />
                                    </div>
                                    <button className="btn signin">Submit</button>
                                    <span className="forgot-pass">
                                        <Link to="/">Login</Link>
                                    </span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
        </div>
    )
}

export default Forgot