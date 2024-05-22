describe('My First Test', () => {
  before(() => {
    cy.visit('https://app.keka.com/Account/Login?ReturnUrl=%2F');
  });

  beforeEach(() => {
    cy.clearLocalStorage();
  });

  afterEach(() => {
    cy.clearCookies();
  });

  it('t1', () => {
    cy.title().should('eq','Keka Login')
  })
  it('t2', () => {
    //cy.title().should('eq','kekalogin')
    cy.title().should('not.eq','kekalogin')
  })
})