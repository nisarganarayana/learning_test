describe("learning",()=>{
    it("flipkart Shadow dom",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //cy.visit("https://www.flipkart.com/")
        // cy.xpath("//span[text()='Fashion']").shadow().find(`//a[text()="Men's Top Wear"]`).click()
        //cy.xpath(`//a[text()="Men's Top Wear"]`).click()
        cy.get("ul li").first()
        cy.get("ul li").last()
    })

    // it.only("drag and drop",()=>{
    //     cy.visit("https://the-internet.herokuapp.com/upload")
    //     //cy.get("#drag-drop-upload").attachFile("Info.txt", {subjectType:'drag-n-drop'})
    //     cy.get("#drag-drop-upload").attachFile("Info.txt", {subjectType:'drag-n-drop'})
    //     cy.wait(3000)
    //     cy.get("#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span")
    //         .contains("Info.txt")
    // })

    it.only('fileUpload drag and drop', () =>
        {
                cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
                cy.get("#filesToUpload").attachFile("Info.txt", {subjectType:'drag-n-drop'})
                cy.wait(3000)
                cy.xpath("//main[@id='main']/div/p[3]/strong[text()='Files You Selected:']")
                .contains("Info.txt")
                
        })
    
})