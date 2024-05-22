const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // reporter: 'cypress-mochawesome-reporter',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
     // require('cypress-mochawesome-reporter/plugin')(on); // html report file
     //require('mochawesome/plugin')(on);
    }},
      
    
  },
  
);




  


