///  <reference types='Cypress' />
//import resource from '../../support/resource';
const resource = require('../../support/resource');

describe("example", () => {
  it("get method", () => {
    cy.request("GET", `${resource.API_BASE_PATH}api/users?page=2`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data[0].id).to.eq(7);
    });
    cy.request({
        method: 'GET',
        url: `https://reqres.in/api/users`,
        qs: {
          page: 2,
        },
      }).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body).to.not.be.empty;
      });
  });
  
});
