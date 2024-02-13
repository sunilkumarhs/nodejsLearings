#!/usr/bin/env node

// const yargs = require("yargs");

// const { argv } = yargs(process.argv);

const inquirer = require("inquirer");

const printFivePokMoves = async (pokemanName) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemanName}`
  );
  const pokemanData = await response.json();
  const moves = pokemanData.moves.map(({ move }) => move.name);
  console.log(moves.slice(0, 5));
};

const prompt = inquirer.createPromptModule();

prompt([
  {
    type: "input",
    name: "pokemon",
    message: "Enter a pokemon name to view its 5 moves",
  },
]).then((ans) => {
  const pokemon = ans.pokemon;
  printFivePokMoves(pokemon);
});
