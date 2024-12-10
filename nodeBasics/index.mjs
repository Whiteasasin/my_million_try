// import { chalk } from '../package.json';


// console.log(chalk.blue('Hello world!'));

// const chalk = require('chalk');
// console.log(chalk.blue('Hello world!')); 

// const chalk = require('chalk');
// const log = console.log;
// const error = chalk.bold.red;

//  log(chalk.green.underline.bold(hashRole));

// work this ???????? //////////

// const chalk = import("chalk").then(m=>m.default);

// // Option 1
// async function main(){
//   console.log((await chalk).gray(">", ...commands));
// }

// // Option 2
// async function main2(){
//   const _chalk = await chalk;
//   console.log(_chalk.gray(">", ...commands));
// }


import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));

// const chalk = require("chalk");
// const log = console.log;

// log(
// 	chalk.red("Строка красного цвета\n") +
// 	chalk.green("Строка зеленого цвета\n") +
// 	chalk.blue("Строка синего цвета")
// );