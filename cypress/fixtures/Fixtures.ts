/**
 * main page initialisation containing functionality
 * that is shared across all test cases
 */
export class Fixtures {
  public static init(): {user()} {
    return {
      user: () => cy.login(Cypress.env("test_user"), Cypress.env("test_password"))
    }
  }
  public static exit():void{
    return cy.logoutViaUI()
  }

  public static open(path){
    return cy.visit(path);
  }

  public static clearAddress(flag: boolean) {
    cy.get('[title="Addresses"]').click();
    cy.get('#center_column').then(($alert) => {
      if ($alert.find('.alert-warning')) {
        cy.get('[title="Delete"]').click({ multiple: true });
      } else {
        cy.log('Alert warning exists. Skipping delete operation.');
      }
    });

    return flag;
  }
}
