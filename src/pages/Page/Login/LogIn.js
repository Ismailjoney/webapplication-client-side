import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/ContextProvider';

const LogIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { singin, loginProvider } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const googleProvider = new GoogleAuthProvider()

    const navigate = useNavigate()
    const location = useLocation();
  

    const from = location.state?.from?.pathname || '/';


    const handdleLogin = data => {
        setLoginError('')
        singin(data.email, data.password)
            .then(res => {
                const user = res.user;
                  console.log(user)
                  navigate(from, {replace: true});
            })
            .catch(error => {
                setLoginError(error.message)
            })
    }


    //google log in
    const googleSingIn = () => {
        loginProvider(googleProvider)
            .then(res => {
                const user = res.user;
                saveUserInfoInDataBase(user.displayName, user.email,)
            })
            .catch(error => {
                console.error(error);

            })
    }

    //save users account info in my database
    const saveUserInfoInDataBase = (name, email) => {
        const user = { name, email }

        fetch(`http://localhost:5000/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    
                    // navigate('/')
                }

            })
    }





    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handdleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Entered value does not match email format"
                                }
                            })}

                            className="input input-bordered w-full max-w-xs" ></input>
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password required",
                                minLength: {
                                    value: 6,
                                    message: "password must be minmum length is 6"
                                }
                            })}
                            className="input input-bordered w-full max-w-xs" ></input>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <div>
                            {
                                loginError && <p className='text-red-600'>{loginError}</p>
                            }
                        </div>
                        <label className="label"> <span className="label-text">Forget password</span></label>
                    </div>
                    <input className='btn btn-primary w-full' value="Login" type="submit" />

                </form>

                <p>New to our website please <Link className='text-secondary' to="/reg">Create Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={googleSingIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default LogIn;