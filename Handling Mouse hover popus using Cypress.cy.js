//.......Lesson 39
//.......Handling Mouse hover popus using Cypress 



/// <reference types="Cypress" />

describe('Mouse Hover', function()
{

it('Check Mouse Hover', function() {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    // Using jQuery method called "show method"
    cy.get('.mouse-hover-content').invoke('show')     // Adding "." before "mouse" creates a class name
    cy.contains('Top').click()

    // Confirms url change
    cy.url().should('include','top')


    /*
    // Using jQuery method called "show method"

            // Either we use this....
    cy.get('#mousehover').invoke('show')             ....Adding "." before "mouse" creates a class name
    cy.contains('Top').click({force: true})          ..... Force method can click hidden element            

           //   Or this...
    cy.get('.mouse-hover-content').invoke('show')      ..... Adding "." before "mouse" creates a class name
    cy.contains('Top').click()

    .............   Or even this works alone

    cy.contains('Top').click({force: true})         ..... Force method can click hidden element , talking to the internal DOM
    */

})
})