import "./App.css";
import Header from "./Components/header";
import Account from "./Components/Account";
import Dashboard from "./Components/Dashboard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Header />} /> {/* Header page*/}
          <Route path="/account" element={<Account />} /> {/* Login page*/}
          <Route path="/dashbord" element={<Dashboard />} /> {/* Login page*/}
        </Routes>
        <Header />
      </div>
    </>
  );
}

export default App;
