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

function Tulpas_List() {
    document.getElementById('Tulpas').style.visibility = 'visible';
    let html = '';
    for (Slot in Player.Tulpas) {
        if (Slot.startsWith('Slot')) {
            let tulpa = Player.Tulpas[Slot];
            if (tulpa.name != "") {
                html += '<div style="display:block;margin-bottom:5px;"><div class="' + tulpa.name + '"></div><br>' +
                    '<div style="position:relative;left:60px;">' + Tulpas[tulpa.name].name + ' Lv.' + tulpa.Lv + ' HP:' + tulpa.HP + '/' + tulpa.HP_Total + '</div>' +
                    '<div class="LP_Bar">' +
                    '<div class="LP_Fill" style="width:' + Math.round((tulpa.HP / tulpa.HP_Total) * 100) + '%"></div>' +
                    '</div>' +
                    '<button class="Change_Tulpa" onclick="swapTulpa(\'' + Slot + '\');Click()">🔄️</button>' +
                    '<button class="Delete_Tulpa" onclick="removeTulpa(\'' + Slot + '\');Click()">🗑️</button></div>';
            }
        }
    };
    document.getElementById('Tulpa_List').innerHTML = html;
}

function removeTulpa(Slot) {
    let antwort = confirm("Soll " + Player.Tulpas[Slot].name + " wirklich gelöscht werden?");
    if (antwort && Slot != "Slot_1") {
        alert(Player.Tulpas[Slot].name + " wurde gelöscht.");
        Player.Tulpas[Slot] = { name: "", Lv: 0, HP: 0, HP_Total: 0, XP: 0, ID: "" };
        if (Slot != "Slot_6") {
            for (i in Player.Tulpas) {
                if (i.startsWith("Slot") && i != "Slot_6") {
                    if (Player.Tulpas[i].name == "") {
                        let nextPos = parseInt(i.split('_')[1]) + 1;
                        let nextSlot = "Slot_" + nextPos;
                        if (Player.Tulpas[nextSlot].name != "") {
                            let nextTulpa = Player.Tulpas[nextSlot];
                            Player.Tulpas[nextSlot] = { name: "", Lv: 0, HP: 0, HP_Total: 0, XP: 0, ID: "" };
                            Player.Tulpas[i] = nextTulpa;
                        }
                    }
                }
            }
        }
        setCookie("PlayerData", JSON.stringify(Player), 30);
        Tulpas_List();
    } else if (Slot == "Slot_1") {
        alert("Der erste Slot muss immer belegt sein!");
    }
}

function swapTulpa(Slot) {
    let antwort = prompt("Mit welchem Slot soll " + Slot + " getauscht werden? Gib dazu die Slotnummer (1-6) an:", "0 beendet den Tausch");
    if (antwort != 0 && antwort <= 6 && Player.Tulpas["Slot_" + antwort].name != "" && Slot != "Slot_" + antwort) {
        let tulpa_1 = Player.Tulpas[Slot];
        let tulpa_2 = Player.Tulpas["Slot_" + antwort];
        Player.Tulpas[Slot] = tulpa_2;
        Player.Tulpas["Slot_" + antwort] = tulpa_1;
        setCookie("PlayerData", JSON.stringify(Player), 30);
        Tulpas_List();
    } else {
        alert("Tausch nicht möglich! \n Falsche Eingabe oder Slot nicht belegt.");
    }
}

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
    // Mache das Kartenelement sichtbar
    document.getElementById('Karte').style.visibility = 'visible';
  
    // Rufe die aktuellen Kartenkoordinaten ab
    let mapX = maps[activeMap].startX;
    let mapY = maps[activeMap].startY;
  
    // Finde das Element für den Standort-Marker
    const standortMarker = document.getElementById('standort-marker');
  
    if (standortMarker) {
      // **WICHTIG:** Hier musst du überlegen, wie deine Koordinaten
      // mit den Pixelkoordinaten auf deiner Hintergrundkarte zusammenhängen.
      // Das hängt stark davon ab, wie deine Karte aufgebaut ist.
  
      // **Annahme:** Vielleicht repräsentieren mapX und mapY eine Art von
      // Gitterzellen oder relative Positionen. Du musst diese Werte in Pixel
      // umrechnen, die innerhalb deines #Karte_info Elements Sinn machen.
  
      // **Beispielhafte Umrechnung (musst du an dein System anpassen!):**
      const schrittweiteX = 50; // Beispiel: jede Einheit in mapX entspricht 50 Pixeln
      const schrittweiteY = 50; // Beispiel: jede Einheit in mapY entspricht 50 Pixeln
  
      const markerLeft = mapX * schrittweiteX;
      const markerTop = mapY * schrittweiteY;
  
      // Setze die CSS-Position des Markers
      standortMarker.style.left = `${markerLeft}px`;
      standortMarker.style.top = `${markerTop}px`;
    } else {
      console.error("Das Element mit der ID 'standort-marker' wurde nicht gefunden!");
    }
}

function close_Karte() {
    document.getElementById('Karte').style.visibility = 'hidden';
}

function Items() {
    document.getElementById('Items').style.visibility = 'visible';
    let html = "<div id='Bälle' class='Item_Title'>Bälle: </div><br>";
    for (ball in Player.inventory.balls) {
        html += '<div><div class="Item_list">' + Item_List[ball].name + ': ' + Player.inventory.balls[ball] + '</div>';
    }
    html += "<div id='Tränke' class='Item_Title'>Tränke: </div><br>";
    for (drink in Player.inventory.drinks) {
        html += '<div><div class="Item_list">' + Item_List[drink].name + ': ' + Player.inventory.drinks[drink] + '</div>';
    }
    html += "<div id='Bonbons' class='Item_Title'>Bonbons: </div><br>";
    for (bonbon in Player.inventory.bonbons) {
        html += '<div><div class="Item_list">' + Item_List[bonbon].name + ': ' + Player.inventory.bonbons[bonbon] + '</div>';
    }
    document.getElementById('Item_List').innerHTML = html;
}

function close_Items() {
    document.getElementById('Items').style.visibility = 'hidden';
}