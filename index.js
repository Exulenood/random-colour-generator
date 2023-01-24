import chalk from 'chalk';
import rcolor from 'rcolor';

// console.log(rcolor()); // tested 10.1.2023 20:12 after installing rcolor: OK! Output: #79a8f2
// console.log(chalk.hex('##79a8f2')('this is a color test')); // tested 10.1.2023 20:25 after installing chalk: OK! Output: 'this is a color test' in #79a8f2
// console.log(`Hue: ${chosenHue} Luminosity: ${chosenLuminosity}`); // tested 10.1.2023 20:50 OK!
// tested document 10.01.2023 23:39 OK!

const chosenHue = process.argv[2];
const chosenLuminosity = process.argv[3];
const randomHueRange = Math.random() * (1 / 6);
const randomLumiRange = Math.random() * (1 / 8);
let setHue;
let setLuminosity;

if (chosenHue === 'red') {
  setHue = 0.916 + randomHueRange;
} else if (chosenHue === 'green') {
  setHue = 1.25 + randomHueRange;
} else if (chosenHue === 'blue') {
  setHue = 1.583 + randomHueRange;
} else if (chosenHue === undefined) {
  setHue = Math.random();
} else {
  console.log(
    'please define a hue-range with the tags "red", "green" or "blue',
  );
}

if (chosenLuminosity === 'light') {
  setLuminosity = 1 - randomLumiRange;
} else if (chosenLuminosity === 'dark') {
  setLuminosity = 0.5 + randomLumiRange;
} else if (chosenLuminosity === undefined) {
  setLuminosity = 0.8;
} else {
  console.log(
    'please define a luminosity-range with the tags "light" or "dark"',
  );
}

const hexColor = rcolor({
  hue: setHue % 1,
  saturation: 0.5,
  value: setLuminosity,
});

console.log(
  chalk.hex(hexColor)(`${'#'.repeat(34)}
${'#'.repeat(34)}
${'#'.repeat(34)}
${'#'.repeat(8)}${' '.repeat(18)}${'#'.repeat(8)}
${'#'.repeat(8)}     ${hexColor}      ${'#'.repeat(8)}
${'#'.repeat(8)}${' '.repeat(18)}${'#'.repeat(8)}
${'#'.repeat(34)}
${'#'.repeat(34)}
${'#'.repeat(34)}`),
);
