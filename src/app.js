/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["our", "my", "your"];
let adj = ["great", "super", "best"];
let noun = ["frog", "lion", "jack"];
let ext = [".com", ".net"];

function generadorDominios() {
  var domains = [];

  for (let pro of pronoun) {
    for (let adjetivo of adj) {
      for (let noun of noun) {
        ext.forEach(ext => {
          domains.push(pro + adjetivo + noun + ext);
        });
      }
    }
  }
  return domains;
}

window.onload = function() {
  //write your code here
  console.log(generadorDominios());
};
