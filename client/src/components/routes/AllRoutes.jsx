import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TestBox from "../test_comp/TestBox";
import Navbar from "../partials/NavBar";
import TestResult from "../result_comp/TestResult";

const AllRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/test" element={<TestBox />} />
        <Route path="/result" element={<TestResult />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
