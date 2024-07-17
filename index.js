// GIVEN a command-line application that accepts user input
const inquirer = require('inquirer');
const fs = require('fs');

const licenseBadges = {
    "Apache License 2.0": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "GNU General Public License v3.0": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "MIT License": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "Boost Software License 1.0": "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    "BSD 3-Clause License": "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    "BSD 2-Clause License": "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
    "Eclipse Public License 1.0": "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    "GNU General Pulic License v3.0": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "GNU Affero General Public License v3.0": "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
    "GNU General Public License v2.0": "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
    "GNU Lesser General Public License v2.1": "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
    "Mozilla Public License 2.0": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    "The Unlicense": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
    "Creative Commons Zero v1.0 Universal": "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
    // Add more badges for other licenses as needed
};
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

function promptUser() {
    return inquirer.prompt([

        // WHEN I enter my name
        // THEN this is displayed as the user name of the README
        {
            type: 'input',
            name: 'username',
            message: 'What is your username?',
        },

        // WHEN I enter my project title
        // THEN this is displayed as the title of the README
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
        },

        // WHEN I entera description
        // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
        {
            type: 'input',
            name: 'description',
            message: 'What is your description?',
        },

        // WHEN I enter installation instructions
        // THEN this information is added to the sections of the README entitled instructions
        {
            type: 'input',
            name: 'installation',
            message: 'What are your installation instructions?',
        },

        // WHEN I enter usage information
        // THEN this information is added to the sections of the README entitled information
        {
            type: 'input',
            name: 'usage',
            message: 'What about your usage information?',
        },

        // WHEN I enter contribution guidelines
        // THEN this information is added to the sections of the README entitled contribution guidelines
        {
            type: 'input',
            name: 'guidelines',
            message: 'What would some of your contribution guidelines be?',
        },

        // WHEN I enter test instructions
        // THEN this information is added to the sections of the README entitled instructions
        {
            type: 'input',
            name: 'instructions',
            message: 'What about your test instructions?',
        },

        {
            type: 'list',
            name: 'licenses',
            message: 'Choose a license',
            choices: [
                "Apache License 2.0", 
                "Eclipse Public License 1.0",
                "MIT License", 
                "BSD 2-Clause License",
                "BSD 3-Clause License", 
                "Boost Software License 1.0", 
                "Creative Commons Zero v1.0 Universal", 
                "GNU General Pulic License v3.0",
                "GNU Affero General Public License v3.0",
                "GNU General Public License v2.0", 
                "GNU Lesser General Public License v2.1",
                "Mozilla Public License 2.0", 
                "The Unlicense"
            ]
        },

        // WHEN I enter my GitHub username
        // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
        },
        // WHEN I enter my email address
        // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email.',
        }
    ])};

function generateREADME(answers) {

    const licenseBadge = licenseBadges[answers.licenses];

    return `
# ${answers.title}

## Username
${answers.username}

## License
${licenseBadge}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}


`;
}

    