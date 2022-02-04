const arrayBici = [

    biciFiamma = {
        nome: "Fiamma",
        peso: 30
    },

    biciLampo = {
        nome: "Lampo",
        peso: 20
    },

    biciTurbine = {
        nome: "Turbine",
        peso: 40
    }

]

let {peso, nome} = arrayBici[0];

for (let i = 0; i < arrayBici.length; i++) {

    if (peso > arrayBici[i].peso) {
        peso = arrayBici[i].peso;
        nome = arrayBici[i].nome;
    }
}

console.log(peso);
alert (`La bicicletta con il peso minore è il modello ${nome} dal peso di ${peso} kg.`);