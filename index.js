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
      message:
        "What are the links to your deployed repository and application?",
      name: "deployedLinks",
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
      message: "Please link your LinkedIn account.",
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
      message: "Please enter your email address.",
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
      futureDevelopments,
      challenges,
      deployedLinks,
      github,
      linkedin,
      email,
    }) => {
      const template = `# ${title}
## DESCRIPTION
${description}

## TABLE OF CONTENTS
- [USERSTORY](#userStory)
- [INSTALLATION](#installation)
- [USAGE](#usage)
- [LICENSE](#license)
- [CONTACT](#contact)

## USER STORY
AS A ${userStory}
I WANT ${userStory2}
SO THAT ${userStory3}


## INSTALLATION
${installation}
    
## USE CASES
${usage}
    
## HOW TO USE APPLICATION
${howTo}
    
## FUTURE DEVELOPMENTS
${futureDevelopments}
    
## CHALLENGES FACED
${challenges}
    
## LINKS TO DEPLOYED APPLICATION
${deployedLinks}

## LICENSE
MIT License

Copyright (c) [2022] [Nathan Milburn]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## CONTACT
* GitHub: ${github}
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

// Previously developed code based on index.html generator from previous class mini project.
// .then((answers) => {
//     const generateREADMEPage = generateHTML(answers)

//     fs.writeFile('README.md', generateREADMEPage, (err) =>
//     err ? console.log(err) : console.log('README.md File Created!')
//     );
// });
