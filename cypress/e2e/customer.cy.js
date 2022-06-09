export class Customer
{
  createAccount(firstname,lastname,emailaddress,mobileno,password)
  {
    cy.get('#firstname').click().type(firstname)
    cy.get('#lastname').click().type(lastname)
    cy.get('#cemail_address').click().type(emailaddress)
    cy.get('#mobile_number').click().type(mobileno)
    cy.get('#password').click().type(password)
    cy.get('#password-confirmation1').click().type(password)
    cy.get('.custom-checkbox > input').check()
    cy.get('.is-button').click({force:true})
    cy.url().should('include','https://ishopdev.ddways.com/customer/account')
  }
  emailLogin(email,password)
  {
    cy.get('#email').click().type(email)
    cy.get('#pass').click().type(password)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click({force:true})
  }
  mobilelogin()
  {
    cy.get('#mobile_number_user').check()
  }
}