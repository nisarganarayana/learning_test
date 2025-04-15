describe("assertions", ()=>{
    it("implicit_assertions",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // let url=cy.url().should('contain',"web/index.php/auth/login")
        // cy.log(url) 
        // expect(actName).to.equal(expName)
        cy.url().then((x)=>{
           let expUrl="https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
           expect(x).to.equal(expUrl) 
        })
        
    })

    it("explicit assertions",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().then((x)=>{
            let expTitle="King"
            expect(x).to.equal(expTitle)
        })
    })

    //using be.visible assertion
    it("implicit 2 assertions",() =>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get("img[class='logo img-responsive']").should('be.visible').and('exist')

    })

    //using be.text
    it("implicit text assertions",() =>{
        cy.visit("http://www.automationpractice.pl/index.php")
        cy.get("a[title='Dresses']").should('be.text','Dresses')  //use contain
    })

    //using be.value  //which includes input tag(most of the time)
    it("implicit text assertions",() =>{
        cy.visit("https://www.flipkart.com/")
        cy.get("input.Pke_EE").type("mobiles")
        cy.get("input.Pke_EE").should('have.value','mobiles')
    })

    //using be.enabled 
    it("implicit text assertions",() =>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#displayed-text").should('be.enabled')
       

    })

    //using be.checked
    it("implicit text assertions",() =>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#checkBoxOption1").check()
        cy.get("#checkBoxOption1").should('be.checked')  //radio button
       

    })


    it("implicit text assertions",() =>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#dropdown-class-example").select("Option1") 

    })

    it("implicit text assertions",() =>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("input[name='radioButton']").check().should('be.checked') //checked

    })

    it("implicit text assertions",() => {
        cy.visit("https://flipkart.com")
        cy.get("input[name='otracker']").should('be.hidden')

 
    })
    

    it("implicit text assertions",() => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //cy.get("form[action='/search']").should('have.class','_2rslOn header-form-search')
        cy.get("#name").type('{shift}a',{ release: false}).type('a')
        //type({{backspace},{del},{end}})
    })

    it("checking rightclick", () =>{
        //cy.visit("https://www.flipkart.com/")
        //cy.get("img[title='Flipkart']").click('topRight') //using top right parameter inside click method
        //cy.get("img[title='Flipkart']").click(160,40) //not understanding
        //cy.get("img[title='Flipkart']").click({force: true}) //using force 
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("input[type='checkbox']").click({ multiple: true })
        //cy.get("#name").dblclick() 


        //type('john{enter}')
        //.should('not.have.focus')//focus

        //cy.get("select[id='dropdown-class-example']").type('{downarrow}{downarrow}')  //get big text field and practice

        

    })

    it("checking",()=>{
        cy.visit("https://wordcounter.net/")
        cy.get("#box").type("fdfdfd{enter},fdsfsd{upArrow},{downArrow},{pageUp}")
        //cy.get("#box").type({{downArrow})
    })

    it("Options in Select",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#dropdown-class-example").find('option').then(($options) =>{
            cy.log($options.length)
            let arrOptions=[]
            $options.each((index,option) =>{
                cy.log(option.innerText)
                arrOptions.push(option.innerText)
            })
            cy.log(arrOptions) // Array[4]
            cy.log(...arrOptions)// expanded array 
        })

        

    })

    it("Options in Select",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#dropdown-class-example").find('option').each(($el)=>{
            cy.wrap($el).invoke('attr','value').then((a)=>{
                cy.log(a)
            })
        })

            // let arrOptions=[]
            // $options.each((index,option) =>{
            //     cy.log(option)
                //arrOptions.push(option.innerText)
            //})
            // cy.log(arrOptions) // Array[4]
            // cy.log(...arrOptions)// expanded array 
       // })

        

    })

    it("options in hero",()=>{
        cy.visit("https://the-internet.herokuapp.com/dropdown")
        cy.get("#dropdown").find('option').each(($el)=>{
            cy.wrap($el).invoke('attr','value').then((a)=>{
                cy.log(a)
            })
        })
    })

    it("select option",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //cy.get("#dropdown-class-example").select('Option1').should('have.value','option1')// Select by text content
        //cy.get("#dropdown-class-example").select('option1').should('have.value','option1')// Select by value
        //cy.get("#dropdown-class-example").select(1).should('have.value','option1')// Select by index


    })

    it("navigation",()=>{
        // cy.visit("https://the-internet.herokuapp.com/")
        // cy.xpath("//a[text()='A/B Testing']").click()
        // cy.go('back')
        // cy.go('forward')
        cy.visit("https://rahulshettyacademy.com/blog/index.php/cypress-interview-questions/")
        cy.xpath("//div[@id='tve_editor']/div[3]/div[2]/div[5]/div[2]/div[2]/div/div[2]/div/div/a").click()
        cy.go('back')
        cy.go('forward')
    })


    it("zoho dropdown",()=>{
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get("#zcf_address_country").find('option').then(($el)=>{
            cy.log($el.length)
            let arrOption=[]
            $el.each((index,option)=>{
                cy.log(option.innerText)
                arrOption.push(option.innerText)
            })
            cy.log(arrOption)
            cy.log(...arrOption)

        })
    })

    it("zoho dropdown",()=>{
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get("#zcf_address_country").find('option').then(($el)=>{
            cy.wrap($el).invoke('attr','value').then((a)=>{
                cy.log(a)
            })
        
        })

    })

    it.only('flipkart_hidden',()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("input[type='checkbox']").check({force:true})
    })


})