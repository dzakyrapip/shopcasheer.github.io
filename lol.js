// List Mobil
const mobilList = ["Acura", "Alfa Romero", "Aston Martin", "Audi", "Bentley", "Audi", "Bugatti", "Buick"];

let text = "";
for (let i = 0; i < mobilList.length; i++) {
    text += mobilList[i] + "<br>";
}

document.getElementById("mobil").innerHTML=text;

// Ubah Warna
function changeStyle() {
    const paragraf = document.getElementById("mobil");

    for (let i = 0; i < mobilList.length; i++) {
        if ((i + 1) % 2 === 0) {
            paragraf.style.color="blue";
            paragraf.style.fontWeight="bold";
        }
    }
}