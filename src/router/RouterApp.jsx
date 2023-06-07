import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Toolbar } from "@mui/material"
import { Header } from "../components"
import { Detail, Home } from "../pages"

export const RouterApp = () => {
  return (
    <BrowserRouter>

        <Header/>

        <Toolbar/>

        <Routes>
            <Route path="home" element={<Home/>}/>
            <Route path="coin/:id" element={<Detail/>}/>

            <Route path="/*" element={<Navigate to='home' />}/>
        </Routes>

    </BrowserRouter>
  )
}
