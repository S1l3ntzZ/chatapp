import Home from "./pages/home/home";
import TopBar from "./Components/topbar/topbar";
import Single from "./Components/singlePost/singlePost";
import Write from "./pages/write/write";
import Settings from "./Components/settings/settings";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/write" element={<Write />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
