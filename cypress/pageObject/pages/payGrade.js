import BasePage from '../BasePage'

export default class payGrade extends BasePage {
	static addGrade(GradeNo) {
		cy.get('button').contains('Add').click({ force: true })
		cy.get('input').eq(1).type(GradeNo)
		cy.get('button').contains('Save').click()
		cy.toastmessage('No Records Found')
		cy.url().should('include', 'payGrade')
		cy.get('span').contains('No Records Found')
		cy.get('button').contains('Add').click()
	}

	static addCurrency(currencyType, min, max, originalNumber) {
		cy.get('div').contains('-- Select --').click()
		cy.get('div[class="oxd-select-wrapper"]').find('div').contains(currencyType).click({ force: true })
		cy.get('input').eq(2).type(min)
		cy.get('input').eq(3).type(max)
		cy.get('input').eq(2).invoke('val').then(val1 => {
			cy.get('input').eq(3).invoke('val').then(val2 => {
				if (parseInt(val1) < parseInt(val2)) {
					cy.get('button').eq(5).click({ force: true })
					cy.toastmessage('Successfully Saved')
					let previousLength = 0
					cy.get('div[role="row"]').its('length').should(length => {
						expect(length).to.eq(previousLength + 1)
						previousLength = length
					})
					cy.get('button').eq(2).click({ force: true })
					cy.findSpan('Records Found').then(text => {
					const newNumber = parseInt(text.match(/\d+/)[0])
					expect(newNumber).to.equal(originalNumber + 1)
				})
				} else {
					cy.get('span').contains('Should be higher than Minimum Salary').should('be.visible')
				}
			})
		})
	}
}
