describe('check UI element', () =>{
   /* it('Checking Radio Button', () =>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#male").should('be.visible')
        cy.get("#female").should('be.visible') //visibility of radio buttons

        cy.get("#male").check().should('be.checked')
        cy.get("#female").check().should('not.be.checked')

        cy.get("#female").check().should('be.checked')
        cy.get("#male").check().should('not.be.checked')


    })*/
    
    it('Checking Checkbox', () =>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        //visibility of the element
       // cy.get("#sunday").should('be.visible')

        //selecting single check box
        //cy.get("#sunday").check().should('be.checked')

        //selecting single check box
        //cy.get("#sunday").uncheck().should('not.be.checked')

        //selecting all checkbox
        //cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        //cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        //Selecting 1st and last checkbox
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')
    })
})