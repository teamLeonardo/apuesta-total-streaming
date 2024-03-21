describe('Navigation', () => {
    
    it('Navegacion de la aplicacion', () => {
        cy.viewport(1600, 950)
        cy.visit('/')

        cy.url().should('include', '/inicio')


        cy.get("#carouselHome")
        cy.get("h2").contains('Tops Peliculas');
        cy.get("h2").contains('Series Mas vistas')

        cy.get('a[href*="/peliculas"]')
        cy.get('a[href*="/series"]')

    })

    it('Redirige a peliculas', () => {
        cy.visit('/');
        cy.get('a[href*="/peliculas"]#linkTopeliculas').click();
        cy.url().should('include', '/peliculas')
    });

    it('Redirige a series', () => {
        cy.visit('/');
        cy.get('a[href*="/series"]#linkToseries').click();
        cy.url().should('include', '/series')
    });

})