export default class Header {

    getTitle() {
        return cy.get('h1 a');
    }
}