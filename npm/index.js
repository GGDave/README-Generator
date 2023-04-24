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
     validate: (value) =>{ if (value){return true} else {return `Please enter a valid project name`}}, // this line is added to verify that the user inputs a valid answer.

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
    type: 'list', //the list option allows the user to select an option from the choises added by the developer.
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

 .then(({  //the ".then" section will contain the objects with the infomation inputed from the user. by using template literal syntax ${} we can target that information directly.
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
    //in the section bellow we begin to form the template for the read me file. we can place any section in any location by moving the template literal syntax ${}  
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


    createNewFile(ProjectTittle,template); // in this line we create a "createNewFile" function so we can pass the data to the "fs" module allowing us to then create the readme file with the correct information.
}
);

function createNewFile(fileName,data){  //file name will be use as the title of the readme.md and data will contain the information above.
 fs.writeFile(`./${fileName.toLowerCase().split(``).join(``)}.md`,data,(err)=>{ // in this line we call the "fs" module to create our readme file, we add .split and .join to remove any spaces and combines the resulting string to.md
  if (err){ //we add an "if err" statement as added troubleshooting help in finding errors in the command line.  
    console.log(err);
  }
  console.log(`README has been successfully created`);
 })

}


 

   