beforeEach(() => {
  cy
    .visit("http://geosampa.prefeitura.sp.gov.br/")
    .wait(2000)
})

describe('Site está no ar', () => {
  it(`Elemento de renederização do mapa está`, () => {
    cy.get("#molduraMapa").should('be.visible')
  })
})

describe('Download de arquivos', () => {
  it(`Abre formulário para baixar arquivos pelo lateral`, function() {
    cy.get('.olControlNoSelect')
      .find('.ctlBtnDownloadArquivosItemInactive')
      .should('be.visible')
      .click()
      .wait(2000)
      .get("#divDownloadCamadas")
      .should('be.visible')
  })
  it(`Abre formulário para baixar arquivos pelo cabeçalho`, function() {
    cy.get('form[name="form1"]')
      .should('be.visible')
      .click(887, 24, {
        log: true
      })
      .get("#lblDownloadCamadas")
      .should('be.visible')
    })
})

