/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider"



const Login = () => {
    const {signIn,googleLogin}= useContext(AuthContext)
    const navigate =useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signIn(email,password)
        .then(result =>{
            console.log(result.user);
            e.target.reset()
            navigate('/')
        })
        .catch(error => console.error(error))
    }

    const handleGoogleLogin =()=>{
        googleLogin()
        .then(result =>{
            console.log(result.user);
        })
        .catch(error=> console.log(error))

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-3">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="px-4 mb-2">
                    <p>New? don't any account? Please <Link to='/register'><button className="btn btn-link">Register</button></Link></p>
                    </div>
                    <div>
                        <button onClick={handleGoogleLogin} className="btn btn-ghost">Sign In WitH Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;