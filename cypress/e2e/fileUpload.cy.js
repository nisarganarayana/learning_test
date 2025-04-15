import 'cypress-file-upload'

describe('fileUpload', () =>
{
    it('Single FileUpload', () =>
    {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile('Info.txt')
        cy.get("#file-submit").click();
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
    })


    it('Single FileUpload rename', () =>
        {
            cy.visit("https://the-internet.herokuapp.com/upload")
            cy.get("#file-upload").attachFile({filePath:'Info.txt',fileName:'myinfo.txt'})
            cy.get("#file-submit").click();
            cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
        })

    it.only('fileUpload drag and drop', () =>
    {
            cy.visit("https://the-internet.herokuapp.com/upload")
            cy.get("#drag-drop-upload").attachFile("Info.txt", {subjectType:'drag-n-drop'})
            cy.wait(3000)
            cy.get("#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span")
            .contains("Info.txt")

    })

    it('Multiple FileUpload', () =>
    {

            cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
            cy.get("#filesToUpload").attachFile(["Photo.jpg","Sign.jpg"])
            cy.wait(4000)
            //cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected:')
            cy.xpath("//main[@id='main']/div/p[3]").should('contain.text','Files You Selected')
    })

})