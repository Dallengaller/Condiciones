let pikachu = document.getElementById("pikachu");

pikachu.addEventListener("click", function() {
    if (pikachu.style.border == "2px solid red") {
        pikachu.style.border = "";
    } else {
        pikachu.style.border = "2px solid red";
    }
});

