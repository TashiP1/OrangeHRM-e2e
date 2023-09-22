import utils from '../pageObject/utils/utils'
import branding from '../pageObject/pages/branding'
import LoginPage from '../pageObject/pages/LoginPage'

describe('Admin Branding Automation', () => {
	beforeEach(() => {
		cy.intercept('POST','/web/index.php/events/push').as('loadPage');
		cy.visit('/')
		LoginPage.loginuser('Admin', 'admin123')
		cy.wait(2000)
		// cy.wait('@loadPage');
		utils.checkSearchBar('Admin')
		utils.withoutDrop('Corporate Branding')
	})

	it('should change the branding of the web site', () => {
		branding.colorPicker(4)
		cy.fileUploads('Myproject.jpg')
		cy.get('button').contains('Publish').click()

		cy.toastmessage('Successfully Saved')
	})
})
