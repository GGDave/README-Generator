const inquirer = require(`inquirer`);
// in the above line we create a constant to equal "require(`inquirer`)" so the inquirer module can gather the information from inquirer.prompt and apply it to an application
const fs = require(`fs`);
// in the above line we set cont fs to = require(`fs`) so we can save the information inputted by the user and save it to the readme file. both line 1 and line 3 need to be at the top of the javascript file
// so the correct modules get inported and the javascript file can run correctly.



inquirer.prompt(   // this line will begin the inquirer function. the command line will ask the user the following questions to gather the information.
  [
   {
     type: 'input', // this line will determin what type of information will be inserted.
     message: 'Title of my project?', //this is the message that will display in the command line.
     name: 'ProjectTittle', // the name: parameter will be used as a way to refer to the inputed information
     validate: (value) =>{ if (value){return true} else {return `Please enter a valid project name`}}, //

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


 

   