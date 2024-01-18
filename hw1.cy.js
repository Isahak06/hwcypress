/// <reference types="cypress" />

describe('Shopping Cart and Order Test', () => {
  it('should add a product to the cart and make an order', () => {
    
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    
    cy.get('#root > div > div.products-wrapper > div > div:nth-child(8) > div.stepper-input > a.increment').click()
   
    cy.get('#root > div > div.products-wrapper > div > div:nth-child(8) > div.product-action > button').click()
    
     cy.get('.cart-icon img').click();
    cy.contains('PROCEED TO CHECKOUT').click();

     
     cy.contains('Place Order').click();

    
     cy.get('#root > div > div > div > div > div > select').select("Congo");
    cy.get('#root > div > div > div > div > input').click();
    cy.get('#root > div > div > div > div > button').click();
   });
}); 