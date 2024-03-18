import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Dashboard from "./pages/DashBoard";
import Signin from "./pages/Signin";
import Signup from "./pages/SignUp";
import Table from "./pages/Table";
import Billing from "./pages/Billing";
// import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router basename="/">
        <Routes>
          <Route
            path="/"
            element={ <Home />}
          />
          <Route
            path="/contact"
            element={ <Contact />}
          />
          <Route
            path="/profile"
            element={ <Profile />}
          />
          <Route
            path="/dashboard"
            element={ <Dashboard />}
          />
          <Route
            path="/signin"
            element={ <Signin />}
          />
          <Route
            path="/signup"
            element={ <Signup />}
          />
          <Route
            path="/Table"
            element={ <Table />}
          />
          <Route
            path="/Billing"
            element={ <Billing />}
          />
    
{/*  
          <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
