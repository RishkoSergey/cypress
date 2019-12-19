describe('The Login Page', function () {
  it('successfully logged in', function () {
    const email = Cypress.config('testEmail');
    const password = Cypress.config('testPassword');

    cy.visit('/'); // change URL to match your dev URL
    cy.get('button[type="submit"]').should('be.disabled');
    cy.get('input[name="login"]')
      .type(email)
      .should('have.value', email);
    cy.get('input[name="password"]')
      .type(password)
      .should('have.value', password);
    cy.get('button[type="submit"]').should('be.enabled').click();
    cy.url().should('not.include', '/login');
  });
});
