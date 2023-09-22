import utils from "../pageObject/utils/utils"
import adminuser from "../pageObject/pages/adminuser"
import LoginPage from "../pageObject/pages/LoginPage"

describe('Admin Jobs Automation', () => {
	beforeEach(() => {
		cy.visit('/')
		LoginPage.loginuser('Admin', 'admin123')
		utils.checkSearchBar('Admin')
	})

	it('should search for the User', () => {
		adminuser.searchUser('Admin', 'Admin')
		cy.get('div[role="rowgroup"]').its('length').should('eq', 2)
	})

	it('should reset the user search', () => {
		adminuser.searchUser('Admin', 'Admin')
		cy.get('button').contains('Reset').click({ force: true })
		cy.get('div[role="row"]').its('length').should('not.eq', 2)
	})
})
