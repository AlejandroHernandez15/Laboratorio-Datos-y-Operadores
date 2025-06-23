interface Grupomusical {
  Nombredelgrupo: string;
  Fundacion: number;
  Activo: boolean;
  Generomusical: string;
}

/*
emoticonos
🎸Rock  
🎵Pop Rock
🤘Hard Rock
🎼Clásica
*/
const Nombredelgrupo =
  "color: black; font-size: 16px; background-color: green;";

const poprock = "🎵 Pop Rock";
const rock = "🎸 Rock ";
const hardrock = "🤘 Hard Rock";
const clasica = "🎼 Clásica";

//const de grupos

const grupo1: Grupomusical = {
  Nombredelgrupo: "The Beatles",
  Fundacion: 1960,
  Activo: true,
  Generomusical: `${poprock}`,
};

const grupo2: Grupomusical = {
  Nombredelgrupo: "Queen",
  Fundacion: 1970,
  Activo: false,
  Generomusical: `${rock}`,
};
const grupo3: Grupomusical = {
  Nombredelgrupo: "AC DC",
  Fundacion: 1973,
  Activo: true,
  Generomusical: `${poprock}`,
};

const grupo4: Grupomusical = {
  Nombredelgrupo: "The Ludwig van Beethoven",
  Fundacion: 1770,
  Activo: false,
  Generomusical: `${clasica}`,
};

const grupo5: Grupomusical = {
  Nombredelgrupo: "The Rolling Stones",
  Fundacion: 1962,
  Activo: true,
  Generomusical: `${rock}`,
};

console.log(
  "%cThe Beatles",
  "color: black; font-weight: bold; font-size: 26px; background-color: green"
);

console.log(grupo1);
console.log(
  "%cQueen",
  "color: black; background-color: green;  font-weight: bold; font-size:26px;"
);
console.log(grupo2);
console.log(
  "%cAC DC",
  "color: black; font-weight: bold; background-color: green; font-size:26px"
);
console.log(grupo3);
console.log(
  "%cThe Ludwig van Beethoven",
  "color: black; background-color:green; font-weight: bold; font-size:26px"
);
console.log(grupo4);
console.log(
  "%cThe Rolling Stones",
  " color:black; font-weight: bold; background-color: green; font-size: 26px;"
);
console.log(grupo5);
