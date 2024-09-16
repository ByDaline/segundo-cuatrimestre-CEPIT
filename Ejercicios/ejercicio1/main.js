'use strict'

/*
Consumir una API publica con el método fetch.
Luego, una vez obtenidos los datos, vamos a
mostrarlos en el navegador (pueden darle formato
de card)

API utilizada: https://rickandmortyapi.com/

*/

/* Los números al final del enlace indica el id del personaje que se trae de la API*/
const apiContent = "https://rickandmortyapi.com/api/character/1,4,10";

/* Trae name y image de los personajes seleccionados (1,4 y 10) y lo crea en el html */
function createCard (character) {
    character.forEach(rickandmorty => {
        const containerRickandmorty = document.querySelector('.container');

        const img = document.createElement('img');
        img.classList.add('imageRickAndMorty');
        img.src = rickandmorty.image;
        img.alt = rickandmorty.name;

        const h3 = document.createElement('h3');
        h3.classList.add('nameRickAndMorty');
        h3.textContent = rickandmorty.name;

        const carRickandmorty = document.createElement('div');
        carRickandmorty.classList.add('car-rickandmorty');
        carRickandmorty.appendChild(img);
        carRickandmorty.appendChild(h3);
        containerRickandmorty.appendChild(carRickandmorty);
    });
}


async function getCharacters () {
    /* Manejo de errores try y catch*/
    try {
        const response = await fetch(apiContent);
        const data = await response.json();

        console.log(data);

        createCard(data);
        
    } catch (err) {
        console.log(err);
        
    }
}

getCharacters();
