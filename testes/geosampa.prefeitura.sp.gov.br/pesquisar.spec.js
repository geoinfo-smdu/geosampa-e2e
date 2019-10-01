beforeEach(() => {
  cy
    .visit("http://geosampa.prefeitura.sp.gov.br/")
    .wait(2000)
})

describe('Pesquisa', () => {
  const logradouros = [
    {
      tipo: "R",
      logradouro: "Teodoro Sampaio"
    },
    {
      tipo: "AV", // inspecionar o seletor da dom pegar do html do <option>
      logradouro: "Antonio Carlos Benjamin dos Santos"
    }
  ]

  logradouros.forEach(logradouro => {
    it(`Pesquisa por ${logradouro.tipo} ${logradouro.logradouro}`, () => {
      cy
        .get('.olControlNoSelect')
        .find('.ctlBtnPesquisaLogradouroItemInactive')
        .click({ force:true })
        .get('area[title="Endereço"]')
        .wait(2000)
        .click(263, 54, {
          log: true,
          force: true
        })
        .get('select[name="cboTIPO_COD"]')
        .select(logradouro.tipo)
        .get('input[name="nome"]')
        .type(logradouro.logradouro)
          .then(() => {
            cy
              .get('input[name="nome"]')
                .invoke('val')
                .then(inputed => expect(inputed === logradouro.logradouro).to.be.true) // input deve ser o mesmo de logradouros (não deve cortar a string)
          })
        .get('#btnPesquisaLogradouro')
        .click({ force:true })
        .wait(1000)
        .get("#popup_container").should($container => {
          expect($container).to.not.be.visible
        })
    })
  })
})
