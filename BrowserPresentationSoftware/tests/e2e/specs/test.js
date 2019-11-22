// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('http://localhost:8081/#/');
    cy.contains('h6', '1');
  })

  it('check if editor empty on start ', () => {
    cy.get("#mdEditor");
    cy.contains('');
  })

  it('check if editor empty on start ', () => {
    cy.get("#mdEditor");
    cy.contains('');
  })

  it('bold button adds bolding ', () => {
    cy.get("#boldButton").click();
    cy.contains('**boldText**');
  })

  it('italic button adds italic text ', () => {
    cy.get("#italicButton").click();
    cy.contains('*italicText*');
  })

  it('strike button adds strikethrough ', () => {
    cy.get("#strikeButton").click();
    cy.contains('~~strikethrough~~');
  })

  it('new slide button adds a new slide ', () => {
    cy.get("#nSlideButton").click();
    cy.contains('');
  })

  it('clear all button clears the slide ', () => {
    cy.get("#clearAllbutton").click();
    cy.contains('');
  })
})
