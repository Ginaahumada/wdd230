const HamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

HamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    HamButton.classList.toggle("open");
})