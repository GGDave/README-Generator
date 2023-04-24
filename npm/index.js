const inquirer = require(`inquirer`);
const fs = require(`fs`);


inquirer.prompt(
  [
   {
     type: 'input',
     message: 'Title of my project?',
     name: 'ProjectTittle',
     validate: (value) =>{ if (value){return true} else {return `Please enter a valid project name`}},

   },
   {
    type: 'input',
    message: 'Description?',
    name: 'Description',
    validate: (value) =>{ if (value){return true} else {return `Please enter a Description`}},
   }, 
   {
    type: 'input',
    message: 'Table of Contents?',
    name: 'TableOfContents',
    validate: (value) =>{ if (value){return true} else {return `Please enter a valid option`}},
  },
  {
    type: 'input',
    message: 'Installation?',
    name: 'installation',
    validate: (value) =>{ if (value){return true} else {return `Please enter a valid option`}},
  },
  {
    type: 'input',
    message: 'Usage?',
    name: 'Usage',
    validate: (value) =>{ if (value){return true} else {return `Please enter a valid option`}},
  },
  {
    type: 'list',
    message: 'License Name?',
    name: 'License',
    choices:[`None`, `Apache 2.0`, `GNU 3.0`, `MIT`, `BDS2`, `BDS3`],
    validate: (value) =>{ if (value){return true} else {return `Please enter a license name`}},
  }, 
  {
    type: 'input',
    message: 'Contributing?',
    name: 'Contributing',
    validate: (value) =>{ if (value){return true} else {return `Please enter a valid option`}},
  },
  {
    type: 'input',
    message: 'Tests?',
    name: 'Test',
    validate: (value) =>{ if (value){return true} else {return `Please enter a valid option`}},
  },
  {
    type: 'input',
    message: 'Questions?',
    name: 'Questions',
    validate: (value) =>{ if (value){return true} else {return `Please enter a valid option`}},
  },
  {
    type: 'input',
    message: 'GitHub username:',
    name: 'git',
    validate: (value) =>{ if (value){return true} else {return `Please enter a valid option`}},
  },
  {
    type: 'input',
    message: 'E-mail:?',
    name: 'EMail',
    validate: (value) =>{ if (value){return true} else {return `Please enter a valid option`}},
  }

  ])

 .then(({
    ProjectTittle,
    License,
    Description,
    TableOfContents,
    installation,
    Usage,
    Contributing,
    Test,
    Questions,
    git,
    EMail
 })=>{

    const template = `# ${ProjectTittle} # ${License}
    
    * [Installation](#installation)
    * [Usage](#Usage)
    * [Contributing](#Contributing)
    * [Tests](#Tests)
    * [Questions](#Questions)
   
   
   
    #ProjectTittle
    ${ProjectTittle}
    ##License
    ${License}
    ##TableOfContents
    ${TableOfContents}
    ##Usage 
    ${Usage}
    ##Description
    ${Description}
    ##Installation 
    ${installation}
    ##Contributing
    ${Contributing}
    ##Test
    ${Test}
    #Questions
    ${Questions}
    Github: ${git}
    E-Mail: ${EMail}`;


    createNewFile(ProjectTittle,template);
}
);

function createNewFile(fileName,data){
 fs.writeFile(`./${fileName.toLowerCase().split(``).join(``)}.md`,data,(err)=>{
  if (err){
    console.log(err);
  }
  console.log(`README has been successfully created`);
 })

}


 

   