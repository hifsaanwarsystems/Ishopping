const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
 
      // implement node event listeners here
      e2e:{
      
    
        chromeWebSecurity: false,
        experimentalSessionAndOrigin: true,
        crossorigin:true,
        viewportWidth: 990,
      viewportHeight: 1440,
      failOnStatusCode: false,
      redirectionLimit: 10000,
      requestTimeout: 30000,
      numTestsKeptInMemory: 0,
      responseTimeout: 50000,
      pageLoadTimeout: 100000,
      retries: 1,
      reporter: 'mochawesome'
      
        
    }
    
      
    
    
});
