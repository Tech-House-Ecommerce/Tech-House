import React, { useState, createContext } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useFetch from './CustomHooks/UseFetch';
import Footer from './Components/Website/Footer'
import Header from './Components/Website/Header'
import Home from './Components/Website/Home'
import AboutUs from './Components/Website/AboutUs'
import ContactUs from './Components/Website/ContactUs'
import Cart from './Components/Website/Cart'
import Confirmation from './Components/Website/Confirmation'
import Products from './Components/Website/Products'
import LogIn from './Components/Users/LogIn'
import SignUp from './Components/Users/SignUp'
import ForgotPassword from './Components/Users/ForgotPassword'
import ConfirmPassword from './Components/Users/ConfirmPassword'

export const ProductsData = createContext();

function App() {
  const url = 'https://dummyjson.com/products';
  const { data, loading, error } = useFetch(url);
  
  // Create a loader 

  return (
    <BrowserRouter>
      <ProductsData.Provider value={data}>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/confirmPassword" element={<ConfirmPassword />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </ProductsData.Provider>
    </BrowserRouter>
  );
}

export default App;


