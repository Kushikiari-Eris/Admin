import React, {useState, useEffect} from 'react'
import background4 from '../assets/image/background4.jpg'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


const Login = () => {
  
  const [users, setUser] = useState([]);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  
 
  const handleLogin = async(e) =>{
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:3000/login', { name, password});
        const token = response.data.token;
        alert('Login Successfully');
        setName('');
        setPassword('');
        localStorage.setItem('token', token);
        navigate('/admin');
    } catch (error) {
        console.log('Failed to Login');
        alert('Login failed. Please check your credentials.');
    }
  }
  
    return (
    <>
    <div className="relative h-screen">
        <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: `url(${background4})`, // Add your image URL here
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh', // Ensure the background covers the entire screen
            filter:'blur(1px)'
        }}></div>
        <div className='relative z-10 flex justify-center items-center h-full'>
            <div className="w-full max-w-sm p-4 bg-white  rounded-lg shadow sm:p-6 md:p-8  border border-green-600 ">
                <form className="space-y-6"  onSubmit={handleLogin}>
                    <h3 className="text-2xl font-medium text-gray-900 dark:text-white flex justify-center">Sign In</h3>
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                        <input type="text" name="name"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label htmlFor="remember" className="ms-2 text-sm font-medium text-blue-700 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                    <button type="submit" className="w-full text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="/register" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                    </div>
                </form>
            </div>
        </div>
        </div>
    </>
   
  
  )
  
}


export default Login