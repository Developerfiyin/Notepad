import "./App.css";
import Account from "./Components/Account";
import Dashboard from "./Components/dashboard";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> {/* HOME PAGE*/}
          <Route path="/account" element={<Account />} /> {/* Login page*/}
          <Route path="/dashbord" element={<Dashboard />} />{" "}
          {/* Dashboard page*/}
        </Routes>
      </div>
    </>
  );
}

export default App;
