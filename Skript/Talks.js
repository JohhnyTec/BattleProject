function ProfTalk_1(){
    console.log('Gespräch 1 mit Prof');
    //Hier startet der Monolog

    // Ändert den Monolog für den nächsten Klick
    document.getElementById("Professor").innerHTML = '<button id="ProfessorButton" onclick="ProfTalk_2()"> </button>';
}

function ProfTalk_2(){
    console.log('Gespräch 2 mit Prof');
}