import React, { useState, useEffect } from "react";
import { GetAllBreeds } from "./ApiManager";
import "./BreedFilter.css";
import { BreedSearch } from "./BreedSearch";

export function BreedFilter({}) {
  const [breeds, setBreeds] = useState([]);
  const [breedItems]  = useState([]);
  const [dropDownState, setdropDownState] = useState([]);
  const [searchState, setSearchState] = useState(false);   
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
        (breed) => breed.shedding === breedCopy.shedding
      );
      setBreeds(filterShedding);
    }
    if (breedCopy.grooming > 0) {
      const filterGrooming = breeds.filter(
        (breed) => breed.grooming === breedCopy.grooming
      );
      setBreeds(filterGrooming);
    }
    if (breedCopy.size > 0) {
      const filterSize = breeds.filter((breed) => breed.size === breedCopy.size);
      setBreeds(filterSize);
    }
   
  }, [breedCopy]);

//   console.log(breeds);

 
  const filteredBreeds = breeds.filter(
    (breed) =>
      breed.good_in_apartment >= breedCopy.apartment && breed.energy >= breedCopy.energy &&
      breed.good_for_novice_owner >= breedCopy.novice_owner && breed.shedding <= breedCopy.shedding &&
      breed.grooming >= breedCopy.grooming && breed.size >= breedCopy.size



      
       
  );
//   console.log(filteredBreeds);
 

  return (
    <>
      {/* SEARCH */}
      <article className ="search-container">
           <section className="instructions">
                <h1>What Pup Should You Get?</h1>
                <div className="scroll">
                <p className="main">
This list has been sub-setted out to only AKC qualified breeds, this is to ensure genetic trait
repeatability, and testing for traits in which dogs{"\n"} were selectively bred for.{"\n"}
{"\n"}
Dashboard General info and Instructions: {"\n"}
{"\n"}
To find your purrrfect puppy...Wait...hmmm.... 'Every Dog Has its Day' and today could be they day you find your best freind.
{"\n"}
There are a few ways to use the breed search tool:{"\n"}
{"\n"}
{`1.)`} Use the Search and drop down tool. This will allow you to choose from the entire data base.{"\n"}

{`2.)`} If there are too many puppies (primus_sucks) then you can simply start answering the questions based on your current life style.{"\n"}
{"\n"}
All of these categories have been aggregated from several different ratings assigned by AKC, UKC, and other sites such as Dogtime.com.
{"\n"}
{"\n"}
Please note: This is only for Education Purposes (for me to learn React). I obtained this data by webscraping Dogtime.com, AKC.org,
and WikiPedia dogsites.
{"\n"}
{"\n"}
Here are some definitions of the data:{"\n"}
{"\n"}
Breed: Full data set Contains 1200 Breeds. All are UKC,AKC.{"\n"}
{"\n"}
Height_low_inches: Sample taken from 200 different animals of same breed, then averaged.{"\n"}
{"\n"}
Height_high_inches: Sample taken from 200 different animals of same breed, then averaged.{"\n"}
{"\n"}
Weight_low_lbs: Sample taken from 200 different animals of same breed, then averaged.{"\n"}
{"\n"}
Weight_high_lbs: Sample taken from 200 different animals of same breed, then averaged.{"\n"}
{"\n"}
Prefers_cold_weather: Ratings are from dogtime.com, measurements unknown.  {"\n"}
{"\n"}
Prefers_hot_weather: Ratings are from dogtime.com, measurements unknown.{"\n"}  
{"\n"}
Energy: Rated from 1-5. 1 is lowest (no energy). 5 is highest{"\n"}
{"\n"}
Apartment: Rated from 1-5. (1 is house/big yard ect). (5 is smallest, New York rent Saver+){"\n"}
{"\n"}
Novice_owner: Rated from 1-5. (1 requires most experience). (5 is for new owners){"\n"}
{"\n"}
Independant: Rated from 1-5. (1 is most independant). (5 is least independant){"\n"}
{"\n"}
Kid_friendly: Rated from 1-5. (1 is lowest worst with kids). (5 is highest best with Kids){"\n"}
{"\n"}
Shedding: Rated from 1-5. (1 is least shedding). (5 is most shedding){"\n"}
{"\n"}
Grooming: Rated from 1-5. (1 requires the most Grooming). (5 is least amount of grooming.){"\n"} 
{"\n"}
Health: Rated from 1-5. (1 has most health issues). (5 is the most healthy).{"\n"}
{"\n"}
Size: Aggregated from heigh, weight stats.{"\n"}
{"\n"}
Trainabilty: Aggregated from intelligence, energy, independant, and class (working, sporting ect){"\n"}
{"\n"}
Intelligence: Ratings are from dogtime.com, measurements unknown. {"\n"}
{"\n"}
Summary: Text taken from AKC.org{"\n"}

</p>
</div>
{/* <div className="empty-box">Empty Box</div> */}
          </section>

           <div className="search-bar">
                <h3>Search for a Breed!</h3>
      <BreedSearch breedFilter={breeds} setSearchState={setSearchState}/>
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
          <div className="breeds-remaining" >
            <h3>Number of breeds Remaining</h3>
            <ul className="dashboard-ul">{breeds.length}</ul>
          </div>
        </section>
        {/* SECTION 2 Size Options */}
        <section className="dashboard--size-list">

          <div className="lowest__height" >
                  <h3>Average Smallest Height</h3>
                  <ul className="dashboard-ul">{breeds[0]?.height_low_inches}</ul>
          </div>
          <div className="tallest__height">
               <h3>Average Tallest Height (in)</h3>
                  <ul className="dashboard-ul">{breeds[0]?.height_high_inches}</ul>
          </div>
                  
          <div className="breed__list">
               <h3>Availible Breeds List</h3>
               
                    {/* <ul className="dashboard-ul">{items}</ul> */}
               </div>
        </section>
        {/* SECTION 3 Descripion Box and Image Box*/}
        <section className="dashboard--description-image">
          <h1 className="description__title">{breeds[0]?.breed}</h1>
          <div className="breed__description">
               <p className="summary">{breeds[0]?.summary}</p>
          </div>
          <div className="breed__img">Feature Add image</div>
        </section>
        {/* SECTION 4 Weight, Health, Kids */}
        <section className="dashboard--weight-info">
          <div className="lowest_weight">
               <h3>Lowest Average Weight (lbs)</h3>
                  <ul className="dashboard-ul">{breeds[0]?.weight_high_lbs}</ul>
          </div>        
          <div className="highest_weight">
               <h3>Highest Average Weight (lbs)</h3>
                  <ul className="dashboard-ul">{breeds[0]?.weight_high_lbs}</ul>
          </div>
          <div className="health">
               <h3>Health</h3>
               <ul className="dashboard-ul">{breeds[0]?.health}</ul>
          </div>
          <div className="kid_friendly">
               <h3>Kid Friendly</h3>
               <ul className="dashboard-ul">{breeds[0]?.kid_friendly}</ul>
          </div>
          <div className="section-four-bottombox">
               <h3>Trainability</h3>
               <ul className="dashboard-ul">{breeds[0]?.trainabilty}</ul>
          </div>
        </section>
      </article>
      

    </>
  );
}
