import { useState } from "react";

import "./App.css";
import TestBox from "./components/test_comp/TestBox";
import TestResult from "./components/result_comp/TestResult";

function App() {
  return (
    <>
      Ram ram ji - TypeChamp
      <TestBox />
      <TestResult />
    </>
  );
}

export default App;
