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


import {
  increaseCounter,
  decreaseCounter,
} from "./redux/actions/actions"
import { useSelector, useDispatch } from "react-redux";

function App() {

  const dispatch = useDispatch();
const newCount = useSelector(
(state) => {
 return  state.counter.count
} 
);
const handleIncrease = () => {
  // props.increaseCounter()
  dispatch(increaseCounter())
}


  return (
    <div>
{/* <div>Count: {newCount}</div>

<button onClick={() => handleIncrease()}>Increase Count</button>

<button onClick={() => dispatch(decreaseCounter())}>Decrease Count</button> */}


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
    </div>
  );
}


// const mapStateToProps = state => {
//   return {
//     count: state.counter.count,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)



export default App;






