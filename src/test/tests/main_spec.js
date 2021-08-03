describe('Main spec', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Title text', () => {
        cy.allure().step('Check');
        cy.get('h1 a').should('have.text', 'Gatsby Default Starter');
    })

    it('Title text', () => {
        cy.get('h1 a').should('have.text', 'Gatsby Default Starter');
    })
})
