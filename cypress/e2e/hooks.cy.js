describe('MyTestSuite', ()=> {
    before(()=>{
        cy.log("*** Launch the app ***")
    })

    after(()=>{
        cy.log("*** Close the app ***")
    })

    beforeEach(()=>{
        cy.log("*** Login ***")
    })

    afterEach(()=>{
        cy.log("*** Logout ***")
    })
    it('search', ()=>{
        cy.log("*** Searching***")
    })

    it('advanced search', ()=>{
        cy.log("*** Advanced Searching ***")
    })

    it('listing product', ()=>{ 
        cy.log("*** Listing product ***")
    })
}) 
