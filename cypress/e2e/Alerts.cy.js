describe('Alerts', () =>{

    //Javs Script Alert : It will have some text and an 'OK' button
    it.skip('JS Alert', () =>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()

        cy.on('window:alert',(t) =>{
            expect(t).to.contains("I am a JS Alert")
        })

        //alert window automatically closed by cypress
        cy.get("#result").should('have.text','You successfully clicked an alert')
    })

    it.skip('JS confirm alert-OK', () =>
        {
            cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
            cy.get("button[onclick='jsConfirm()']").click()

            cy.on('window:confirm' , (t) =>
            {
                expect(t).to.contains('I am a JS Confirm')
            })

            cy.get("#result").should('have.text','You clicked: Ok')
            })
    it.skip('JS confirm alert-CANCEL', () =>
                {
                    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
                    cy.get("button[onclick='jsConfirm()']").click()

                    cy.on('window:confirm' , (t) =>
                        {
                            expect(t).to.contains('I am a JS Confirm')
                        })
                        
                        cy.on('window:confirm', ()=> false)  //cypress closes alert window using cancel button
                
                        cy.get("#result").should('have.text','You clicked: Cancel')
                        })
    it('JS Prompt ALert', () =>
        {
            cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
            cy.window().then((win) => {
                cy.stub(win,'prompt').returns('welcome')

            })

            cy.get("button[onclick='jsPrompt()']").click()

            //Cypress will automatically close prompted
            //cy.on('window:prompt', () => false)
            cy.get("#result").should('have.text','You entered: welcome')

            

        })   
        
        it.only('Authenticated alert', () =>
        {
            /*cy.visit("https://the-internet.herokuapp.com/basic_auth", { auth:
                                                                    {
                                                                        username:'admin',
                                                                        password:'admin'

                                                                    }
                                                                });
            cy.get("div[class='example'] p").should('have.contain', "Congratulations") */
            
            cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
            cy.get("div[class='example'] p").should('have.contain', "Congratulations")

        }) 
})