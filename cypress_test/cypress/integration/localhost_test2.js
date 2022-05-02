describe("Get teszt",()=>{
    it("Fetch data",()=>{
        cy.request('http://localhost:8000/tesztadat').as('testreq');
        cy.get('@testreq').then(res=>{
            expect(res.status).to.eq(200);
            assert.isArray(res.body,"Rendben, ez tömb");

        });

    });

});