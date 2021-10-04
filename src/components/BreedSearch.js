import React, { useEffect, useState } from "react";
import Select from "react-select";
import "./BreedSearch.css";

export function BreedSearch({ breedFilter, setSearchState, searchState }) {
  const [breeds, setBreeds] = useState([]);
  // const [chosenBreed, setchosenBreed] = useState();
  const [dogBreeds, setDogBreeds] = useState([]);

  useEffect(() => {
    setDogBreeds(breedFilter);
    let array = [];
    for (const dog of breedFilter) {
      array.push({ label: dog.breed, value: dog.breed });
    }
    setBreeds(array);
    // console.log(array);
  }, [breedFilter]);

  return (
    <>
    <div className ="dropdown-search-breed">
      <Select
        onChange={(e) => {
          const copy = { ...searchState };
                  copy.active = true;
                  copy.breed = (e.value);
                  setSearchState(copy);
                
         }}
        options={breeds}
        placeholder="Search for Breed"
      />
      </div>
    </>
  );
}
