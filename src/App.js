import React from "react";

import {Route, Routes} from "react-router-dom";
const Home = React.lazy(()=> import("./routes/Home/Home"))
const About = React.lazy(()=> import("./routes/About/about"))
const Services = React.lazy(()=> import("./routes/Services/service"))
function App() {
  return (
    <Routes>
        <Route path={"/"} element={
            <React.Suspense fallback={"loading..."}>
                <Home/>
            </React.Suspense>
        }/>
        <Route path={"about"} element={
            <React.Suspense fallback={"please..."}>
                <About/>
            </React.Suspense>
        }/>
        <Route path={"service"} element={
            <React.Suspense fallback={"services..."}>
                <Services/>
            </React.Suspense>
        }/>
        <Route path={"contact"} element={
            <React.Suspense fallback={"contact..."}>
                <Home/>
            </React.Suspense>}/>
    </Routes>
  );
}

export default App;
