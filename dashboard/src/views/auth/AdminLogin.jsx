import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adminLogin, messageClear } from '../../store/reducres/authReducer';
import {PropagateLoader} from 'react-spinners';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const {loader, errorMessage, successMessage} = useSelector((state) => state.auth)

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })
    
    const handleInput = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }

    const handeSubmit = (e) => {
        e.preventDefault();
        dispatch(adminLogin(loginData))
    }

    const overrideStyle = {
        display: 'flex',
        margin: '0 auto',
        height: '24px',
        justifyContent: 'center',
        alignItem: 'center'
    }

    useEffect(() => {
        if(errorMessage){
            toast.error(errorMessage);
            dispatch(messageClear());
        }
        if(successMessage){
            toast.success(successMessage);
            dispatch(messageClear())
            navigate('/')
        }
    }, [errorMessage, successMessage])

    return (
        <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
            <div className='w-[350px] text-[#fff] p-2'>
                <div className='bg-[#6f68d1] p-4 rounded-md'>
                    <div className='h-[70px] flex justify-center items-center'>
                        <div className='w-[180px] h-[50px]'>
                            <img className='w-full h-full' src="http://localhost:5173/images/logo.png" alt="image" />
                        </div>
                    </div>
                    <form onSubmit={handeSubmit}>
                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor="email">Email</label>
                            <input className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md' 
                            type="text" name='email' placeholder='Email' id='email' required onChange={handleInput} value={loginData.email}/>
                        </div>

                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor="password">Password</label>
                            <input className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md' 
                            type="password" name='password' placeholder='Password' id='password' required onChange={handleInput} value={loginData.password}/>
                        </div>

                        <button disabled={loader ? true : false} className='bg-slate-800 w-full hover:shadow-blue-300 hover:shadow-lg 
                        text-white rounded-md px-7 py-2 mb-3'>
                            {
                                loader ? <PropagateLoader color='#fff' cssOverride={overrideStyle}/> : 'Login'
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;