// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import {SearchSelector} from "../objects/SearchSelector";

Cypress.Commands.add(
    "getBySel",
    (selector, ...args) => {
        return cy.get(`${selector}`, ...args);
    });

Cypress.Commands.add(
    "login",
    (username, password, { rememberUser = false } = {}) => {
        const signinPath = "/";
        const log = Cypress.log({
            name: "login",
            displayName: "LOGIN",
            message: [`🔐 Authenticating | ${username}`],
            autoEnd: false,
        });

        cy.location("pathname", { log: false }).then((currentPath) => {
            if (currentPath !== signinPath) {
                cy.visit(signinPath);
            }
        });

        log.snapshot("before");
        cy.getBySel('.login').click()
        cy.getBySel("#email").type(username);
        cy.getBySel("#passwd").type(password);
        cy.getBySel("#SubmitLogin").click();
    })

Cypress.Commands.add(
    'logoutViaUI',
    () => {
        cy.getBySel('.logout').click()
    })

Cypress.Commands.add('getIframe',() => {
    let $body
    return cy.get(SearchSelector.productGrid.productIframe)
        .should('be.visible')
        .then(($iframe) => {
            $body = $iframe.contents().find('body')
            cy.wrap($body)
        })
})