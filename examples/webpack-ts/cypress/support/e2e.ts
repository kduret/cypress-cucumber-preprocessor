before(() => {
  Cypress.config('baseUrl', 'http://0.0.0.0:4000');

  cy.intercept('/waiting-page', {
    headers: { 'content-type': 'text/html' },
    statusCode: 200
  }).visit('/waiting-page');
});
