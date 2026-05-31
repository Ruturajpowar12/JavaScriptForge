const input = document.querySelector("input");
const button = document.querySelector("button");

const banner = document.getElementById("banner");
const Name = document.getElementById("name");
const date = document.getElementById("release-date");
const rate = document.getElementById("rate");
const desc = document.getElementById("desc");

button.addEventListener("click", () => {
    const userInput = input.value.trim().toLowerCase();

    if (userInput === "") {
        alert("Please enter a movie name!");
        return;
    }

    getData(userInput);
});

const getData = async (userInput) => {
    try {
        const response = await fetch(
            "https://ghibliapi.vercel.app/films"
        );

        const data = await response.json();

        const filteredMovies = data.filter(movie =>
            movie.title.toLowerCase().includes(userInput)
        );

        updateUI(filteredMovies);

    } catch (error) {
        console.log(error);
        alert("Something went wrong!");
    }
};

const updateUI = (movies) => {
    if (movies.length === 0) {
        alert("Movie not found!");
        return;
    }

    const movie = movies[0];

    banner.src = movie.movie_banner;
    Name.innerText = movie.title;
    date.innerText = movie.release_date;
    rate.innerText = movie.rt_score;
    desc.innerText = movie.description;
};