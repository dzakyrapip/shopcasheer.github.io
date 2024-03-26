function addlist() {
    var itemText = document.getElementById('item-text').value;
    var itemQuan = parseInt(document.getElementById('item-quan').value);

    if (isNaN(itemQuan) || itemQuan <= 0) {
        alert('Angka tidak valid, masukin yang bener lah');
        return
    }

    document.getElementById('item-text').innerHTML = '';

    for (var i = 0; i < itemQuan; i++) {
    var newItem = document.createElement('li');
    newItem.textContent = itemText;

    document.getElementById('list-items').appendChild(newItem);

    document.getElementById('item-text').value = '';
    document.getElementById('item-quan').value = '';
    }
}

function warna1() {
    var blue = document.getElementById("list-items");
    blue.style.color=("blue");
}

function warna2() {
    var green = document.getElementById("list-items");
    green.style.color=("green");
}

function warna3() {
    var yellow = document.getElementById("list-items");
    yellow.style.color=("yellow");
}

function changeHoverColor(color) {
    var listItems = document.querySelectorAll("#list-items li");

    listItems.forEach(function (item) {
      item.addEventListener("mouseover", function () {
        item.style.color = color;
      });

      item.addEventListener("mouseout", function () {
        item.style.color = ""; // Reset to default color on mouseout
      });
    });
}