
describe('Cypress db testing', function() {
    it('test case',function(){
        cy.query('SELECT * FROM customers LIMIT 10').then(function(result){
            console.log(result);
            cy.log(`Customer Name: ${result[0].customerName}`); 
            // cy.log(result[0][1]);
        })
    })

    it('2nd Test Case', function() {
        // Assuming 'cy.query' is set up correctly to execute the SQL query
        cy.query('SELECT * FROM customers LIMIT 10').then(function(result) {
          // Log the entire result to inspect its structure
          console.log(result); // This will print the full array of results
    
          // Example: Log the first row of the results
          if (result.length > 0) {
            console.log(result[0]); // Logs the first row object
    
            // Access and log specific fields from the first row
            console.log(result[0].customerName); // Example: logging the 'customerName' of the first row
            cy.log(`Customer Name: ${result[0].customerName}`); // Logs a specific value in the Cypress command log
          } else {
            cy.log('No data returned from the query.');
          }
        });
      });
})