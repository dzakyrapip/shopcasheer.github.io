// Mini Project 1
function convert() {
    var fahrenheit = document.getElementById("nilaifahr").value;
    var celcius = (fahrenheit - 32)*5/9;
    document.getElementById("result").innerHTML = "Jadi " + fahrenheit + " derajat fahrenheit adalah " + celcius.toFixed(2) + " derajat celcius";
}

// Mini Project 2
function ubah() {
    var listItems = document.getElementsByTagName("li");
    for (var i = 0; i < listItems.length; i++) {
        if ((i + 1) % 2 === 0) {
            listItems[i].classList.add("warna-ganti");
        }
    }
}

// Mini Project 3
function updateJam() {
    var date = new Date();
    var jam = date.getHours();
    var menit = date.getMinutes();
    var detik = date.getSeconds();

    var jamString = jam.toString().padStart(2, '0');
    var menitString = menit.toString().padStart(2, '0');
    var detikString = detik.toString().padStart(2, '0');

    var jamDisplay = jamString + ":" + menitString + ":" + detikString;
    document.getElementById("jam").innerHTML = jamDisplay;

    var jamElement = document.getElementById("jam");
    if (detik % 2 === 0) {
        jamElement.style.border = "3px solid red";
    } else {
        jamElement.style.border = "3px solid blue";
    }
}

    setInterval(updateJam, 1000);

    updateJam();