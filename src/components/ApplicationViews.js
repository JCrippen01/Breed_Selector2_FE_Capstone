import React from "react"
import { Route } from "react-router-dom"
import { BreedApp } from "./BreedApp"
//import { Users } from "./customers/UserList"




export const ApplicationViews = () => {
    return (       <>
                  
            <Route exact path="/breeds">
                <BreedApp />
            </Route>
            </>
    )
}