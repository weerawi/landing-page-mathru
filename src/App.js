import {  Route, Routes, useLocation } from 'react-router-dom';
import Layout from "./Layout/Layout";
import Home from "./Pages/Home"; 
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
 

function App() {
  
 //crolling to the top of the page every time a navigation occurs.
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  //AOS initializing
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <Layout>  

        <Routes>
          <Route path="/" element={<Home />} />  
        </Routes>
    </Layout>
    
  );
}

export default App;
