import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AdminPlanner from "./Components/AdminPlanner";
import PPSAM from "./Components/PPSAM";
import CommonNavBar from "./Components/CommonNavBar";
import Footer from "./Components/Footer";
import LandingPage from './Components/LandingPage';
import Login from "./Components/Login";
import MainNavBar from "./Components/MainNavBar";
import PasswordRest from "./Components/PasswordRest";
import PlannerDashboard from './Components/PlannerDashboard';
import Register from "./Components/Register";
import Owner from './Components/Owner'
import SamGeneration from "./Components/SamGeneration";
export default function Routes() {
  return (
      <div>
          <Router>
          <Switch>
          <Route exact  path="/about" >
          </Route>
           <Route exact path="/app.knitwear">
            <PlannerDashboard/>
           </Route>
            <Route exact path="/">
            <MainNavBar/>          
            <LandingPage/>
            </Route>
            <Route exact path='/login'>
            <CommonNavBar/>        
            <Login />  
            
            </Route>  
          <Route exact path='/register' >
           <CommonNavBar/> 
            <Register />   
            
          </Route>  
          <Route exact path='/admin'>
            <AdminPlanner/>
           </Route>
            <Route exact path='/reset'  >
            <CommonNavBar/> 
            <PasswordRest /> 
           
          </Route> 
          <Route exact path='/owner'>
            <Owner/>
          </Route>
          <Route exact path='/sam'>
            <PPSAM/>
           </Route>
            </Switch>
           </Router>
    </div>
  )
}
