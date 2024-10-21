import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

Given("precondition", ()=>{
    cy.visit('/');
})

When('Action', ()=>{
    cy.get('[name="userName"]').type('Josnner')
})

Then('Page ok', ()=>{
    cy.title().should('eq', 'Welcome: Mercury Tours')
})