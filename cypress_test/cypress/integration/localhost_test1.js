describe("Localhost test 1",()=>{
    it("Local",()=>{
        cy.visit("http://localhost:8000");
        cy.contains("Cypress teszt");
    });
});