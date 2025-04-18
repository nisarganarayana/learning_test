describe("child Tab",()=>{
    it("new tab",()=>{
        cy.visit("https://the-internet.herokuapp.com/")
        cy.get("#content>ul>li:nth-child(33)>a").click()
        cy.get(".example").invoke('removeAttr','target').click()
        
    })

    it("practice",()=>{
        cy.visit("https://selectorshub.com/xpath-practice-page/")
        cy.get("input[name='email']").click().type('practice11@gmail.com')
        cy.wait(3000)
        cy.get("input[name='email']").should('have.value','practice11@gmail.com')
        cy.get("#pass").type('nisu123').click()
        cy.get("#pass").should('have.value','nisu123')
        cy.get("#pass").should('be.visible').and('exist')
        cy.get("input[name='company']").type('zucitech').click()
        cy.get("input[name='company']").should('have.value','zucitech')
        cy.get("input[name='mobile number']").click().type('9972647515')
        cy.get("input[name='mobile number]").should('have.length',10)
    })
    it("website",()=>{
        cy.visit("https://flipkart.com")
        let url=cy.title().should('contain','Online Shopping Site').and('exist')
        cy.log(url)
    })
    it("checkbox",()=>{
        cy.visit("https://selectorshub.com/xpath-practice-page/")
        //cy.xpath(".//table[@id='tablepress-1']/tbody/tr/td/input").check()
        //cy.xpath("//td[text()='windows']")
        cy.xpath("//td[text()='mac']/../td[1]/input").first().check().should('be.checked')
        cy.xpath("//td[text()='mac']/../td[1]/input").last().check().should('be.checked')
    })

    it.only("search",()=>{
        cy.visit("https://selectorshub.com/xpath-practice-page/")
        //cy.wait(4000)
        //cy.xpath("//input[@id='dt-search-0']").type('mac')
        //cy.xpath("//div[@class='dt-search']/input[@type='search']")
        
        cy.xpath("//section[contains(@data-id,'895b525')]").scrollIntoView()
        //cy.get("#dt-length-0").select('100')
        // cy.xpath("//td[text()='mac']/../td[1]/input").each(($el,index,$l)=>{
        //     //cy.log($l.length)
        //     cy.wrap($el).click()
            
        // })

        cy.xpath("//td[text()='mac']/../td[1]/input").each((_, index) => {
            cy.xpath("//td[text()='mac']/../td[1]/input").eq(index).click()
        })

        // cy.xpath("//td[text()='mac']/../td[1]/input").each(($el,index,$l)=>{
        //     //cy.log($l.length)
        //     cy.wrap($el).should('be.checked')
        // })
        //cy.log()

        // .should('have.value','mac')
    })
    

})