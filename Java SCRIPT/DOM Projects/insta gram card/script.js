var istatus = document.querySelector("h4");
var add = document.querySelector(".add");
var removeFriend = document.querySelector(".remove");

add.addEventListener("click", function () {
    istatus.textContent = "Friends";
    istatus.style.color = "green";
});

removeFriend.addEventListener("click", function () {
    istatus.textContent = "Stranger";
    istatus.style.color = "red";
});