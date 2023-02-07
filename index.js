//modules required 
const inquirer = require('inquirer');
const fs = require('fs');

//will link for readme
const generateMarkdown = require('./generateMarkdown.js');

//questions created in an array to generate the questions to develop read me
const questions = () => {
    return inquirer.prompt ([
    {
        type: 'input',
        message: 'What would you like to name the project?',
        name: 'title',
        validate: title => {
            if (title) {
                return true;
            } else {
                console.log('Please enter a title in order to continue!');
                return false;
            
            }
        }
    },
    {
        type:'input',
        message: 'Enter your Github Username:',
        name: 'github',
        validate: githubUsername => {
            if (githubUsername) {
                return true;
            } else {
                console.log('Please enter a valid username to continue!');
                return false;
    }}},
    {
        type:'input',
        message: 'Enter your email address',
        name: 'email',
        validate: emailaddress => {
            if (emailaddress) {
                return true;
            } else {
                console.log('Please enter a valid email address to continue!');
                return false;
    }}},

    {
        type:'input',
        message: 'Write a short description about your project.',
        name: 'description',
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log('Please describe your project to continue!');
                return false;
    }}},
    {
        type:'confirm',
        message: 'Would you like to include a license?',
        name: 'licenseChoice',
        default: false
    },
        
    
    {
         type:'list',
        message: 'Which license would you like to include',
        name: 'license',
        choices: ['MIT', 'GPLv2', 'Apache'],
        when: ({license}) => {
            if ({license }) {
                    return true;
        } else {
                    return false;
 }}},

 {
    type:'input',
    message: 'How are you planning on using this application?',
    name: 'use',
    validate: useInput => {
        if (useInput) {
            return true;
        } else {
            console.log('Please describe your usage for this application!');
            return false;
}}},
{
    type:'input',
    message: 'Describe the testing for this application. Describe to use this testing for contributors.',
    name: 'testing',
    default: 'npm test',
},

{
    type:'input',
    message: 'How can contributors work on this project?',
    name: 'contributors',
   
},
   
    
    ]);
    

   

   };
    
    const writeToFile = data => {
        fs.writeFile('README.md', data, err =>{
            if(err){
                console.log(err);

            }
            else{
                console.log("success!");

            }
        })
    };

   questions()

   .then(data => {
    return generateMarkdown.generateMarkdown(data);

   })
   .then(data => {
    return writeToFile(data)
<<<<<<< HEAD
   });
=======

>>>>>>> b95333fbfd4fd4c76271c04cc002ea04cc3fcb73
