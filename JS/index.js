class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = "";
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {

        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];


        if (this.isDeleting) {

            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {

            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;


        let typeSpeed = 100;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {

            typeSpeed = this.wait;

            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === "") {
            this.isDeleting = false;

            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}


document.addEventListener("DOMContentLoaded", init);


function init() {
    const txtElement = document.querySelector(".txt-type");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");
    new TypeWriter(txtElement, words, wait);
}
const stars = document.getElementsByClassName("fas");
const emoji = document.getElementById("emoji");
stars[1].addEventListener("click", () => {
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#e4e4e4";
    stars[3].style.color = "#e4e4e4";
    stars[4].style.color = "#e4e4e4";
    stars[5].style.color = "#e4e4e4";
    emoji.style.transform = "translateX(0)";
})
stars[2].addEventListener("click", () => {
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#ffd93b";
    stars[3].style.color = "#e4e4e4";
    stars[4].style.color = "#e4e4e4";
    stars[5].style.color = "#e4e4e4";
    emoji.style.transform = "translateX(-100px)";
})
stars[3].addEventListener("click", () => {
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#ffd93b";
    stars[3].style.color = "#ffd93b";
    stars[4].style.color = "#e4e4e4";
    stars[5].style.color = "#e4e4e4";
    emoji.style.transform = "translateX(-200px)";
})
stars[4].addEventListener("click", () => {
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#ffd93b";
    stars[3].style.color = "#ffd93b";
    stars[4].style.color = "#ffd93b";
    stars[5].style.color = "#e4e4e4";
    emoji.style.transform = "translateX(-300px)";
})
stars[5].addEventListener("click", () => {
    stars[1].style.color = "#ffd93b";
    stars[2].style.color = "#ffd93b";
    stars[3].style.color = "#ffd93b";
    stars[4].style.color = "#ffd93b";
    stars[5].style.color = "#ffd93b";
    emoji.style.transform = "translateX(-400px)";
})
localStorage.setItem = stars;
body.onload() = function () {
    localStorage.getItem = stars;
}