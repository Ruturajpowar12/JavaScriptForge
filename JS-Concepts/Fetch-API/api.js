//Fetch in Js 


const URL = "https://dog.ceo/api/breeds/image/random";
let fact = document.querySelector(".fact");

let promise = fetch(URL);
console.log(promise);

const getDogs = async () => {
    console.log("getting data ...");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
    fact.innerText = data;
}

// async - await is best than .then / ,catch chain



