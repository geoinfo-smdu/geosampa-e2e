const baseUrl = "http://mapas.geosampa.prodam/"


describe('Home', () => {
  it(`Site está no ar`, () => {
    cy.visit(baseUrl)
  })
})

describe('Download de arquivos', () => {
  it(`Existe botão para download de arquivos`, () => {
    // retorna objeto window após carregar página
    cy.window().then((win) => {
      cy.log(win) // log de todos os métodos e variáveis globais.. rever?
      cy.wrap(win.$('div[title="Download de Arquivos"]')[1]['title']).should('eq','Download de Arquivos')
    })
  })
})
