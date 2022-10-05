import React from "react";

import {Route, Routes} from "react-router-dom";
import Contact from "./routes/Contact/contact";
import Loader from "./components/loader/loader";

const Home = React.lazy(()=> import("./routes/Home/Home"))
const About = React.lazy(()=> import("./routes/About/about"))
const Services = React.lazy(()=> import("./routes/Services/service"))
function App() {
  return (
    <Routes>
        <Route path={"/"} element={
            <React.Suspense fallback={<Loader/>}>
                <Home/>
            </React.Suspense>
        }/>
        <Route path={"/about"} element={
            <React.Suspense fallback={<Loader/>}>
                <About/>
            </React.Suspense>
        }/>
        <Route path={"/service"} element={
            <React.Suspense fallback={<Loader/>}>
                <Services/>
            </React.Suspense>
        }/>
        <Route path={"/contact"} element={
            <React.Suspense fallback={<Loader/>}>
                <Contact/>
            </React.Suspense>}/>
    </Routes>
  );
}

export default App;
