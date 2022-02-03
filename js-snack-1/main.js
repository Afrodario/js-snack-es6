const arrayBici = [

    biciFiamma = {
        "nome": "Fiamma",
        "peso": 30
    },

    biciLampo = {
        "nome": "Lampo",
        "peso": 20
    },

    biciTurbine = {
        "nome": "Turbine",
        "peso": 40
    }

]

const [x, y, z] = arrayBici;
console.log(arrayBici[1]);

alert (`La bici con il peso minore è ${arrayBici[1].nome}`);