import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <>
    <Header/>
    <div className="row">
      <div className="col-xl-1 col-lg-2 col-sm-2 col-12" style={{backgroundColor: '#e3e3e3'}}>
        <Sidebar/>
      </div>
      <div className="col-xl-11 col-lg-10 col-sm-10 col-12">
        <AppRouter/>
      </div>
    </div>
    </>
  )
}

export default App;
