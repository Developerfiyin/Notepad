import "./App.css";
import Header from "./Components/header";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Header />} /> {/* Header page*/}
        </Routes>
        <Header />
      </div>
    </>
  );
}

export default App;
