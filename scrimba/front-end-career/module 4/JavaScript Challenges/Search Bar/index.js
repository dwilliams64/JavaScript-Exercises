const navBar = document.getElementById("nav-bar");
const userSearch = document.getElementById("user-search");
const userDisplay = document.getElementById("user-display");

const userArray = [
    "Bob",
    "Karl",
    "Doug",
    "Winters",
    "Bitch ass nigga",
    "Akky",
    "Nu Type",
    "PetriD",
    "Mario",
    "Chris",
    "Jill",
    "Yoshi"
];

userArray.forEach((user) => {
    const card = document.createElement("li");
    card.textContent = user;
    userDisplay.appendChild(card);
});

window.addEventListener("scroll", (e) => {   

    if (navBar.offsetTop < e.currentTarget.scrollY) {
        navBar.classList.add("sticky");
    } else {
        navBar.classList.remove("sticky");
    }
    
});

userSearch.addEventListener("keypress", (e) => {
    let letter = e.currentTarget.value.toLowerCase();
    console.log(letter)
});