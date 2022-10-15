import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../Firebase/firebase.init';

const auth = getAuth(app);

const Signup = () => {
    const [passwordError, setPasswordError] = useState('')
    const [success, setSuccess] = useState(false);

    const handleToGetValue = (event) => {
        event.preventDefault();
        setSuccess(false)
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        // validation password 
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setPasswordError('Please provide at least two uppercase');
            return;
        }
        if (password.length < 6) {
            setPasswordError('Password should be at least 6 characters');
            return;
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setPasswordError('Please provide at least one special character');
            return;
        }

        // create new user 
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setSuccess(true);
                form.reset();
                console.log(user);
            })
            .catch(error => {
                console.error('Error', error);
                setPasswordError(error.message);
            })
    }

    return (
        <div className='container mx-auto my-10 shadow-lg px-5 w-2/6 py-5 shadow-slate-900'>
            <div className='mt-5 mb-5'>
                <h3 className='text-2xl font-bold text-blue-500'>Please Signup</h3>
                <form onSubmit={handleToGetValue} className='mt-5'>
                    <p>Name</p>
                    <input className='border-2 py-1 w-96 mt-2 pl-2' type="text" name="name" id="username" placeholder='Enter name' required />
                    <br />
                    <p className='mt-2'>Email</p>
                    <input className='border-2 py-1 w-96 mt-2 pl-2' type="email" name="email" id="useremail" placeholder='Enter Email' required />
                    <p className='mt-2'>Password</p>
                    <input className='border-2 py-1 w-96 mt-2 pl-2' type="password" name="password" id="userpassword" placeholder='Enter password' required />
                    <br />
                    <p className='text-red-500'>{passwordError}</p>
                    {
                        success && <p className='text-green-400 mt-1'>Successfully Signup</p>
                    }
                    <button className='mt-5 bg-blue-500 py-2 px-3 text-white rounded-md hover:bg-blue-700' type="submit">Signup</button>
                </form>

            </div>
        </div>
    );
};

export default Signup;