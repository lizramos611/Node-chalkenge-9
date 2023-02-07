//modules required 
const fs = require('fs');
const inquirer = require('inquirer');

//will link for readme
const generateMarkdown = require('./generateMarkdown.js');
const util = require('util');
const path = require('path');


const { type } = require('os');

//questions created in an array to generate the questions to develop read me
inquirer.prompt ([
    {
        type: 'input',
        message: 'What would you like to name the project?',
        name: 'projectTitle',
        validate: titleInput => {
            if (titleInput) {
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
        name: 'license options',
        choices: ['MIT', 'GPLv2', 'Apache'],
        when: ({licenseChoice}) => {
            if ({licenseChoice }) {
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
// creating the function to write all questions to file
function writeToFile(fileName, data){
    writeToFile.then(function () {
        console.log('Read me complete!')
    })
}

//creating a function to initialize the app
    const init = () => {
        return inquirer.prompt(questions);
    }
    





// call to initialize app
init() 
.then(userInput => {
    return generateMarkdown(userInput);

})
.catch(err => {
    console.log(err);
});
