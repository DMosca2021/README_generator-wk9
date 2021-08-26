// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
// const generateMarkdown = require("./assets/generateMarkdown.js")

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
    "Project Title:",
    "Description:",
    "Table of contents:",
    "Installation:",
    "Usage:",
    "Credits:",
    "License:",
    "How to contribute:",
    "Tests:",
]

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: questions[0],
    },
    {
      type: 'input',
      name: 'description',
      message: questions[1],
    },
    {
      type: 'input',
      name: 'contents',
      message: questions[2],
    },
    {
      type: 'input',
      name: 'install',
      message: questions[3],
    },
    {
      type: 'input',
      name: 'usage',
      message: questions[4],
    },
    {
      type: 'input',
      name: 'credits',
      message: questions[5],
    },
    {
      type: 'list',
      name: 'license',
      message: questions[6],
      choices: ["Apache license 2.0", "Artistic license 2.0", "Boost Software License 1.0", "BSD 2-clause Simplified license", "BSD 3-clause New or Revised license", "Creative Commons Zero v1.0 Universal", "Creative Commons Attribution 4.0", "Creative Commons Attribution Share Alike 4.0", "Do What The F*ck You Want To Public License", "Eclipse Public License 1.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU General Public License v3.0", "GNU Lesser General Public License family", "GNU Lesser General Public License v3.0", "ISC", "MIT", "Mozilla Public License 2.0", "SIL Open Font License 1.1", "The Unlicense", "zLib License"]
    },
    {
      type: 'input',
      name: 'contribute',
      message: questions[7],
    },
    {
      type: 'input',
      name: 'tests',
      message: questions[8],
    },
  ]);
};

// TODO: Create a function to write README file
// TODO: Create a function to initialize app
const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};
// Function call to initialize app
init();