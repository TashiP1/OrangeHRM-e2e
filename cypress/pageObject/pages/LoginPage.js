import BasePage from '../BasePage'

export default class LoginPage extends BasePage {
	static loginuser(userName, password) {
		cy.get('input[name="username"]').type(userName)
		cy.get('input[name="password"]').type(password)
		cy.get('button[type="submit"]').click()
	}

	static forgotPass(userName){
		cy.get('p').contains('Forgot your password?').click()
		cy.url().should('include', 'auth/requestPasswordResetCode')
		cy.get('h6').contains('Reset Password')
	
		cy.get('input[name="username"]').type(userName)
	}

	static checkCondition() {
		cy.get('button[type="submit"]').click()
		cy.get('span').contains('Required').should('be.visible')
	}
}
