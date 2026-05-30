// Elements
const input = document.getElementById("username");
const searchBtn = document.getElementById("search-btn");
const themeBtn = document.getElementById("theme");

const avatar = document.getElementById("avatar");
const nameEl = document.getElementById("name");
const bio = document.getElementById("bio");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const repos = document.getElementById("repos");
const profileLink = document.getElementById("profile-link");


// Fetch Data
async function getData(username) {

    const response = await fetch(
        `https://api.github.com/users/${username}`
    );

    if (!response.ok) {
        throw new Error("User Not Found");
    }

    return await response.json();
}


// Update UI
function updateUI(data) {

    avatar.src = data.avatar_url;

    nameEl.textContent = data.name || data.login;

    bio.textContent = data.bio || "No bio available";

    followers.textContent = data.followers;

    following.textContent = data.following;

    repos.textContent = data.public_repos;

    profileLink.href = data.html_url;
}


// Search Handler
async function handleSearch() {

    const username = input.value.trim();

    if (username === "") {
        alert("Enter Username");
        return;
    }

    try {

        const data = await getData(username);

        updateUI(data);

    } catch (error) {

        alert(error.message);

    }
}


// Theme Toggle
function toggleTheme() {

    document.body.classList.toggle("dark-mode");
}


// Events
searchBtn.addEventListener("click", handleSearch);

themeBtn.addEventListener("click", toggleTheme);