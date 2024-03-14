// https://docs.cypress.io/api/introduction/api.html
import {Fixtures} from "../fixtures/Fixtures";

describe('Testing the Login + Logout flow', () => {

  beforeEach(()=> {
    Fixtures.open('/')
  })

  after(()=>{})

  it('should visit test page and dry run title assertion', () => {
      cy.contains('Women')
    });
  })
