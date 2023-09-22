import BasePage from '../BasePage'

export default class adminuser extends BasePage {
	static searchUser(Suser, chooseRole) {
		cy.get('input').eq(1).type(Suser)
		cy.get('div').contains('-- Select --').click({ force: true })

		cy.get('div[class="oxd-select-wrapper"]')
			.find('div')
			.contains(chooseRole)
			.click({ force: true })

		cy.get('button').contains('Search').click({ force: true })

        cy.get('div[role="row"]').find('div').contains(Suser)
	}
}
