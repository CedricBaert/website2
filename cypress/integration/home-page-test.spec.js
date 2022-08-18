describe("Render Homepage", () => {
    it("renders correctly", () => {
        cy.visit("/")
        
    })
    
    it("h1 is visible", () => {
        cy.get('h1').should('be.visible');
    })
})