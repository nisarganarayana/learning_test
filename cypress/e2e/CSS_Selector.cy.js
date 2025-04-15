describe('CSS selector', () => {
    it('test selector', () => 
      {
        cy.visit("http://www.automationpractice.pl/index.php")
        //cy.get("#search_query_top").click(); //using id
        //cy.get("input.search_query").click(); //using class
        //cy.get("input[placeholder='Search']").click(); //using attribute and value
        cy.get("input.search_query[placeholder='Search']").type("t-shirts").click();
        //cy.get(".search_query[name='search_query']").type('T-shirts') //name   attribute
        cy.get("button[name='submit_search']").click()
        cy.get(".lighter").contains("t-shirts"); //Assertions

       // cy.get(".btn[name='submit_search']").click();
        //cy.get(".lighter").contains('T-shirts'); //Assertion

        
      })
})   