describe("child Tab",()=>{
    it("new tab",()=>{
        cy.visit("https://the-internet.herokuapp.com/")
        cy.get("#content>ul>li:nth-child(33)>a").click()
        cy.get(".example").invoke('removeAttr','target').click()

    })
})