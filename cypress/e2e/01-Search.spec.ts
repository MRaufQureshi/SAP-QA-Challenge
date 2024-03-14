// https://docs.cypress.io/api/introduction/api.html
import {Fixtures} from "../fixtures/Fixtures";
import {SearchSelector} from "../objects/SearchSelector";
import {ShoppingCart, ShoppingCartSelector} from "../objects/ShoppingCartSelector";
import {addressHomeData} from "../support/addressHome.data";
let tmptitle: any
let tmpX: any
describe('Search Page', () => {

  beforeEach(()=> {
    Fixtures.open('/')
  })

  after(()=> {
    Fixtures.exit()
    })

  it('should verify "Search functionality"', () => {
    cy.get(SearchSelector.searchBar).should('be.visible').type('Dress')
    cy.get(SearchSelector.iconButtonMagnifyingGlass).should('be.visible').click()
    cy.request({
      url: '/index',
      followRedirect: true, // turn on following redirects
    }).then((resp) => {
      expect(resp.status).to.eq(200)
    })
  });

  it('should verify that "Product" is added to the cart', () => {
    cy.get(SearchSelector.searchBar).should('be.visible').type('Dress')
    cy.get(SearchSelector.iconButtonMagnifyingGlass).should('be.visible').click()
    cy.get(SearchSelector.productGrid.firstItem).find(SearchSelector.productGrid.layerCartProductTitle).then(($value) => {
       tmptitle = $value.text()
    })
    cy.get(SearchSelector.productGrid.firstItem).trigger('mouseover')
    cy.get(SearchSelector.productGrid.firstItem).find(SearchSelector.productGrid.buttonQuickView).should('be.visible').click()
    cy.getIframe().find(SearchSelector.productGrid.dropdownSize).select('M')
    cy.getIframe().find(SearchSelector.productGrid.buttonAddToCart).click()

    cy.get(SearchSelector.productGrid.layerItemCart).should('contain.text','Product successfully added to your shopping cart')
    cy.get(SearchSelector.productGrid.buttonProceedToCheckout).click()
    cy.request({
      url: '/index.php?controller=order',
      followRedirect: true, // turn on following redirects
    }).then((resp) => {
      expect(resp.status).to.eq(200)
    })

    /*Assertion to be fixed later*/
/*    cy.get(Shopping_Cart.columnDescription).find(Shopping_Cart.productName).then(($value) => {
      tmpX = $value.text()
      expect(tmpX).to.eq(tmptitle)
    })*/
  });

  it('should add "Product" checkout cart', () => {
    Fixtures.init().user()
    Fixtures.clearAddress(true)
    ShoppingCart.addProduct()
    cy.get(ShoppingCartSelector.buttonProceedToCheckout).click()
    cy.get(ShoppingCartSelector.inputTextAddress).type(addressHomeData.addressLine1)
    cy.get(ShoppingCartSelector.inputTextCity).type(addressHomeData.city)
    cy.get(ShoppingCartSelector.dropdownState).select(addressHomeData.state)
    cy.get(ShoppingCartSelector.inputTextZip).type(addressHomeData.zip)
    cy.get(ShoppingCartSelector.dropdownCountry).select(addressHomeData.country)
    cy.get(ShoppingCartSelector.inputTextHomePhone).type(addressHomeData.phoneNumber)
    cy.get(ShoppingCartSelector.inputTextMoblie).type(addressHomeData.mobileNumber)
    cy.get(ShoppingCartSelector.inputTextFutureReference).type(addressHomeData.futureReference)
    cy.get(ShoppingCartSelector.buttonSaveAddress).click()
    cy.get(ShoppingCartSelector.buttonContinue).click({force: true})
    cy.get(ShoppingCartSelector.checkboxTermsOfServices).click()
    cy.get(ShoppingCartSelector.buttonProceedToCheckout).click()
    cy.get(ShoppingCartSelector.optionPayByBankWire).click()
    cy.wait(2000)
    cy.get(ShoppingCartSelector.buttonConfirmOrder).click()
    cy.wait(2000)
    cy.get(ShoppingCartSelector.infoMessageSuccess).then(($value) => {
      tmpX = $value.text()
      expect(tmpX).to.eq('Your order on My Shop is complete.')
    })
  });

})
