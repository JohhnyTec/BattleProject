var maps = {
    MAP: {
        name: "MAP",
        Height: 1250,
        Width: 4750,
        startX: -25,
        startY: -75,
        blockedArea: [
            //HomeTown
            { minX: -250, maxX: 0, minY: -50, maxY: 100 },
            { minX: -650, maxX: -400, minY: -50, maxY: 100 },
            { minX: -1050, maxX: -800, minY: -50, maxY: 100 },
            { minX: -1050, maxX: -800, minY: -500, maxY: -350 },
            { minX: -400, maxX: -150, minY: -550, maxY: -400 },
            { minX: -150, maxX: 25, minY: -550, maxY: -250 },
            { minX: 75, maxX: 150, minY: -250, maxY: -25 },
            { minX: -375, maxX: -275, minY: 75, maxY: 75 },
            { minX: -775, maxX: -675, minY: 75, maxY: 75 },
            { minX: -1275, maxX: -1075, minY: 75, maxY: 75 },
            { minX: -1300, maxX: -1275, minY: -75, maxY: 75 },
            { minX: -1450, maxX: -1125, minY: -225, maxY: -125 },
            { minX: -1450, maxX: -1075, minY: -475, maxY: -375 },
            { minX: -1275, maxX: 25, minY: -925, maxY: -775 },
            { minX: 25, maxX: 125, minY: -725, maxY: -575 },
            { minX: -625, maxX: -575, minY: -325, maxY: -275 },
            { minX: 75, maxX: 75, minY: 25, maxY: 25 },
            { minX: -225, maxX: 225, minY: 125, maxY: 225 },
            { minX: -1275, maxX: -1275, minY: -725, maxY: -525 },
            { minX: 75, maxX: 225, minY: -925, maxY: -925 },
            { minX: -425, maxX: -425, minY: -525, maxY: -475 },
            { minX: -775, maxX: -775, minY: -475, maxY: -425 },
            { minX: -1075, maxX: -1075, minY: -225, maxY: -225 },
            //Map(Hohes Gras). 
            { minX: -1475, maxX: -1475, minY: -250, maxY: 250 },
            { minX: -1575, maxX: -1525, minY: -125, maxY: 250 },
            { minX: -1975, maxX: -1625, minY: -125, maxY: -75 },
            { minX: -1852, maxX: -1625, minY: 175, maxY: 225 },
            { minX: -2975, maxX: -1875, minY: 125, maxY: 225 },
            { minX: -2975, maxX: -2875, minY: -475, maxY: 225 },
            //{ minX: -2975, maxX: -2925, minY: -625, maxY: -525 },
            { minX: -2825, maxX: -2625, minY: -475, maxY: -475 },
            { minX: -2625, maxX: -2625, minY: -525, maxY: -525 },
            { minX: -2975, maxX: -2325, minY: -825, maxY: -675 },
            { minX: -2475, maxX: -2325, minY: -625, maxY: -625 },
            { minX: -2375, maxX: -2325, minY: -575, maxY: -125 },
            { minX: -2275, maxX: -1475, minY: -775, maxY: -725 },
            { minX: -1625, maxX: -1475, minY: -675, maxY: -475 },
            { minX: -1475, maxX: -1475, minY: -425, maxY: -375 },
            //Map(DunkelWald). Max=Min und Min=Max!!!!
            { minX: -3175, maxX: -3025, minY: -475, maxY: -125 },
        ],
        //BattleMapZone. 
        battleArea: [
            { minX: -2275, maxX: -1675, minY: -675, maxY: -675 },
            { minX: -2275, maxX: -2275, minY: -625, maxY: -625 },
            { minX: -2475, maxX: -2275, minY: -575, maxY: -125 },
            { minX: -1825, maxX: -1725, minY: -575, maxY: -475 },
            { minX: -2125, maxX: -1875, minY: -575, maxY: -175 },
            { minX: -2125, maxX: -2025, minY: -125, maxY: -75 },
            { minX: -2825, maxX: -1925, minY: -25, maxY: 75 },
            { minX: -2825, maxX: -2575, minY: -425, maxY: -75 },
            { minX: -2875, maxX: -2775, minY: -625, maxY: -525 },
        ],
        //ProfHome. 
        profHome: [
            { minX: -925, maxX: -925, minY: -525, maxY: -525 },
        ],
        //SelfHome. 
        selfHome: [
            { minX: -125, maxX: -125, minY: -75, maxY: -75 },
        ],
        //ShopHome. 
        shopHome: [
            { minX: -275, maxX: -275, minY: -575, maxY: -575 },
        ],
        //trainerBattle. 
        trainerBattle: [
            { minX: -1075, maxX: -1075, minY: -325, maxY: -275, name:"Trainer000"},
            { minX: -2675, maxX: -2675, minY: -675, maxY: -525, name:"Trainer001"},
        ],
        opp_List: [
            "Mäusschen", "Kaninchen", "Streuner",
        ],
        maxLv: 4,
    },
    TroysHaus:{
        name:"TroysHaus",
        Height: 300,
        Width: 500,
        startX:-25,
        startY:-25,
        startStadtX: -925,
        startStadtY: -525,
        blockedArea: [
            {minX: 75, maxX: 255, minY: -25, maxY: 25},
            {minX: -225, maxX: -125, minY: -25, maxY: 25},
            {minX: -225, maxX: 225, minY: 175, maxY: 225},
            {minX: -225, maxX: -225, minY: 125, maxY: 125},
        ],
        //ProfHome. 
        profHome: [
            { minX: -25, maxX: -25, minY: -25, maxY: -25 },
        ],
        //Professor. 
        professor: [
            { minX: -175, maxX: -175, minY: 125, maxY: 125 },
        ],
    },

    ZoneAreal:{
        Lavazza:[

        ],
        HohesGras:[

            
        ],
        Dunkelwald:[
,
        ],
    },

    MeinHaus:{
        name:"MeinHaus",
        Height: 250,
        Width: 250,
        startX:125,
        startY:25,
        startStadtX: -125,
        startStadtY: -75,
        blockedArea: [
            {minX: 175, maxX: 225, minY: 25, maxY: 25},
            {minX: 25, maxX: 75, minY: 25, maxY: 25},
            {minX: 225, maxX: 225, minY: 175, maxY: 175},
            {minX: 25, maxX: 225, minY: 225, maxY: 225},
            {minX: 25, maxX: 25, minY: 125, maxY: 125},
        ],
        //SelfHome. 
        selfHome: [
            { minX: 125, maxX: 125, minY: 25, maxY: 25 },
        ],
        tulpaPc: [
            { minX: 225, maxX: 225, minY: 125, maxY: 125 },
        ],
    },
    ShopHaus:{
        name:"ShopHaus",
        Height: 300,
        Width: 500,
        startX:75,
        startY:-25,
        startStadtX: -275,
        startStadtY: -575,
        blockedArea: [
            {minX: 125, maxX: 225, minY: -25, maxY: 25},
            {minX: -225, maxX: 25, minY: -25, maxY: -25},
            {minX: -225, maxX: -175, minY: 25, maxY: 25},
            {minX: -125, maxX: -25, minY: 75, maxY: 75},
            {minX: -225, maxX: -175, minY: 125, maxY: 125},
            {minX: -175, maxX: 75, minY: 175, maxY: 175},
            {minX: 75, maxX: 225, minY: 125, maxY: 125},
        ],
        //ShopHome. 
        shopHome: [
            {minX: 75, maxX: 75, minY: -25, maxY: -25},
        ],
        shopHandel: [
            {minX: 175, maxX: 175, minY: 75, maxY: 75},
        ],
    },
}
