import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Product from "./Product";
import Login from "./Login";
import "./Home.css";

function App(){
    return(
        <>
          <Router> 
            <Header />

            <Routes>
              <Route path="header" element={<Header />} />
              <Route path="/" element={<Home />} />
              <Route path="product" element={<Product />} />
              <Route path="login" element={<Login />} />
            </Routes>
          </Router>
        </>

    );
}


export default App;
