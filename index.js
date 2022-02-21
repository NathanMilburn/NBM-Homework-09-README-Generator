// Nodejs modules used
const inquirer = require('inquirer');
const fs = require('fs');
// const { message } = require('statuses');

// Inquirer prompts
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title',
            // Property validation to ensure user has submitted relevant information for their README.md file
            validate: (value)=>{if(value){return true} else{return 'A value is needed to continue'}}
        },
        {
            type: 'input',
            message: 'What is your user story?',
            name: 'userStory',
            validate: (value)=>{if(value){return true} else{return 'A value is needed to continue'}}
        },
        {
            type: 'input',
            message: 'What was your steps process for this project?',
            name: 'process',
            validate: (value)=>{if(value){return true} else{return 'A value is needed to continue'}}
        },
        {
            type: 'input',
            message: 'What are the use cases for your app?',
            name: 'useCases',
            validate: (value)=>{if(value){return true} else{return 'A value is needed to continue'}}
        },
        {
            type: 'input',
            message: 'How do you use your application?',
            name: 'howTo',
            validate: (value)=>{if(value){return true} else{return 'A value is needed to continue'}}
        },
        {
            type: 'input',
            message: 'What are your future development plans?',
            name: 'futureDevelopments',
            validate: (value)=>{if(value){return true} else{return 'A value is needed to continue'}}
        },
        {
            type: 'input',
            message: 'What were your biggest challenges for this project?',
            name: 'challenges',
            validate: (value)=>{if(value){return true} else{return 'A value is needed to continue'}}
        },
        {
            type: 'input',
            message: 'What are the links to your deployed repository and application?',
            name: 'deployedLinks',
            validate: (value)=>{if(value){return true} else{return 'A value is needed to continue'}}
        }
    ])
    .then(({
        title,
        userStory,
        process,
        useCases,
        howTo,
        futureDevelopments,
        challenges,
        deployedLinks
    }) => {
    const template = `# ${title}
    ${userStory}
    ${process}
    ${useCases}
    ${howTo}
    ${futureDevelopments}
    ${challenges}
    ${deployedLinks}`;
    createNewReadMe(title, template);
    }
    );
    function createNewReadMe(fileName, data){
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`, data, (err) => {
        if(err){
            console.log(err)
        }
        console.log('README.md File Created!');
    })
    }

    // Previously developed code based on index.html generator from previous class mini project.
    // .then((answers) => {
    //     const generateREADMEPage = generateHTML(answers)

    //     fs.writeFile('README.md', generateREADMEPage, (err) => 
    //     err ? console.log(err) : console.log('README.md File Created!')
    //     );
    // });