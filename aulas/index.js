let nomeHeroi = "";
let nivelExperiecia = "";
let nivelHeroi = "";

if (nivelExperiecia <= 1000) {
    nivelHeroi = "Ferro";
} else if (nivelExperiecia <= 2000) {
    nivelHeroi = "Bronze";
} else if (nivelExperiecia <= 5000) {
    nivelHeroi = "Prata";
} else if (nivelExperiecia <= 7000) {
    nivelHeroi = "Ouro";
} else if (nivelExperiecia <= 8000) {
    nivelHeroi = "Platina";
} else if (nivelExperiecia <= 9000) {
    nivelHeroi = "Ascendente";
}else if (nivelExperiecia <= 10000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante"
};

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi );
