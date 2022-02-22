// Nodejs modules used
const inquirer = require("inquirer");
const fs = require("fs");

// Inquirer prompts
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project title?",
      name: "title",
      // Property validation to ensure user has submitted relevant information for their README.md file
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "A value is needed to continue";
        }
      },
    },
    {
      type: "input",
      message:
        'What is your user story? This follows traditional "AS A, I WANT, SO THAT" formatting. AS A: ',
      name: "userStory",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "A value is needed to continue";
        }
      },
    },
    {
      type: "input",
      message:
        'What is your user story? This follows traditional "AS A, I WANT, SO THAT" formatting. I WANT: ',
      name: "userStory2",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "A value is needed to continue";
        }
      },
    },
    {
      type: "input",
      message:
        'What is your user story? This follows traditional "AS A, I WANT, SO THAT" formatting. SO THAT: ',
      name: "userStory3",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "A value is needed to continue";
        }
      },
    },
    {
      type: "input",
      message: "What is the description for this project?",
      name: "description",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "A value is needed to continue";
        }
      },
    },
    {
      type: "input",
      message: "What was your installation steps process for this project?",
      name: "installation",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "A value is needed to continue";
        }
      },
    },
    {
      type: "input",
      message: "What are the use cases for your app?",
      name: "usage",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "A value is needed to continue";
        }
      },
    },
    {
      type: "list",
      message: "What is the license used for this project?",
      name: "license",
      choices: ["MIT", "ISC"],
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "A value is needed to continue";
        }
      },
    },
    {
      type: "input",
      message:
        "What are the resources/contributions you used for this project?",
      name: "contributing",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "A value is needed to continue";
        }
      },
    },
    {
      type: "input",
      message: "How do you use your application?",
      name: "howTo",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "A value is needed to continue";
        }
      },
    },
    {
      type: "input",
      message: "What were your biggest challenges for this project?",
      name: "challenges",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "A value is needed to continue";
        }
      },
    },
    {
      type: "input",
      message: "What are your future development plans?",
      name: "futureDevelopments",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "A value is needed to continue";
        }
      },
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "github",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "A value is needed to continue";
        }
      },
    },
    {
      type: "input",
      message: "Please link your LinkedIn account:",
      name: "linkedin",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "A value is needed to continue";
        }
      },
    },
    {
      type: "input",
      message: "Please enter your email address:",
      name: "email",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "A value is needed to continue";
        }
      },
    },
  ])
//   formatting order for the questionaire
  .then(
    ({
      title,
      userStory,
      userStory2,
      userStory3,
      description,
      installation,
      usage,
      howTo,
      license,
      contributing,
      challenges,
      futureDevelopments,
      github,
      linkedin,
      email,
    }) => {
      const template = `# ${title}
## USER STORY
AS A ${userStory}

I WANT ${userStory2}

SO THAT ${userStory3}

## DESCRIPTION
${description}

## TABLE OF CONTENTS
- [INSTALLATION](#installation)
- [USAGE](#usage)
- [LICENSE](#license)
- [CONTRIBUTING](#contributing)
- [QUESTIONS](#questions)



## INSTALLATION
${installation}
    
## USAGE
${usage}
${howTo}
    
## LICENSE
[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})

The license included for the project is under ${license}

## CONTRIBUTING
${contributing}

## CHALLENGES FACED
${challenges}

## FUTURE DEVELOPMENTS
${futureDevelopments}

## QUESTIONS
If you have any further questions about this module or improvement ideas, please feel free to connect on either GitHub or LinkedIn, or email me at:
* GitHub: https://github.com/${github}
* LinkedIn: ${linkedin}
* E-Mail: ${email}`;

      createNewReadMe(title, template);
    }
  );
function createNewReadMe(fileName, data) {
  fs.writeFile(
    `./${fileName.toUpperCase().split(" ").join("")}.md`,
    data,
    (err) => {
      if (err) {
        console.log(err);
      }
      console.log("README.md File Created!");
    }
  );
}
