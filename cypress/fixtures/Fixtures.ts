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
}
