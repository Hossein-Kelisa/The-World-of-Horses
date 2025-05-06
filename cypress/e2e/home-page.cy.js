/* global cy, describe, it */

describe('Home Page Test', () => {
  it('Visits the home page and sees the title', () => {
    cy.visit('/'); 
    cy.contains('All Horse Breeds');  
  });
});
