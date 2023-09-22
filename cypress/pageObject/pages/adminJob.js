import BasePage from '../BasePage'

export default class adminJob extends BasePage {
	static jobTitles(buttonValue, jobTitle, JobDes, Note) {
		cy.get('button').eq(buttonValue).click({ force: true })
		cy.get('input').eq(1).clear()
		cy.get('textarea[placeholder="Type description here"]').clear()
		cy.get('textarea[placeholder="Add note"]').clear()
		cy.get('input').eq(1).type(jobTitle)
		cy.get('textarea[placeholder="Type description here"]').type(JobDes)
		cy.get('textarea[placeholder="Add note"]').type(Note)
		// cy.get('div').contains('Browse').selectFile('cypress/files/spec.txt', { force: true })
		cy.get('button').contains('Save').click()
	}

}
