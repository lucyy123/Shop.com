import { Routes,Route } from "react-router-dom";
import Exclusive from "./Menu/Exclusive";
import Navbar from "./Navbar";
import Home from "./Home";
import LoginPage from "./LoginPage";
import CreateAccount from "./CreateAccount";
// import Categories from "./Sidebars/Categories";
import React from 'react'

export default function Menubar() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home></Home>}></Route>
        <Route path={"/exclusive"} element={<Exclusive></Exclusive>}></Route>
        <Route path={"/loginpage"} element={<LoginPage></LoginPage>}></Route>
        <Route path={"/createpage"} element={<CreateAccount></CreateAccount>}></Route>
      </Routes>
    </div>
  )
}

