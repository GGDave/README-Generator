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
    name: 'Install',
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
    Description,
    TableOfContents,
    Install,
    Usage,
    License,
    Contributing,
    Test,
    Questions,
    git,
    EMail
 })=>{

    const template = `# ${ProjectTittle}
    
    ##ProjectTittle
    ${ProjectTittle}
    ##Description
    ${Description}
    ##TableOfContents
    ${TableOfContents}
    ##Install
    ${Install}
    ##Usage
    ${Usage}
    ##License
    ${License}
    ##Contributing
    ${Contributing}
    ##Test
    ${Test}
    #Questions
    ${Questions}

    // # Contact
    // * Github: ${git}
    // * E-Mail: ${EMail}`;
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

// const { ifError } = require("assert");
// const { log } = require("console");
//   {
//     type: 'input',
//     message: 'Would you like to use a license',
//     name: 'License',
//     validate: (value) =>{ if (value){return true} else {return `Please enter a license name`}},
// },


    // * [ProjectTittle](#ProjectTittle)
    //     * [Description](#Description)
    //     * [TableOfContents](#TableOfContents)
    //     * [Install](#Install)
    //     * [Usage](#Usage)
    //     * [License](#License)
    //     * [Contributing](#Contributing)
    //     * [Test](#Test)
    //     * [Questions](#Questions)
    





//     fs.writeFile('README.md', content, (err) => {
//       if (err) throw err;
//       console.log('The file has been saved!');
//     });
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// .then((answers) => {
//     const { ProjectTittle, Description, Table, Install, Usage, License, Contributing, Test, Questions } = answers;
    
//     const content = `
//       ## ProjectTittle
//      ${ProjectTittle}
      
//       ## Description
//       ${Description}
      
//       ## Table of Contents
//       ${Table}
      
//       ## Installation
//       ${Install}
      
//       ## Usage
//       ${Usage}
      
//       ## License
//       ${License}
      
//       ## Contributing
//       ${Contributing}
      
//       ## Tests
//       ${Test}
      
//       ## Questions
//       ${Questions}
//     `;
  
//     fs.writeFile('README.md', content, (err) => {
//       if (err) throw err;
//       console.log('The file has been saved!');
//     });
//   })
//   .catch((err) => {
//     console.error(err);
//   });


