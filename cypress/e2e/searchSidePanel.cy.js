import utils from '../pageObject/utils/utils'
import LoginPage from '../pageObject/pages/LoginPage'

describe('Side Panel Automation', () => {
	beforeEach(() => {
		cy.visit('/')
		LoginPage.loginuser('Admin', 'admin123')
	})

	it('should check the searchbar', () => {
		const menuOption = ['Admin', 'PIM', 'Leave', 'Time', 'Recruitment', 'Performance', 'Dashboard', 'Directory', 'Buzz']
		menuOption.forEach(searchMenu)

		function searchMenu(item) {
			utils.checkSearchBar(item)
		}
	})
})
