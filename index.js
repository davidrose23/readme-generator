// import packages
import fs from 'fs';
import inquirer from 'inquirer';



// generate prompt questions
inquirer.prompt(
    [
        {
            type: 'input',
            message: 'What is the title of the project?',
            name: 'title',
            validate: (value)=>{ if(value){return true} else {return 'A value is needed to continue'}},
        },
        {
            type: 'input',
            message: 'How is this application installed?',
            name: 'installation',
            validate: (value)=>{ if(value){return true} else {return 'A value is needed to continue'}},
        },
        {
            type: 'input',
            message: 'Give a description of this application',
            name: 'description',
            validate: (value)=>{ if(value){return true} else {return 'A value is needed to continue'}},
        },
        {
            type: 'input',
            message: 'What are the guidelines for contributing?',
            name: 'contributions',
            validate: (value)=>{ if(value){return true} else {return 'A value is needed to continue'}},
        },
        {
            type: 'input',
            message: 'Please enter usage information about this application',
            name: 'usage',
            validate: (value)=>{ if(value){return true} else {return 'A value is needed to continue'}},
        },
        {
            type: 'input',
            message: 'Any credits?',
            name: 'credits',
            validate: (value)=>{ if(value){return true} else {return 'A value is needed to continue'}},
        },
        {
            type: 'list',
            message: 'What license did you use?',
            name: 'license',
            choices:['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A'],
            validate: (value)=>{ if(value){return true} else {return 'A value is needed to continue'}},
        },
        {
            type: 'input',
            message:'Github username:',
            name: 'git',
            validate: (value)=>{ if(value){return true} else {return 'A value is needed to continue'}},
        },
        {
            type: 'input',
            message: 'E-mail:',
            name: 'email',
            validate: (value)=>{ if(value){return true} else {return 'A value is needed to continue'}},
        }
    ]
).then(({
    title,
    installation,
    description,
    contributions,
    usage,
    credits,
    license,
    git,
    email,

})=>{
    // template for ReadMEW file
const template = `# ${title}

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Credits](#credits)
* [License](#license)
* [Contact](#contact)

# Description
${description}
# Installation
${installation}
# Usage
${usage}
# Contribution
${contributions}
# Credits
${credits}
# License
${license}

# Contact
* Email: ${email}
* GitHub: ${git}`;
createFile(title, template);
}
);

function createFile(fileName, data){
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data,(err)=>{
        if(err){
            console.log(err);
        }
        console.log('ReadMe has been generated');
    })
}

