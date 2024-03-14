import {SearchSelector} from "./SearchSelector";

export const ShoppingCartSelector = {
    columnDescription: '.cart_description',
    productName: '.product-name > a',
    buttonProceedToCheckout: '.standard-checkout',
    inputTextAddress:'#address1',
    inputTextCity:'#city',
    dropdownState:'#id_state',
    inputTextZip:'#postcode',
    dropdownCountry:'#id_country',
    inputTextHomePhone:'#phone',
    inputTextMoblie:'#phone_mobile',
    inputTextFutureReference:'#alias',
    checkboxTermsOfServices:'#cgv',
    optionPayByBankWire:'.bankwire',
    buttonConfirmOrder:'#cart_navigation [type="submit"]',
    infoMessageSuccess:'.alert-success',
    buttonSaveAddress:'#submitAddress',
    buttonContinue:'[name="processAddress"]',


}

export class ShoppingCart{
    public static addProduct(){
        cy.get(SearchSelector.searchBar).should('be.visible').type('Dress')
        cy.get(SearchSelector.iconButtonMagnifyingGlass).should('be.visible').click()
        cy.get(SearchSelector.productGrid.firstItem).trigger('mouseover').find(SearchSelector.productGrid.buttonQuickView)
            .should('be.visible').click()
        cy.wait(2000)
        cy.getIframe().find(SearchSelector.productGrid.dropdownSize).select('M')
        cy.getIframe().find(SearchSelector.productGrid.buttonAddToCart).click()
        cy.get(SearchSelector.productGrid.buttonProceedToCheckout).click()
    }
}