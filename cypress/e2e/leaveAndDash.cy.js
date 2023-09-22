import utils from '../pageObject/utils/utils'
import LoginPage from '../pageObject/pages/LoginPage'
import leave from '../pageObject/pages/leave'

describe('Admin Jobs Automation', () => {
	beforeEach(() => {
		cy.visit('/')
		LoginPage.loginuser('Admin', 'admin123')
	})

	it('should apply for leave', () => {
		utils.checkSearchBar('Leave')
		leave.applyLeave()
		utils.checkSearchBar('Dashboard')
		let previousLength = 0
		cy.get('div[class="orangehrm-leave-card"]')
			.its('length')
			.should(length => {
				expect(length).to.eq(previousLength + 1)
				previousLength = length
			})
	})
})
