import { useState } from "react";

import "./App.css";
import TestBox from "./components/test_comp/TestBox";
import TestResult from "./components/result_comp/TestResult";
import Navbar from "./components/partials/NavBar";

function App() {
  return (
    <>
      <Navbar />
      <TestBox />
      <TestResult />
    </>
  );
}

export default App;
