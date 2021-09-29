import React,{ useState, useEffect} from "react";
import { GetAllBreeds } from "./ApiManager"
import "./BreedResultList.css";
import { BreedFilter } from "./BreedFilter";





export function BreedResultList(breedCopy) {
    const resultsList = breedCopy.breed
    
    const listItems = BreedResultList.map((resultList) =>

        <li>{resultList}</li>
    );
    useEffect(() => {
        BreedFilter()
          .then(breeds => {
              setBreeds(breeds)
              
          })
          }, [])
    return (
        <ul>{listItems}</ul>
    );
    
}   