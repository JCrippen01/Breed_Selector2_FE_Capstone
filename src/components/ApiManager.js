export const GetAllBreeds = () => {
    return fetch("http://localhost:8088/breeds")
    .then(res => res.json())
}

// const getSearchBreeds = () => {
//     return fetch("http://localhost:8088/breeds")
//       .then((res) => res.json())
//       .then((data) => {
        
//         return setBreeds(changedBody);
//       });
//   };
