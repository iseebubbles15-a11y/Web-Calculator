// Funktion zum wechseln d. designs klassen
function toggleMood() {
    document.body.classList.toggle("mood-retro");
}

function number(nb) {
    let display = document.getElementById("display");
    if (display.innerHTML === "0" || display.innerHTML === "error") {
        display.innerHTML = nb; 
    } else {
        display.innerHTML += nb;
    }
}

function Operator(op) {
    let display = document.getElementById("display");
    if (op === "C") {
        display.innerHTML = "0"; 
    } 
    else if (op === "=") {
        try {
            let result = display.innerHTML.replace(/x/g, "*").replace(/,/g, ".");
            let calculated = eval(result);
            display.innerHTML = calculated.toString().replace(/\./g, ",");
        }
        catch {
            display.innerHTML = "error";
        }
    } 
    else {
        display.innerHTML += op;
    }
}