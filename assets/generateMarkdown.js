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
      licenseBadge = "https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg"
      break;
    case "Creative Commons Attribution 4.0":
      licenseBadge = "https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg"
      break;
    case "Creative Commons Attribution Share Alike 4.0":
      licenseBadge = "https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg"
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
function renderLicenseLink(license) {
  let licenseLink = "";
  switch(license) {
    case "Apache license 2.0":
      licenseLink = "https://opensource.org/licenses/Apache-2.0"
      break;
    case "Artistic license 2.0":
      licenseLink = ""
      break;
    case "Boost Software License 1.0":
      licenseLink = "https://www.boost.org/LICENSE_1_0.txt"
      break;
    case "BSD 2-clause Simplified license":
      licenseLink = "https://opensource.org/licenses/BSD-2-Clause"
      break;
    case "BSD 3-clause New or Revised license":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause"
      break;
    case "Creative Commons Zero v1.0 Universal":
      licenseLink = "http://creativecommons.org/publicdomain/zero/1.0/"
      break;
    case "Creative Commons Attribution 4.0":
      licenseLink = "https://creativecommons.org/licenses/by/4.0/"
      break;
    case "Creative Commons Attribution Share Alike 4.0":
      licenseLink = "https://creativecommons.org/licenses/by-sa/4.0/"
      break;
    case "Do What The F*ck You Want To Public License":
      licenseLink = "http://www.wtfpl.net/about/"
      break;
    case "Eclipse Public License 1.0":
      licenseLink = "https://opensource.org/licenses/EPL-1.0"
      break;
    case "GNU Affero General Public License v3.0":
      licenseLink = "https://www.gnu.org/licenses/agpl-3.0"
      break;
    case "GNU General Public License v2.0":
      licenseLink = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
      break;
    case "GNU General Public License v3.0":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0"
      break;
    case "GNU Lesser General Public License v3.0":
      licenseLink = "https://www.gnu.org/licenses/lgpl-3.0"
      break;
    case "ISC":
      licenseLink = "https://opensource.org/licenses/ISC"
      break;
    case "MIT":
      licenseLink = "https://opensource.org/licenses/MIT"
      break;
    case "Mozilla Public License 2.0":
      licenseLink = "https://opensource.org/licenses/MPL-2.0"
      break;
    case "SIL Open Font License 1.1":
      licenseLink = "https://opensource.org/licenses/OFL-1.1"
      break;
    case "The Unlicense":
      licenseLink = "http://unlicense.org/"
      break;
    case "zLib License":
      licenseLink = "https://opensource.org/licenses/Zlib"
      break;          
  };
  return licenseLink;
}


// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {
  let renderedBadge = renderLicenseBadge(license);
  let renderedLink = renderLicenseLink(license)
  let licenseSection = "";
  if (renderedBadge != "") {
    licenseSection = `[![License](${renderedBadge})](${renderedLink})`
  }
  return licenseSection;
}

// // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let renderSection = renderLicenseSection(data.license);

  return `
  # ${data.title}

  ${renderSection}

  ## Description
  ${data.description}

  ## Table of contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [How to contribute](#contribute)
  - [Tests](#tests)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  ${data.license}
  ${renderSection}

  ## How to contribute
  ${data.contribute}

  
  ## Tests
  ${data.tests}
  `;
}

module.exports = generateMarkdown;
