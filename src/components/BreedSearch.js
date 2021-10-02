import React, { useEffect, useState } from "react";
import Select from "react-select";
import "./BreedSearch.css";

export function BreedSearch({ breedFilter, setSearchState }) {
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
          setSearchState(true);
         }}
        options={breeds}
        placeholder="Search for Breed"
      />
      </div>
    </>
  );
}
