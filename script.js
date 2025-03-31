function grade() {

    let x = parseFloat(document.getElementById("hindi").value);
    let y = parseFloat(document.getElementById("Math").value);
    let z = parseFloat(document.getElementById("science").value); //science English sst pc
    let a = parseFloat(document.getElementById("English").value);
    let b = parseFloat(document.getElementById("sst").value);
    let c = parseFloat(document.getElementById("pc").value);

    let sum = (x + y) + (z + a) + (b + c);
    document.getElementById("totalmarks").innerText = sum;

    let k = (sum / 600) * 100;
    document.getElementById("percentage").innerText = k;

    if (k >= 90 && k <= 100) {
        document.getElementById("grade").innerText = "A+ Grade";
    } else if (k >= 80 && k <= 89) {
        document.getElementById("grade").innerText = "A Grade";
    } else if (k >= 70 && k <= 79) {
        document.getElementById("grade").innerText = "B+ Grade";
    } else if (k >= 60 && k <= 69) {
        document.getElementById("grade").innerText = "B Grade";
    } else if (k >= 50 && k <= 59) {
        document.getElementById("grade").innerText = "C Grade";
    } else {
        document.getElementById("grade").innerText = "FAIL"
    }
}
