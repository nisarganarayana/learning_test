describe('MouseOverAction', () =>
{
    it.only('MouseAction', () =>
    {
       cy.visit("http://www.automationpractice.pl/index.php")
       cy.get("ul[class='submenu-container clearfix first-in-line-xs'] ul li a[title='T-shirts']").should('not.be.visible');
       cy.get("a[title='Women']").trigger('mouseover').click();
       cy.wait(3000)
       cy.get("ul[class='submenu-container clearfix first-in-line-xs'] ul li a[title='T-shirts']").should('be.visible') 
    //    cy.visit("https://www.flipkart.com/")
    //    cy.get("._1BJVlg _11MZbx").should('not.be.visible')
    //    cy.get("div[aria-label='Fashion'] div span[class='_1XjE3T']").click();
    //    cy.get("._1BJVlg _11MZbx").should('be.visible')
      
    })

})