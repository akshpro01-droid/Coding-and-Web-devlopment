function scrollCards(value) {
    document.getElementById("carousel")
        .scrollBy({
            left: value,
            behavior: "smooth"
        });
}

