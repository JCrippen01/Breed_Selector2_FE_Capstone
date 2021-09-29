import React,{ useState, useEffect} from "react";
import { GetAllBreeds } from "./ApiManager"
import "./BreedFilter.css";



export function BreedFilter({}) { 
    const [breeds, setBreeds] = useState ([])
    const [breedCopy, setFilterParams] = useState({
        apartment: 0, 
        energy: 0, 
        novice_owner: 0,
        shedding: 0,
        size: 0,
        grooming: 0,
    })
 useEffect(() => {
    GetAllBreeds()
      .then(breeds => {
          setBreeds(breeds)
      })
      }, [])
const filteredBreeds = breeds.filter(breed => breed.apartment >= breedCopy.apartment
        && breed.energy >= breedCopy.energy && breed.novice_owner >= breedCopy.novice_owner && breed.shedding >= breedCopy.shedding && breed.grooming >= breedCopy.grooming && breed.size >= breedCopy.size)
        console.log(filteredBreeds)
return(
    <>

    <div className= "container">
          <span className="user_selections">Pick a drop down to answer the questions.</span>

  
  <div className = "dropdown">
               <span className="apartment">Where do you live?</span>
     <div className="select">
   <select 
   
        onChange={(e) => {
        const copy = {...breedCopy}
        copy.apartment = parseInt(e.target.value)
        setFilterParams(copy)
   }}
    >
        <option value="All">What kind of home do you have?</option>
        <option value={1}>Farm</option>
        <option value={2}>House with Yard</option>
        <option value={3}>Town Home</option>
        <option value={4}>Big Apartment</option>
        <option value={5}>Tiny Apartment</option>
    </select>
   </div>
   </div>
   <div className = "dropdown">
    <span className="energy">What’s your activity level?</span>
    <div className="select">
   <select
        onChange={(e)=>{
        const copy = {...breedCopy}
        copy.energy = parseInt(e.target.value)
        setFilterParams(copy)
   }}
   >
        <option value="All">Energy Level</option>
        <option value={1}>Eye lids..Heavy...cant</option>
        <option value={2}>I like TV</option>
        <option value={3}>I work out</option>
        <option value={4}>Cant Stop, wont Stop</option>
        <option value={5}>Crack Head</option>
              
   </select>
   </div>
   </div>

   <div className="dropdown">
   <span className="novice_owner">What is your experience with dogs?</span>
   <div className= "select">
   <select
        onChange={(e)=>{
        const copy = {...breedCopy}
        copy.novice_owner = parseInt(e.target.value)
        setFilterParams(copy)
   }}
   >
        <option value="All">Experience</option>
        <option value={1}>Expert Handler</option>
        <option value={2}>Veteran</option>
        <option value={3}>I have owned a dog</option>
        <option value={4}>Some expirence</option>
        <option value={5}>I am new, I dont know what to do!</option>
              
   </select>
   </div>
   </div>

   <div className="dropdown">
   <span className="shedding">What is your tolerance for shedding?</span>
   <div className= "select">
   <select
        onChange={(e)=>{
        const copy = {...breedCopy}
        copy.shedding = parseInt(e.target.value)
        setFilterParams(copy)
   }}
   >
        <option value="All">Shedding</option>
        <option value={1}>Sheds the least</option>
        <option value={2}>Occasional Shedding</option>
        <option value={3}>Seasonal Sheds</option>
        <option value={4}>Enough to make wigs.</option>
        <option value={5}>So murch Flurff</option>
              
   </select>
   </div>
   </div>

   <div className="dropdown">
   <span className="grooming">How often needs groomed.</span>
   <div className="select">
   <select
        onChange={(e)=>{
        const copy = {...breedCopy}
        copy.grooming = parseInt(e.target.value)
        setFilterParams(copy)
   }}
   >
        <option value="All">Grooming</option>
        <option value={1}>Daily</option>
        <option value={2}>Weekly</option>
        <option value={3}>Monthly</option>
        <option value={4}>Occasional</option>
        <option value={5}>Never</option>
              
   </select>
   </div>
   </div>


   <div className= "dropdown">
   <span className="size">Does Size Matter?</span>
   <div className="select">
   <select
        onChange={(e)=>{
        const copy = {...breedCopy}
        copy.size = parseInt(e.target.value)
        setFilterParams(copy)
   }}
   >
        <option value="All">Size</option>
        <option value={1}>Tiny</option>
        <option value={2}>Small</option>
        <option value={3}>Average</option>
        <option value={4}>Above Average</option>
        <option value={5}>Largest</option>
              
   </select>
   </div>
   </div>
   </div>
   
   
       
    </>   

)
}

    

        



   
  