describe('Main spec', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Title text', () => {
        cy.get('h1 a').should('have.text', 'Gatsby Default Starter 1');
    })

    it('Title text', () => {
        cy.get('h1 a').should('have.text', 'Gatsby Default Starter');
    })
})
