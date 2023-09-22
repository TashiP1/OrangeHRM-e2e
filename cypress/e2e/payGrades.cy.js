import utils from '../pageObject/utils/utils'
import payGrade from '../pageObject/pages/payGrade'
import LoginPage from '../pageObject/pages/LoginPage'
import {faker} from '@faker-js/faker'


describe('Admin Jobs Automation', () => {
	beforeEach(() => {
		cy.visit('/')
		LoginPage.loginuser('Admin', 'admin123')
		utils.checkSearchBar('Admin')
		utils.withDropdown('Job', 'Pay Grades')
	})

	it('should check checkbox and cancel delete', () => {
		cy.get('.bi-check').eq(0).click({ force: true })
		utils.cancelCheckboxDelete()
		cy.url().should('include', 'viewPayGrades')
	})

	it('should delete selected record', () => {
		utils.deletecheckbox(1)
		cy.url().should('include', 'viewPayGrades')
	})

	it.only('should check the nav pay and its add and button', () => {
		cy.findSpan('Records Found').then(text => {
			const originalNumber = parseInt(text.match(/\d+/)[0])
			payGrade.addGrade('Grade7')
			cy.get('h6').contains('Add Currency')
			const randomNumber = Math.floor(Math.random() * (100 - 10 + 1) + 10)
			payGrade.addCurrency('AFN - Afghanistan Afghani', 50, randomNumber, originalNumber)
			
		})
	})
})
