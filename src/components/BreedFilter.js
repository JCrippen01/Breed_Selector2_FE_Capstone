import React, { useState, useEffect } from "react";
import { GetAllBreeds } from "./ApiManager";
import "./BreedFilter.css";
import { BreedSearch } from "./BreedSearch";

export function BreedFilter({}) {
  const [breeds, setBreeds] = useState([]);
  const [breedCopy, setFilterParams] = useState({
    apartment: 0,
    energy: 0,
    novice_owner: 0,
    shedding: 0,
    size: 0,
    grooming: 0,
  });

  useEffect(() => {
    GetAllBreeds().then((breeds) => {
      setBreeds(breeds);
    });
  }, []);
  useEffect(() => {
    if (breedCopy.apartment > 0) {
      const filterApartment = breeds.filter(
        (breed) => breed.apartment >= breedCopy.apartment
      );
      setBreeds(filterApartment);
    }
    if (breedCopy.energy > 0) {
      const filterEnergy = breeds.filter(
        (breed) => breed.energy >= breedCopy.energy
      );
      setBreeds(filterEnergy);
    }
    if (breedCopy.novice_owner > 0) {
      const filterNovice = breeds.filter(
        (breed) => breed.novice_owner >= breedCopy.novice_owner
      );
      setBreeds(filterNovice);
    }
    if (breedCopy.shedding > 0) {
      const filterShedding = breeds.filter(
        (breed) => breed.shedding == breedCopy.shedding
      );
      setBreeds(filterShedding);
    }
    if (breedCopy.grooming > 0) {
      const filterGrooming = breeds.filter(
        (breed) => breed.grooming == breedCopy.grooming
      );
      setBreeds(filterGrooming);
    }
    if (breedCopy.size > 0) {
      debugger;
      const filterSize = breeds.filter((breed) => breed.size == breedCopy.size);
      setBreeds(filterSize);
    }
  }, [breedCopy]);

  console.log(breeds);

  const filteredBreeds = breeds.filter(
    (breed) =>
      breed.good_in_apartment >= breedCopy.apartment &&
      breed.energy >= breedCopy.energy &&
      breed.good_for_novice_owner >= breedCopy.novice_owner &&
      breed.shedding <= breedCopy.shedding &&
      breed.grooming >= breedCopy.grooming &&
      breed.size >= breedCopy.size
  );
  console.log(filteredBreeds);
  return (
    <>
      {/* SEARCH */}
      <article className ="search-container">
           <section className="instructions">
                <h1>What Pup Should You Get?</h1>
                <p1>This list has been sub-setted out to only AKC qualified breeds, this is to ensure genetic trait
repeatability, and testing for traits in which dogs were selectively bred for.

Dashboard

General info and Instructions: 
Energy : A rating of 1 is the lowest rating of Energy, and 5 is a dog that might be on crack. 
Trainability : Trainability is based on an average against the following (Intelligence, Energy
level, Prey Drive, and Eagerness to please.) 

Shedding :  A rating of one will shed the least, while a rating of 5 will shed the most.  

Apartment :  A rating of 1 will not be suited for apartment

life, but would do much better on a farm, our house with a big yard. A 5 is the

best apartment rating.

Most of these categories have been

aggregated from several different ratings assigned by AKC, UKC, and other sites such as Dogtime.com.

</p1>
          </section>
           <div className="search-bar">
      <BreedSearch breedFilter={breeds} />
            </div>

      </article>
      {/* FILTERS */}
      <article className="container">
        <section className="filter-selections">
          {/* APARTMENT */}
          <div className="dropdown">
            <h3 className="apartment">What kind of home do you have?</h3>
            <div className="dropdown-menu">
              <select
                onChange={(e) => {
                  const copy = { ...breedCopy };
                  copy.apartment = parseInt(e.target.value);
                  setFilterParams(copy);
                }}
              >
                <option value="All">All</option>
                <option value={1}>Farm</option>
                <option value={2}>House with Yard</option>
                <option value={3}>Town Home</option>
                <option value={4}>Big Apartment</option>
                <option value={5}>Tiny Apartment</option>
              </select>
            </div>
          </div>
          {/* ENERGY */}
          <div className="dropdown">
            <h3 className="energy">What’s your activity level?</h3>
            <div className="select">
              <div className="dropdown-menu">
                <select
                  onChange={(e) => {
                    const copy = { ...breedCopy };
                    copy.energy = parseInt(e.target.value);
                    setFilterParams(copy);
                  }}
                >
                  <option value="All">All</option>
                  <option value={1}>Eye lids..Heavy...cant</option>
                  <option value={2}>I like TV</option>
                  <option value={3}>I work out</option>
                  <option value={4}>Cant Stop, wont Stop</option>
                  <option value={5}>Crack Head</option>
                </select>
              </div>
            </div>
          </div>
          {/* NOVICE OWNER */}
          <div className="dropdown">
            <h3 className="novice_owner">What is your experience with dogs?</h3>
            <div className="select">
              <div className="dropdown-menu">
                <select
                  onChange={(e) => {
                    const copy = { ...breedCopy };
                    copy.novice_owner = parseInt(e.target.value);
                    setFilterParams(copy);
                  }}
                >
                  <option value="All">All</option>
                  <option value={1}>Expert Handler</option>
                  <option value={2}>Veteran</option>
                  <option value={3}>I have owned a dog</option>
                  <option value={4}>Some expirence</option>
                  <option value={5}>I am new, I dont know what to do!</option>
                </select>
              </div>
            </div>
          </div>
          {/* SHEDDING */}
          <div className="dropdown">
            <h3 className="shedding">What is your tolerance for shedding?</h3>
            <div className="select">
              <div className="dropdown-menu">
                <select
                  onChange={(e) => {
                    const copy = { ...breedCopy };
                    copy.shedding = parseInt(e.target.value);
                    setFilterParams(copy);
                  }}
                >
                  <option value="All">All</option>
                  <option value={1}>Sheds the least</option>
                  <option value={2}>Occasional Shedding</option>
                  <option value={3}>Seasonal Sheds</option>
                  <option value={4}>Enough to make wigs.</option>
                  <option value={5}>So murch Flurff</option>
                </select>
              </div>
            </div>
          </div>
          {/* GROOMING */}
          <div className="dropdown">
            <h3 className="grooming">How often needs groomed.</h3>
            <div className="select">
              <div className="dropdown-menu">
                <select
                  onChange={(e) => {
                    const copy = { ...breedCopy };
                    copy.grooming = parseInt(e.target.value);
                    setFilterParams(copy);
                  }}
                >
                  \<option value="All">All</option>
                  <option value={1}>Daily</option>
                  <option value={2}>Weekly</option>
                  <option value={3}>Monthly</option>
                  <option value={4}>Occasional</option>
                  <option value={5}>Never</option>
                </select>
              </div>
            </div>
          </div>

          {/* SIZE */}
          <div className="dropdown">
            <h3 className="size">Does Size Matter?</h3>
            <div className="select">
              <div className="dropdown-menu">
                <select
                  onChange={(e) => {
                    const copy = { ...breedCopy };
                    copy.size = parseInt(e.target.value);
                    setFilterParams(copy);
                  }}
                >
                  <option value="All">All</option>
                  <option value={1}>Tiny</option>
                  <option value={2}>Small</option>
                  <option value={3}>Average</option>
                  <option value={4}>Above Average</option>
                  <option value={5}>Largest</option>
                </select>
              </div>
            </div>
          </div>
          <div className="remaining_breeds">
            <h3>Number of breeds Remaining</h3>
            <span>{breeds.length}</span>
          </div>
        </section>
        {/* SECTION 2 Size Options */}
        <section className="dashboard--size-list">
          <div className="lowest__height">Average Low Height (in)</div>
                  <span>{filteredBreeds.height_low_inches}</span>
          <div className="tallest__height">Average Tallest Height (in)</div>
                  <span>{breeds.height_high_inches}</span>
          <div className="breed__list">Availible Breeds List</div>
                    <ol>{breeds.breed}</ol>
        </section>
        {/* SECTION 3 Descripion Box and Image Box*/}
        <section className="dashboard--description-image">
          <div className="description__title">{breeds.breed}</div>
          <span className="breed__description">{breeds.summary}</span>
          <div className="breed__img">{breeds.image}</div>
        </section>
        {/* SECTION 4 Weight, Health, Kids */}
        <section className="dashboard--weight-info">
          <div className="lowest_weight">Lowest Average Weight (lbs)</div>
                  <item>{filteredBreeds.weight_high_lbs}</item>
          <div className="highest_weight">Highest Average Weight (lbs)</div>
                  <item>{breeds.weight_high_lbs}</item>
          <div className="health">Health</div>
               <item>{filteredBreeds.health}</item>
          <div className="kid_friendly">Kid Friendly</div>
               <item>{filteredBreeds.kid_friendly}</item>
          <div className="section-four-bottombox">Trainability</div>
               <item>{breeds.trainability}</item>
        </section>
      </article>
    </>
  );
}
