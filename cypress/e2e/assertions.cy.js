describe("assert",()=>{
    it("t1",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.url().should('include','orangehrmlive')
                .and('contains','orangehrm')
        cy.title().should('eq','OrangeHRM')
                  .should('include','Orange')
        cy.get('.orangehrm-login-branding').should('be.visible')
                                           .should('exist')
    })
})

describe("locator", () => {
    it("t1", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        // cy.get('[class="oxd-input oxd-input--active"]').eq(0).type('Admin')
        cy.get('.orangehrm-login-branding').should('be.visible')
                                           .should('exist')
        cy.get('[name="username"]').type("Admin");
        cy.get('[name="password"]').type("admin123");
        cy.get('.oxd-button').click()
        
    });
});