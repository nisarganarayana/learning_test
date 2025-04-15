describe("validate search", ()=>{
    it("search", ()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.wait(3000)
        cy.get("input#search_query_top").click().should('have.text','Search')
    })
        
})