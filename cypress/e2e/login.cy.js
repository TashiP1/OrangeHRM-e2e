import LoginPage from '../pageObject/pages/LoginPage'
import {faker} from '@faker-js/faker'

describe('Automate Login Page', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('Successful log into the page and log out', () => {
		LoginPage.loginuser('Admin', 'admin123')
		cy.get('span[class="oxd-userdropdown-tab"]').click({ force: true })
		cy.get('ul').find('li').find('a').contains('Logout').click()
	})

	it('invalid log into the page', () => {
		const username = faker.internet.userName()
		const password = faker.internet.password()
		LoginPage.loginuser(username, password)
		cy.get('p').should('contain', 'Invalid credentials')
		cy.url().should('not.include', 'dashboard/index')
	})

	it('should check the Reset Password', () => {
		LoginPage.forgotPass('Admin')
		cy.get('button').contains(' Reset Password ').click()
		cy.url().should('include', 'auth/sendPasswordReset')
		cy.get('h6').contains('Reset Password link sent successfully')
	})

	it('should check the cancel reset button', () => {
		LoginPage.forgotPass('Admin')
		cy.get('button').contains(' Cancel').click()
		cy.url().should('include', 'login')
	})

	it('should handle the condition of filling form', () => {
		LoginPage.checkCondition()
	})
})
