import { Button } from "@/components/ui/button"
import { HStack } from "@chakra-ui/react"
import Header from "./pages/Header"
import Footer from "./pages/Footer"
import Login from "./pages/Login"

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Donation from "./pages/Donation";
import Success from "./pages/Success";

const App = () => {
  return (
   
<>
   {/* <Header/>  */}
   <Router>
      <Routes>
        {/* Route for the Donation page */}
        <Route path="/" element={<Donation />} />

        {/* Route for the Success page */}
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>

    {/* <Footer/> */}
    

   </>
  );
};

export default App;


