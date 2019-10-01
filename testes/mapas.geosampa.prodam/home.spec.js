const baseUrl = "http://mapas.geosampa.prodam/"


describe('Home', () => {
  it(`Site está no ar`, () => {
    cy.visit(baseUrl)
  })
})
