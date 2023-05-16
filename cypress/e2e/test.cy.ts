describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('ion-content', 'Tab 1 page');
  });

  it('Visits the tab 3 url', () => {
    cy.visit('/tab3');
    cy.contains('ion-content', 'Tab 3 page');
  });

  it('Visits the tab 2 url', () => {
    cy.visit('/tab2');
    cy.contains('ion-title', 'Tab 2');
  });

  it('click the tab 2 button should go to tab2', () => {
    cy.visit('/');
    cy.get('ion-tab-button').contains('Tab 2').click();
    cy.url().should('include', '/tab2');
  });
});
