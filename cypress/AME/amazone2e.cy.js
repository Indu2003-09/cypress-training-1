/// <reference types="Cypress" />



describe('E-commerce Website Tests', () => {
    let amazonData;

    before(() => {
        cy.fixture('amazon.json').then((data) => {
            amazonData = data;
        });
    });

    it('login details verification', () => {
        cy.visit(amazonData.amazonlink);
        cy.get('[class="a-input-text a-span12 auth-autofocus auth-required-field"]')
          .type(amazonData.username);
        cy.get('[name="password"]')
          .type(amazonData.password);
        cy.get('#signInSubmit').click();
        cy.get('#nav-link-accountList-nav-line-1')
          .should('be.visible');
        cy.get('#nav-cart-count').click();
        cy.get('[aria-label="Delete Symbol Premium Men&#39;s Solid Regular T-Shirt (SYP-A22-TS-01_Jet Black L)"]').click();
        cy.go('back');
        cy.get('[aria-label="Search Amazon.in"]').type('tshirts');
        cy.get('#nav-search-submit-button').click();
        cy.get('[class="a-color-state a-text-bold"]')
          .should('be.visible')
          .contains("t-shirts");                                             
        cy.get('[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]').then((e)=>{
            let url=e.prop('href');
            cy.visit(url)
        })
        cy.get('[name="submit.add-to-cart"]').click();
        cy.get('#nav-cart-count').click();
        cy.get('[data-feature-id="proceed-to-checkout-action"]').click();
    });
});








// describe('E-commerce Website Tests', () => {
//     it('login details verification',() => {
//         cy.fixture('amazon.json').then((data)=>{
//         cy.visit(data.amazonlink)
//         cy.get('[class="a-input-text a-span12 auth-autofocus auth-required-field"]').type(data.username);
//         cy.get('[name="password"]').type(data.password);
//         cy.get('#signInSubmit').click()
//         cy.get('#nav-link-accountList-nav-line-1').should('be.visible') 
//         cy.get('#nav-cart-count').should('be.visible')
//                                  .click()
//         cy.go('back');
//         cy.get('[aria-label="Search Amazon.in"]').type('tshirts')
//         cy.get('#nav-search-submit-button').click()
//         cy.get('[class="a-color-state a-text-bold"]').should('be.visible')
//                                                      .contains("t-shirts")
//         cy.visit(data.item)
//         cy.get('[name="submit.add-to-cart"]').click()
//         cy.get('#nav-cart-count').click()
//         cy.get('[data-feature-id="proceed-to-checkout-action"]').click()
//        })
//     })
// })
