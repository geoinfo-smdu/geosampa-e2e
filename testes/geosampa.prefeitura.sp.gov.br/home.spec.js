const baseUrl = "http://geosampa.prefeitura.sp.gov.br/"

describe('Home', () => {
  it(`Site está no ar`, () => {
    cy.visit(baseUrl)
  })
})

describe('Download de arquivos', () => {
  it(`Abre formulário para baixar arquivos pelo lateral`, function() {
    cy.visit(baseUrl).wait(2000)
    cy.get('.olControlNoSelect')
      .find('.ctlBtnDownloadArquivosItemInactive')
      .should('be.visible')
      .click()
      .wait(2000)
      .get("#divDownloadCamadas")
      .should('be.visible')
  })
  it(`Abre formulário para baixar arquivos pelo cabeçalho`, function() {
    cy.visit(baseUrl).wait(2000)
    cy.get('form[name="form1"]')
      .should('be.visible')
      .click(887, 24, {
        log: true
      })
      .get("#lblDownloadCamadas")
      .should('be.visible')
    })
})

