import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";
import Questions from "./Pages/Questions/Questions";
import AskQuestion from "./Pages/AskQuestion/AskQuestion";
import DisplayQuestion from "./Pages/Questions/DisplayQuestion";
import Tags from "./Pages/Tags/Tags";
import Users from "./Pages/Users/Users";
import UserProfile from "./Pages/UserProfile/UserProfile";
import CommunityHome from "./Pages/Community/CommunityHome";
import PostPage from "./Pages/PostPage/PostPage";
import Otp from "./Pages/Otp/Otp";
import Premium from "./Pages/Premium/Premium";
import Plans from './Pages/Plans/Plans'
import StripeForm from './Pages/Payment/StripeForm'
import About from './components/About/About'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Auth" element={<Auth />} />
      <Route path="/AskQuestion" element={<AskQuestion />} />
      <Route path="/Questions" element={<Questions />} />
      <Route path="/Questions/:id" element={<DisplayQuestion />} />
      <Route path="/Tags" element={<Tags />} />
      <Route path="/Users" element={<Users />} />
      <Route path="/Otp" element={<Otp />} />
      <Route path="/Users/:id" element={<UserProfile />} />
      <Route path="/stackoverflow-community/post/:id" element={<PostPage />} />
      <Route path="/stackoverflow-community" element={<CommunityHome />} />
      {/* <Route path="/Premium" element={<Premium />} /> */}
      <Route path='/Plans' element={< Premium />}/>
      <Route path='/Payment' element={< StripeForm />}/>
      <Route path='/About' element={< About />}/>
      

    </Routes>
  );
};

export default AllRoutes;
