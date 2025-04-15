describe('xpathLocators', () => {
    it('No. of products' , () => {
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get(".search_query[name='search_query']").type('T-shirts') //name   attribute

        cy.get(".btn[name='submit_search']").click();
        cy.xpath ("//ul[@class='block_content products-block']/li").should('have.length', 6)



    })

    it('Chained Xpath' , () => {
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get(".search_query[name='search_query']").type('T-shirts') //name   attribute

        cy.get(".btn[name='submit_search']").click();
        cy.xpath ("//ul[@class='block_content products-block']").xpath("./li").should('have.length', 6)



    })


})