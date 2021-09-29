import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./BreedApp.css";
import { BreedFilter } from "./BreedFilter";
import { BreedSearch } from "./BreedSearch";

export const BreedApp = () => (
    <>
      <Route
        render={() => {
          if (localStorage.getItem("selector_users")) {
            return (
              <>
                <BreedSearch />
                <BreedFilter /> 
                           
                
               
                
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
  
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </>
  );
  