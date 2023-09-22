import BasePage from "../BasePage";

export default class branding extends BasePage{
    static colorPicker(colorElement){
        cy.get('div[class="oxd-color-input-preview"]').eq(colorElement).click({ force: true })
		cy.get('input').eq(2).clear().type('#423993')
    }
}