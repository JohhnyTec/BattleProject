var maps = {
    MAP:{
        name:"MAP",
        Height: 1250,
        Width: 3250,
        startX:-25,
        startY:-75,
        blockedArea: [
            {minX: -250, maxX: 0, minY: -50, maxY: 100},
            {minX: -650, maxX: -400, minY: -50, maxY: 100},
            {minX: -1050, maxX: -800, minY: -50, maxY: 100},
            {minX: -1050, maxX: -800, minY: -500, maxY: -350},
            {minX: -400, maxX: -150, minY: -550, maxY: -400},
            {minX: -150, maxX: 25, minY: -550, maxY: -250},
            {minX: 75, maxX: 150, minY: -250, maxY: -25},
            {minX: -375, maxX: -275, minY: 75, maxY: 75},
            {minX: -775, maxX: -675, minY: 75, maxY: 75},
            {minX: -1275, maxX: -1075, minY: 75, maxY: 75},
            {minX: -1300, maxX: -1275, minY: -75, maxY: 75},
            {minX: -1450, maxX: -1125, minY: -225, maxY: -125},
            {minX: -1450, maxX: -1075, minY: -475, maxY: -375},            
            {minX: -1275, maxX: 25, minY: -925, maxY: -775},
            {minX: 25, maxX: 125, minY: -725, maxY: -575},
            {minX: -625, maxX: -575, minY: -325, maxY: -275},
            //Map anhang. 
            {minX: -1475, maxX: -1475, minY: -250, maxY: 250},
            {minX: -1575, maxX: -1525, minY: -125, maxY: 250},
            {minX: -1975, maxX: -1625, minY: -125, maxY: -75},
            {minX: -1852, maxX: -1625, minY: 175, maxY: 225},
            {minX: -2975, maxX: -1875, minY: 125, maxY: 225},
            {minX: -2975, maxX: -2875, minY: -475, maxY: 225},
            {minX: -2975, maxX: -2925, minY: -625, maxY: -525},
            {minX: -2825, maxX: -2625, minY: -475, maxY: -475},
            {minX: -2625, maxX: -2625, minY: -525, maxY: -525},
            {minX: -2975, maxX: -2325, minY: -825, maxY: -675},
            {minX: -2475, maxX: -2325, minY: -625, maxY: -625},
            {minX: -2375, maxX: -2325, minY: -575, maxY: -125},
            {minX: -2275, maxX: -1475, minY: -775, maxY: -725},
            {minX: -1625, maxX: -1475, minY: -675, maxY: -475},
            {minX: -1475, maxX: -1475, minY: -425, maxY: -375},
        ],
    },
}

const kampfzonen = [
    { x: 100, y: 100, breite: 200, höhe: 200 },
    { x: 0, y: 300, breite: 100, höhe: 100 },
    { x: 300, y: 0, breite: 100, höhe: 100 }
  ];
  