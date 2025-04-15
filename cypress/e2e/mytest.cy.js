describe('suit name', () => {
  it('test title-positive', () => 
    {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.title().should('eq', 'OrangeHRM')


  })

  it('test title-negative', () => 
    {
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.title().should('eq', 'OrangeHRM123')
  })
})

