describe("Post teszt",()=>{
    it("Adatküldés teszt",()=>{
        cy.request({
            method: 'POST',
            url: 'http://localhost:8000/ujadat',
            body:{id:4,adat:"Szöveg4"}
            
        }).as('testreq');
        cy.get('@testreq').then(res=>{
            expect(res.status).to.eq(201);
            expect(res.body).has.property('message','Adat beszúrva!');
        });

    });

});