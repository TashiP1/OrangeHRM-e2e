import utils from '../pageObject/utils/utils'
import adminJob from '../pageObject/pages/adminJob'
import LoginPage from '../pageObject/pages/LoginPage'
import {faker} from '@faker-js/faker'

describe('Admin Jobs Automation', () => {
	beforeEach(() => {
		cy.visit('/')
		LoginPage.loginuser('Admin', 'admin123')
		utils.checkSearchBar('Admin')
		utils.withDropdown('Job', 'Job Titles')
	})

	it('should check the nav Job and its add button', () => {
		// cy.adminNav('Organization', 'Locations')
		cy.findSpan('Records Found').then(text => {
			const originalNumber = parseInt(text.match(/\d+/)[0])
			adminJob.jobTitles(
				'2',
				'test14',
				'Web Auto Tester',
				'For seccessful deployment'
			)
			cy.url().should('contain', 'saveJobTitle')
			cy.toastmessage('Successfully Saved')
			cy.findSpan('Records Found').then(text => {
				const newNumber = parseInt(text.match(/\d+/)[0])
				expect(newNumber).to.equal(originalNumber + 1)
			})
		})
	})

	it('should check the nav Job and its edit button', () => {
		// cy.adminNav('Organization', 'Locations')
		cy.findSpan('Records Found').then(text => {
			const originalNumber = parseInt(text.match(/\d+/)[0])
			adminJob.jobTitles(
				'4',
				'auto14',
				'Web Auto Tester',
				'For seccessful deployment'
			)
			cy.toastmessage('Successfully Updated')
			cy.findSpan('Records Found').then(text => {
				const newNumber = parseInt(text.match(/\d+/)[0])
				expect(newNumber).to.equal(originalNumber)
			})
		})
	})

	it('should check checkbox and cancel delete of job Titles', () => {
		utils.cancelCheckboxDelete()
		cy.log('Done with cancel for job titles')
		utils.deletecheckbox(1)
		cy.url().should('include', 'admin/viewJobTitleList')
	})

	it('should check the employment status checkbox of Employment status', () => {
		utils.withDropdown('Job', 'Employment Status')
		utils.cancelCheckboxDelete()
		cy.log('Done with cancel for employment status')
		utils.deletecheckbox(2)
		cy.url().should('include', 'admin/employmentStatus')
	})

	it('should check the add button of Employment status', () => {
		utils.withDropdown('Job', 'Employment Status')
		const Estatus = faker.internet.userName()
		utils.checkExistField('Active4', Estatus)
		cy.url().should('include', 'employmentStatus')
	})

	it('should check the job categories checkbox', () => {
		utils.withDropdown('Job', 'Job Categories')
		utils.cancelCheckboxDelete()
		cy.log('Done with cancel for job categories')
		utils.deletecheckbox(2)
		cy.url().should('include', 'jobCategory')
	})

	it.only('should check the add button of job categories', () => {
		utils.withDropdown('Job', 'Job Categories')
		const jobCategory= faker.internet.userName()
		utils.checkExistField('business5', jobCategory)
		cy.url().should('include', 'jobCategory')
	})

})
