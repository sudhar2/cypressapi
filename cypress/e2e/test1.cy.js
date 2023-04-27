const { get } = require("../support/utils");

describe('test an api', () => {

    it('test 1', function () {
        get(Cypress.env('sampleUrl1')).then((response) => {
            expect(response.fact).to.be.a('string');
            expect(response.length).to.be.a('number');
            expect(response.length).to.be.equal(response.fact.length);
        })
    })
    it('test 2', function () {
        get(Cypress.env('sampleUrl2')).then((response) => {
            expect(response.title).to.be.a('string');
            expect(response.title).to.be.equal('delectus aut autem');
            expect(response.completed).to.be.a('boolean');
            expect(response.userId).to.be.a('number');
            expect(response.id).to.be.a('number');})
    })
});
