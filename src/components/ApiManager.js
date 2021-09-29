export const GetAllBreeds = () => {
    return fetch("http://localhost:8088/breeds")
    .then(res => res.json())
}


