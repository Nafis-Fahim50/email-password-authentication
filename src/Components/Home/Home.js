import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container mx-auto mt-5'>
            <h1 className='text-purple-600 text-3xl font-bold text-center'>Welcome to Simple Email Authentication</h1>
            <p className='md: text-center mt-5'>Here we are try to create a simple Email-Password Authenticaton system using google Firebase.
                <br></br>From here we are learn about <span className='text-red-500 font-bold'>Google Firebase </span>Authentication system.
                Such as Email, Google, Facebook, GitHub and so many popular company. <br>
                </br> Here we are try to show save user inforamation, delete form firebase, varification and reset. </p>
            <div className='mt-10'>
                <p className='text-2xl text-rose-500 font-bold mb-5'>Our Features</p>
                <div className='text-blue-600 font-medium'>
                    <li>Different kind of social media login system</li>
                    <li>Email & Password Authentication</li>
                    <li>Varification Email</li>
                    <li>Reset Password</li>
                    <li>Create User</li>
                    <li>Make Form</li>
                </div>
            </div>

            <div className='mt-10 text-medium flex'>
                <p className='mr-2'>To signup our website just click on <Link className='text-blue-500 font-bold' to='signup'>Register.</Link></p>
                <p>Already have an account then click on <Link className='text-green-500 font-bold'  to='login'>Login</Link></p>
            </div>

        </div>
    );
};

export default Home;