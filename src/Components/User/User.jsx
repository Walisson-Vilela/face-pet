import React from "react";
import UserHeader from "./UserHeader";
import { Route, Routes } from "react-router-dom";
import Feed from "../Feed/feed";
import UserPhotoPosts from "./UserPhotoPosts";
import UserStats from "./UserStats";

const User = () => {
  return <section className="container">
    <UserHeader />
    <Routes>
        <Route path="/" element={<Feed/>}/>
        <Route path="postar" element={<UserPhotoPosts/>}/>
        <Route path="estatisticas" element={<UserStats/>}/>
    </Routes>
  </section>;
};

export default User;
