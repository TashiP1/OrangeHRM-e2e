// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

import 'cypress-file-upload'

Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false
})

Cypress.Commands.add('findSpan', record => {
	cy.get('span').contains(record).invoke('text')
})

Cypress.Commands.add('toastmessage', mss => {
	cy.get('div').find('p').contains(mss).should('be.visible')
})

// Cypress.Commands.add('cancelDeleteData', () => {
// 	cy.get('button').contains(' Delete Selected ').should('be.visible')
// 	cy.get('button').contains('Delete Selected').click({ force: true })
// 	cy.get('p').should('contain', 'Are you Sure?')
// })

Cypress.Commands.add('fileUploads', imagePath => {
	const imagefile = imagePath
	cy.get('div[class="oxd-file-button"]')
		.eq(0)
		.click({ force: true })
		.attachFile(imagefile)
})

// Cypress.Commands.add('regex', (text) => {
//     text.match(/\d+/)[0]
// })

// Cypress.Commands.add('regex1', (text) => {
//     const newNumber = parseInt(text.match(/\d+/)[0])
// })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
