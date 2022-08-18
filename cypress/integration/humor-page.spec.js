describe("Test humorpage and components", () => {
    it("renders correctly", () => {
        cy.visit("/HumorPage")
    })
    
    it("h1 is visible", () => {
        cy.get('h1').should('be.visible');
    })

    it("New Joke button works", () => {
        cy.get('button').click();
    })

    it("A joke is present", () => {
        cy.get('.fact-p').should('be.visible');
    })
})