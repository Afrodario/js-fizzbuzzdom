const containerElement = document.getElementById("container");

for (let i = 1; i <= 100; i++) {

    if (i%3 == 0 && i%5 == 0) {
        containerElement.innerHTML = containerElement.innerHTML + "<div class='box fizzbuzz'>FizzBuzz</div>"
    }
    else if (i%3 == 0) {
        containerElement.innerHTML = containerElement.innerHTML + "<div class='box fizz'>Fizz</div>"
    }
    else if (i%5 == 0) {
        containerElement.innerHTML = containerElement.innerHTML + "<div class='box buzz'>Buzz</div>"
    }
    else {
        containerElement.innerHTML = containerElement.innerHTML + "<div class='box'>" + i + "</div>"
    }
}