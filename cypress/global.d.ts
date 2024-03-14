// <reference types="cypress" />
declare namespace Cypress {

  type LoginOptions = {
    rememberUser: boolean;
  };

  interface Chainable {
    /**
     * Open a url
     * @param {string} path
     */
    open(path: string):Cypress.Chainable<Cypress.AUTWindow>

    /**
     * Logs-in user by using UI
     */
    login(username: string, password: string, loginOptions?: LoginOptions): void;

    /**
     * Logs out via UI by triggering logout event
     */
    logoutViaUI(): void;

    /**
     * Custom command to select elements
     */
    getBySel(dataTestAttribute: string, args?: any): Chainable<JQuery<HTMLElement>>;

    /**
     * Custom command to make snapshots with full name formed from the test title + suffix easier
     */
    visualSnapshot(maybeName?): Chainable<any>;
  }
}
