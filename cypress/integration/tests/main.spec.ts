import cypress from 'cypress';

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

    it('should be defined', () => {
        cy.get('.panel', {timeout: 3000}).should(($panel) => {
            expect($panel).to.be.length(2);
            expect($panel.first()).to.contain('Portfolio');
        });

    });

    it('must change the first project presented after click move on', async() => {
        
            cy.get('.projects-content').find('.next-box').click();       
            cy.get('.panel').should(($panel) => {
                console.log($panel.first());
                expect($panel.first()).to.contain('personal site');
            });
    });

    it('must change the first project presented after click move come back', async() => {
        
        cy.get('.projects-content').find('.previous-click').click();       
        cy.get('.panel').should(($panel) => {
            console.log($panel.first());
            expect($panel.first()).to.contain('portfolio');
        });
    });

    it('must change the first project presented after click move on to final project', async() => {
        
        cy.get('.projects-content').find('.next-box').click(); 
        cy.get('.projects-content').find('.next-box').click(); 
        cy.get('.projects-content').find('.next-box').click(); 
 
        cy.get('.panel').should(($panel) => {
            console.log($panel.first());
            expect($panel.first()).to.contain('pizza finder');
        });
    });
});