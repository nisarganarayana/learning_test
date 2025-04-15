describe("Xpath", ()=> {
    it("find no. of products", ()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.xpath("//div[@id='htmlcontent_home']/ul/li").should('have.length', 5)
    })

    it("chained xpath", ()=>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.xpath("//div[@id='htmlcontent_home']").xpath("./ul/li").should('have.length', 5)
    })


})