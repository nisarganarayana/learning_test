describe('assertins', () =>{
    it('Implicit Assertions', () =>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //should and
        //cy.url().should('include','orangehrmlive.com') //get url
        //cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.url().should('contain','orangehrm')

        //to avoid calling cy and url we can use should
        //cy.url().should('include','orangehrmlive.com')
        //.should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //.should('contain','orangehrm')


        //to avoid calling should multiple time we can use and
        //cy.url().should('include','orangehrmlive.com')
        //.and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //.and('contain','orangehrm')

        //negative assertions
        //cy.url().should('not.include','orangehrmlive.care')
        //.and('not.eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login23')
        //.and('not.contain','greenhrm')

       /* cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain','HRM')

        //cy.get('.orangehrm-login-branding >img').should('be.visible')
        .and('exist')

        //cy.xpath("//a").should('have.length','5')
        //cy.get("input[placeholder='Username']").type("Admin"); //Provide value into inputbox
       // cy.get("input[placeholder='Username']").should('have.value','Admin') //validation */
    })


    it.only('Explicit Assertions', () =>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type('Admin').click().getText()
        cy.get("input[placeholder='Username']").should('have.value','Admin')
        // cy.get("input[placeholder='Password']").type('admin123')
        // cy.get("button[type='submit']").click();

        // let expName='Julião Nrothem';
        
        // cy.get(".oxd-userdropdown-name").then( (x)=>{
        //     let actName=x.text();

        //     //BDD style
        //     expect(actName).to.equal(expName)
        //     expect(actName).to.not.equal(expName)

        //     //TDD style
        //     assert.equal(actName,expName)
        //     assert.notEqual(actName,expName)
        //})



    })
})