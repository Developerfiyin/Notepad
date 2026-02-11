import "./App.css";
import Header from "./Components/header";
import Account from "./Components/Account";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Header />} /> {/* Header page*/}
          <Route path="/header" element={<Account/>} /> {/* Login page*/}
        </Routes>
        <Header />
      </div>
    </>
  );
}

export default App;
