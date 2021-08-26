// [ "GNU General Public License v3.0", "GNU Lesser General Public License family", "GNU Lesser General Public License v3.0", "ISC", "MIT", "Mozilla Public License 2.0", "SIL Open Font License 1.1", "The Unlicense", "zLib License"]

// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";
  switch(license) {
    case "Apache license 2.0":
      licenseBadge = "https://img.shields.io/badge/License-Apache%202.0-blue.svg"
      break;
    case "Artistic license 2.0":
      licenseBadge = "https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg"
      break;
    case "Boost Software License 1.0":
      licenseBadge = "https://img.shields.io/badge/License-Boost%201.0-lightblue.svg"
      break;
    case "BSD 2-clause Simplified license":
      licenseBadge = "https://img.shields.io/badge/License-BSD%202--Clause-orange.svg"
      break;
    case "BSD 3-clause New or Revised license":
      licenseBadge = "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg"
      break;
    case "Creative Commons Zero v1.0 Universal":
      licenseBadge = "https://licensebuttons.net/l/zero/1.0/80x15.png"
      break;
    case "Creative Commons Attribution 4.0":
      licenseBadge = "https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg"
      break;
    case "Creative Commons Attribution Share Alike 4.0":
      licenseBadge = "https://licensebuttons.net/l/by-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-sa/4.0/"
      break;
    case "Do What The F*ck You Want To Public License":
      licenseBadge = "https://img.shields.io/badge/License-WTFPL-brightgreen.svg"
      break;
    case "Eclipse Public License 1.0":
      licenseBadge = "https://img.shields.io/badge/License-EPL%201.0-red.svg"
      break;
    case "GNU Affero General Public License v3.0":
      licenseBadge = "https://img.shields.io/badge/License-AGPL%20v3-blue.svg"
      break;
    case "GNU General Public License v2.0":
      licenseBadge = "https://img.shields.io/badge/License-GPL%20v2-blue.svg"
      break;
    case "GNU General Public License v3.0":
      licenseBadge = "https://img.shields.io/badge/License-GPLv3-blue.svg"
      break;
    case "GNU Lesser General Public License v3.0":
      licenseBadge = "https://img.shields.io/badge/License-LGPL%20v3-blue.svg"
      break;
    case "ISC":
      licenseBadge = "https://img.shields.io/badge/License-ISC-blue.svg"
      break;
    case "MIT":
      licenseBadge = "https://img.shields.io/badge/License-MIT-yellow.svg"
      break;
    case "Mozilla Public License 2.0":
      licenseBadge = "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg"
      break;
    case "SIL Open Font License 1.1":
      licenseBadge = "https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg"
      break;
    case "The Unlicense":
      licenseBadge = "https://img.shields.io/badge/license-Unlicense-blue.svg"
      break;
    case "zLib License":
      licenseBadge = "https://img.shields.io/badge/License-Zlib-lightgrey.svg"
      break;          
  };
  return licenseBadge;
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }



module.exports = generateMarkdown;

const generateMarkdown = (answers) =>
  let 
  return `
  
  `
