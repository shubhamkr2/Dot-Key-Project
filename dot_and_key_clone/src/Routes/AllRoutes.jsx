import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './Home'
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
import { CartPage } from './CartPage'
import { TrackingPage } from './TrackingPage'
import BestSeller from './BestSeller'


export const AllRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/track" element={<TrackingPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/Signup" element={<SignupPage />}></Route>
        <Route path="/bestseller" element={<BestSeller/>}></Route>
        </Routes>
    </div>
  )
}
