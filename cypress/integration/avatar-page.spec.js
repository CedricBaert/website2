describe("Test Avatarpage and components", () => {
    it("renders correctly", () => {
        cy.visit("/AvatarPage") 
    })
    
    it("h1 is visible", () => {
        cy.get('h1').should('be.visible');
    })

    it("avatar is present", () => {
        cy.get('.avatar').should('be.visible');
    })

    it("button clicked without username gives an error", () => {
        cy.visit("/AvatarPage")
        /* ==== Generated with Cypress Studio ==== */
        cy.get('[type="submit"]').click();
        cy.get('.error-message').should('be.visible');
        cy.get('.error-message').should('have.text', 'Username is empty');
        /* ==== End Cypress Studio ==== */
    })
    
    it("avatar.svg downloaded", () => {
        cy.get('button').click();

        cy.verifyDownload('avatar.svg');
    })

   
})