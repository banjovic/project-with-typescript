import React from "react";
// import { Router } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import "./App.css";
import BlogPost from "./pages/blogPost/BlogPost";
import LandingPage from "./pages/landingPage/LandingPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<LandingPage children />} />
        <Route path="/blog" element={<BlogPost />} />
      </Switch>
    </Router>
  );
}

export default App;
