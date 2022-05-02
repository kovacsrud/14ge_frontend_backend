describe("Törlés teszt",()=>{
    it("Delete teszt",()=>{
        cy.request({
            method: 'DELETE',
            url: 'http://localhost:8000/torles',
            body: { id: 2 },
        }).as('testreq');
        cy.get('@testreq').then(res=>{
            expect(res.status).to.eq(200);
            expect(res.body).has.property('message','Adat törölve!');

        });

    });

});