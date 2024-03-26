// Mini Project 1
function changeBg() {
    var div = document.getElementById("idsaya");
    div.style.backgroundColor = "blue";
}

function changered() {
    var div = document.getElementById("idsaya");
    div.style.backgroundColor = "red";
}

function wm() {
    var div = document.getElementById("list");
    div.style.color = "red";
}

function wk() {
    var div = document.getElementById("list");
    div.style.color = "yellow";
}

function wh() {
    var div = document.getElementById("list");
    div.style.color = "darkgreen";
}

function wh1() {
    var div = document.getElementById("list");
    div.style.backgroundColor = "black";
    div.style.width = "100px";
}

function wh1a() {
    var div = document.getElementById("list");
    div.style.backgroundColor = "transparent";
    div.style.width = "100px";
}

function wh2() {
    var div = document.getElementById("list");
    div.style.backgroundColor = "darkgreen";
    div.style.width = "100px";
}

function wh2a() {
    var div = document.getElementById("list");
    div.style.backgroundColor = "transparent";
    div.style.width = "100px";
}

function wh3() {
    var div = document.getElementById("list");
    div.style.backgroundColor = "brown";
    div.style.width = "100px";
}

function wh3a() {
    var div = document.getElementById("list");
    div.style.backgroundColor = "transparent";
    div.style.width = "100px";
}

// Mini Project 2

// Ubah Warna
function changeStyle() {
    var ubah = document.querySelectorAll("#mobil li")
    for (var i = 0; i < ubah.length; i++){
        if (i % 2 != 0){
          ubah[i].classList.add('warna-ganti');
        } else{
        ubah[i].classList.remove('warna-ganti');
        }
      }
}

// Mini Project 3
function ubahGE() {
    var selectElement = document.getElementById("colorSelectorGE");
    var selectColor = selectElement.value;

    var listItem = document.querySelectorAll("#nama li")

    var i = 1;
    while (i < listItem.length) {
        listItem[i].style.color = selectColor;
        listItem[i].style.fontWeight = "bold";
        i += 2
    }
}

function ubahGA() {
    var selectElement = document.getElementById("colorSelectorGA");
    var selectColor = selectElement.value;

    var listItem = document.querySelectorAll("#nama li")

    var j = 0;
    do {
        listItem[j].style.color = selectColor;
        listItem[j].style.fontWeight = "bold";
        j += 2
    }
    while (j < listItem.length);
}