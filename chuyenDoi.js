function convert() {
    let celsius = document.getElementById("celsius").value;
    celsius = parseFloat(celsius);
    if (isNaN(celsius)) {
        alert("Bạn hãy nhập một số");
        return;
    }
    let fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("result").innerHTML = celsius + " độ C tương đương " + fahrenheit.toFixed(2) + " độ F";
}