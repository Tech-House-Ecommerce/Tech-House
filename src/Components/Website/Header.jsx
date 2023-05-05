import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav>
    <ul className="flex justify-between">
       <li>
          <Link to="/" className='text-red-500'>Home</Link>
       </li>
       <li>
          <Link to="/logIn" className='text-red-500'>LogIn</Link>
       </li>
       <li>
          <Link to="/signUp" className='text-red-500'>SignUp</Link>
       </li>
       <li>
          <Link to="forgotPassword" className='text-red-500'>ForgotPassword</Link>
       </li>
       <li>
          <Link to="/confirmPassword" className='text-red-500'>ConfirmPassword</Link>
       </li>
       <li>
          <Link to="/aboutUs" className='text-red-500'>AboutUs</Link>
       </li>
       <li>
          <Link to="contactUs" className='text-red-500'>ContactUs</Link>
       </li>
       <li>
          <Link to="/cart" className='text-red-500'>Cart</Link>
       </li>
       <li>
          <Link to="/confirmation" className='text-red-500'>Confirmation</Link>
       </li>
       <li>
          <Link to="/product" className='text-red-500'>Product</Link>
       </li>
    </ul>
</nav>
  )
}
