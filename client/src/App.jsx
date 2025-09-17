import React from "react"
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import Layout from "./pages/Layout"
import Dashboard from "./pages/Dashboard"
import WriteArticle from "./pages/WriteArticle"
import BlogTitle from "./pages/BlogTitle"
import GenerateImages from "./pages/GenerateImages"
import RemoveBg from "./pages/RemoveBackgroud"
import RemoveObject from "./pages/RemoveObject"
import ReviewResume from "./pages/ReviewResume"
import Community from "./pages/Community"
import About from "./pages/About"
import Contact from "./pages/Contact"
import { Toaster } from "react-hot-toast"
import PrivacyPolicy from "./pages/PrivacyPocily"

function App() {
  
  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path="/contact-us" element={<Contact/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/ai" element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="/ai/write-article" element={<WriteArticle/>}/>
          <Route path="/ai/blog-titles" element={<BlogTitle/>}/>
          <Route path="/ai/generate-images" element={<GenerateImages/>}/>
          <Route path="/ai/remove-background" element={<RemoveBg/>}/>
          <Route path="/ai/remove-object" element={<RemoveObject/>}/>
          <Route path="/ai/review-resume" element={<ReviewResume/>}/>
          <Route path="/ai/community" element={<Community/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
