interface Grupomusical {
  Nombredelgrupo: String;
  Añodefundacion: Number;
  Activo: Boolean;
  Generomusical: String;
}

const poprock = "Pop rock";
const rock = "Rock";
const hardrock = "Hard rock";
const clasica = "Clásica";

//const de grupos

const grupo1: Grupomusical = {
  Nombredelgrupo: "The Beatles",
  Añodefundacion: 1960,
  Activo: true,
  Generomusical: "Pop Rock",
};
const grupo2: Grupomusical = {
  Nombredelgrupo: "Queen",
  Añodefundacion: 1970,
  Activo: false,
  Generomusical: "Rock",
};
const grupo3: Grupomusical = {
  Nombredelgrupo: "AC DC",
  Añodefundacion: 1973,
  Activo: true,
  Generomusical: "Pop Rock",
};

const grupo4: Grupomusical = {
  Nombredelgrupo: "The Ludwig van Beethoven",
  Añodefundacion: 1770,
  Activo: false,
  Generomusical: "Clásica",
};

const grupo5: Grupomusical = {
  Nombredelgrupo: "The Rolling Stones",
  Añodefundacion: 1962,
  Activo: true,
  Generomusical: "Rock",
};

console.log(grupo1);
console.log(grupo2);
console.log(grupo3);
console.log(grupo4);
console.log(grupo5);
