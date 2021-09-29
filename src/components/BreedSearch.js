import React, { useEffect, useState } from "react";
import Select from 'react-select';
import "./BreedSearch.css"



export function BreedSearch({breedFilter}) {
    const [breeds, setBreeds] = useState([]);
    const [chosenBreed, setchosenBreed] = useState();
    const [dogBreeds, setDogBreeds] = useState([]);  
 

 useEffect(() => {
   setDogBreeds(breedFilter)
   let array = [] 
        for(const dog of breedFilter) {
            array.push({label: dog.breed, value: dog.breed})
        }
    setBreeds(array)
    console.log(array)
  
},[breedFilter] )


// console.log(chosenBreed)
    return (      
        <>
        <div className="dropdown-search-breeds">
      <Select
        options={breeds}
        onChange= {(something) => {
            breeds.map((breed)=> {
             const foundDog = dogBreeds.find(dog => dog.id === something.value)
                setchosenBreed(foundDog)
                console.log(chosenBreed)
            })
                  
        }}
        placeholder= "Search for Breed"
        />
         </div>
        < div className= "chosenBreed">
            <p>{chosenBreed?.description}</p>
        
        
      
        
    
        </div>
        </>
  );

}
