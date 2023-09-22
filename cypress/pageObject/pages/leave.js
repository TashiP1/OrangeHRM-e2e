import BasePage from '../BasePage'
import utils from '../utils/utils'

export default class leave extends BasePage {
	static applyLeave() {
		utils.withoutDrop('Apply')
		cy.get('div').contains('-- Select --').click({ force: true })

		cy.get('div[class="oxd-select-wrapper"]')
			.find('div')
			.contains('CAN - Personal')
			.click({ force: true })
        
        cy.get('input[placeholder="yyyy-mm-dd"]').eq(0).type('2023-07-05')
        cy.get('textarea').type('For medical checkup')
        cy.get('button').contains('Apply').click()
        
	}
}
