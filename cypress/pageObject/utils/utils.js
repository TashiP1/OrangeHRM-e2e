export default class utils {
	static withDropdown(navOption, subOption) {
		cy.get('span[class="oxd-topbar-body-nav-tab-item"]')
			.contains(navOption)
			.click()
		cy.get('ul').find('li').find('a').contains(subOption).click()
		cy.get('h6').contains(subOption)
	}

	static withoutDrop(navOption) {
		cy.get('span').contains('More').click()
		cy.get('ul').find('li').find('a').contains(navOption).click()
		cy.get('h6').contains(navOption)
	}

	static cancelCheckboxDelete() {
		cy.get('.bi-check').eq(0).click({ force: true })
		cy.findSpan('Records Selected').then(text => {
			const originalNumber = parseInt(text.match(/\d+/)[0])

			cy.get('button').contains(' Delete Selected ').should('be.visible')
			cy.get('button').contains('Delete Selected').click({ force: true })
			cy.get('p').should('contain', 'Are you Sure?')
			cy.get('button').contains(' No, Cancel ').click({ force: true })

			cy.findSpan('Records Selected').then(text => {
				const newNumber = parseInt(text.match(/\d+/)[0])
				expect(newNumber).to.equal(originalNumber)
			})
		})
		cy.get('.bi-check').eq(0).click({ force: true })
	}

	static deletecheckbox(indexcheck) {
		cy.findSpan('Records Found').then(text => {
			const originalNumber = parseInt(text.match(/\d+/)[0])

			cy.get('.bi-check').eq(indexcheck).click({ force: true })
			cy.get('button').contains(' Delete Selected ').should('be.visible')
			cy.get('button').contains('Delete Selected').click({ force: true })
			cy.get('p').should('contain', 'Are you Sure?')
			cy.get('button').contains(' Yes, Delete ').click({ force: true })

			cy.get('div')
				.find('p')
				.contains('Successfully Deleted')
				.should('be.visible')

			cy.findSpan('Records Found').then(text => {
				const newNumber = parseInt(text.match(/\d+/)[0])
				expect(newNumber).to.equal(originalNumber - 1)
			})
		})
	}

	static checkSearchBar(menuSearch) {
		cy.get('input[placeholder="Search"]').type(menuSearch)
		cy.get('a[class="oxd-main-menu-item"]').its('length').should('eq', 1)
		cy.get('span').contains(menuSearch).click()
		cy.get('h6').should('contain', menuSearch)
	}

	static checkExistField(firstType, secondType) {
		cy.findSpan('Records Found').then(text => {
			const originalNumber = parseInt(text.match(/\d+/)[0])

			cy.get('button').contains('Add').click({ force: true })
			cy.get('input')
				.eq(1)
				.type(firstType)
				.then(() => {
					cy.get('span').then($span => {
						$span.text().includes('Already exists') &&
							cy.get('input').eq(1).clear().type(secondType)
						cy.get('button').contains('Save').click()
						cy.toastmessage('Successfully Saved')
					})
				})
			cy.findSpan('Records Found').then(text => {
				const newNumber = parseInt(text.match(/\d+/)[0])
				expect(newNumber).to.equal(originalNumber + 1)
			})
		})
	}
}
