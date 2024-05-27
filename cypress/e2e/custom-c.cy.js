///  <reference types='Cypress' />

describe('Tablea and assertions operations', () => {
    beforeEach(() => {
      cy.visit('https://testautomationpractice.blogspot.com/');
    });
  
    it('values verification', () => {
      cy.get('table[name="BookTable"]').should('exist');
      cy.get('table[name="BookTable"] th:nth-child(1)').should('have.text', 'BookName');
      cy.get('table[name="BookTable"] th:nth-child(2)').should('contain', 'Author');
      cy.get('table[name="BookTable"] th:nth-child(3)').should('include.text', 'Subject');
      cy.get('table[name="BookTable"] th:nth-child(4)').should('have.text', 'Price');

      cy.get('table[name="BookTable"] tbody tr:nth-child(2)').within(() => {
        cy.get('td:nth-child(1)').should('have.text', 'Learn Selenium');
        cy.get('td:nth-child(2)').should('contain', 'Amit');
        cy.get('td:nth-child(3)').should('include.text', 'Selenium');
        cy.get('td:nth-child(4)').should('have.text', '300');
      });
  
      cy.get('table > tbody > tr:nth-child(3)').should('contain', 'Learn Java');

      
    });

    it('to check a particular book', () => {
        cy.get('table[name=BookTable] > tbody > tr td:nth-child(2)').each(($el, index) => {
          const text = $el.text();
          if (text.includes("Amod")) {
            cy.get("table[name=BookTable] > tbody > tr td:nth-child(1)").eq(index).then((bname) => {
              const bookName = bname.text();
              expect(bookName).to.equal("Master In Java");
            });
          }
        });
      });

    it('total cost of books', () => {
        let totalCost = 0;
    
        cy.get('table[name="BookTable"]>tbody>tr').not(':first').each(($row) => {
          const cost = parseFloat($row.find('td').eq(3).text());
          totalCost += cost;
        }).then(() => {
          cy.log('Total Cost: ' + totalCost);
          expect(totalCost).to.equal(7100);
        });
      });
});


