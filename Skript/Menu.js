document.getElementById('MenuList').style.visibility = 'hidden';
document.getElementById('Tulpa_Dex').style.visibility = 'hidden';
document.getElementById('Info').style.visibility = 'hidden';
document.getElementById('Karte').style.visibility = 'hidden';
document.getElementById('Items').style.visibility = 'hidden';
document.getElementById('Tulpas').style.visibility = 'hidden';

function MenuList() {
    if (document.getElementById('MenuList').style.visibility == 'hidden') {
        document.getElementById('MenuList').style.visibility = 'visible';
    } else { document.getElementById('MenuList').style.visibility = 'hidden'; }
}

function Cheat() {
    let CheatInput = prompt("Gib bitte den Cheat ein:", "Eingabe");
    if (CheatInput == "MOREGOLD") {
        Player.Gold += 1000;
        Player.Cheats += 1;
        setCookie("PlayerData", JSON.stringify(Player), 30);
        alert(CheatInput + " wurde erfolgreich ausgeführt!");
    } else if (CheatInput == "CHANGENAME") {
        let newName = prompt("Gib deinen neuen Namen ein:", "Max");
        Player.name = newName;
        Player.Cheats += 1;
        setCookie("PlayerData", JSON.stringify(Player), 30);
        alert("Der Name wurde zu " + newName + " geändert.");
    }
    else {
        alert("Cheat ungültig")
    }
}

function Tulpa_Dex() {
    document.getElementById('Tulpa_Dex').style.visibility = 'visible';
    let html = '';
    for (Tulpa in Tulpas) {
        html += '<div style="float:left;margin:5px;"><div class="Tulpa_Name">' + Tulpas[Tulpa].name + '</div>' +
            '<div class="' + Tulpas[Tulpa].className + '"></div>' +
            '<div class="description">' + Tulpas[Tulpa].des + '</div></div>';
    }
    document.getElementById('Tulpa_Dex_List').innerHTML = html;
}

function close_Tulpa_Dex() {
    document.getElementById('Tulpa_Dex').style.visibility = 'hidden';
}

// Dein Team !!!
let Tulpa_Team = new Array(6).fill(null);

function Tulpas_List() {
    document.getElementById('Tulpas').style.visibility = 'visible';
    let html = '';
    Tulpa_Team.forEach((Tulpa, index) => {
        html += `<div style="float:left;margin:5px;width:100px;height:100px;border:2px dashed gray;" 
                  onclick="selectTulpa(${index})">
                  ${Tulpa ? Tulpa.name : "My Team"}
                 </div>`;
    });
    
    document.getElementById('Tulpa_List').innerHTML = html;

function selectTulpa(slotIndex) {
    let tulpaNames = Object.keys(Tulpas);
    let choice = prompt("Choose a Tulpa: " + tulpaNames.join(", "));
    
    if (Tulpas[choice]) {
        Tulpa_Team[slotIndex] = Tulpas[choice];
        Tulpas_List();
    } else {
        alert("Invalid choice. Try again!");
    }
}
function removeTulpa(slotIndex) {
    if (Tulpa_Team[slotIndex]) {
        let confirmRemoval = confirm("Do you want to remove " + tulpaTeam[slotIndex].name + "?");
        if (confirmRemoval) {
            tulpaTeam[slotIndex] = null;
            Tulpas_List(); 
        }
    } else {
        alert("This slot is already empty!");
    }
}
let selectedSlot = null;

function swapTulpa(slotIndex) {
    if (selectedSlot === null) {
        selectedSlot = slotIndex;
        alert("Select another slot to swap with!");
    } else {
        [Tulpa_Team[selectedSlot], Tulpa_Team[slotIndex]] = [Tulpa_Team[slotIndex], Tulpa_Team[selectedSlot]];
        selectedSlot = null; 
        Tulpas_List(); 
    }
}
}
// Team Funktionen Ende! ;)

function close_Tulpas() {
    document.getElementById('Tulpas').style.visibility = 'hidden';
}

function Info() {
    document.getElementById('Info').style.visibility = 'visible';
    let html = '';
    html += '<div>Name: ' + Player.name + '</div>' +
        '<div>Gold: ' + Player.Gold + '</div>' +
        '<div>Cheats: ' + Player.Cheats + '</div>';
    document.getElementById('Info_List').innerHTML = html;
}

function close_Info() {
    document.getElementById('Info').style.visibility = 'hidden';
}

function Karte() {
    document.getElementById('Karte').style.visibility = 'visible';
}

function close_Karte() {
    document.getElementById('Karte').style.visibility = 'hidden';
}

function Items() {
    document.getElementById('Items').style.visibility = 'visible';
    let html = "<div>Bälle: </div><br>"; 
    for (ball in Player.inventory.balls){
        html += '<div style="float:left;margin:5px;"><div class="Item_list">' + Item_List[ball].name + ': ' + Player.inventory.balls[ball] + '</div>';
    }
    html += "<div>Tränke: </div><br>"; 
    for (drink in Player.inventory.drinks){
        html += '<div style="float:left;margin:5px;"><div class="Item_list">' + Item_List[drink].name + ': ' + Player.inventory.drinks[drink] + '</div>';
    }
    html += "<div>Bonbons: </div><br>";
    for (bonbon in Player.inventory.bonbons){
        html += '<div style="float:left;margin:5px;"><div class="Item_list">' + Item_List[bonbon].name + ': ' + Player.inventory.bonbons[bonbon] + '</div>';
    }
    document.getElementById('Item_List').innerHTML=html;
}

function close_Items() {
    document.getElementById('Items').style.visibility = 'hidden';
}