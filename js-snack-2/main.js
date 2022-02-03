const disneyVillains = [

    Scar = {
        "nome": "Scar",
        "punti_fatti": 0,
        "falli_subiti": 0
    },

    Ursula = {
        "nome": "Ursula",
        "punti_fatti": 0,
        "falli_subiti": 0
    },

    Crudelia = {
        "nome": "Crudelia",
        "punti_fatti": 0,
        "falli_subiti": 0
    },

    Jafar = {
        "nome": "Jafar",
        "punti_fatti": 0,
        "falli_subiti": 0
    },

]

// console.log(disneyVillains[0].punti_fatti);

let nuovoArray = [];

for (let i = 0; i < disneyVillains.length; i++) {
    
    disneyVillains[i].punti_fatti = randomNumber(1,10);
    console.log(`I punti fatti da ${disneyVillains[i].nome} sono ${disneyVillains[i].punti_fatti}`);

    disneyVillains[i].falli_subiti = randomNumber(1,10);
    console.log(`I falli subiti da ${disneyVillains[i].nome} sono ${disneyVillains[i].falli_subiti}`);
}

const [a, b, c, d] = disneyVillains;








function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}