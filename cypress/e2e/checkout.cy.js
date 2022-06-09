import { Customer } from './customer.cy'
const customerAccountCreateDetails=require('../fixtures/customer.createaccount.json')

export class Checkout{
   addproducts()
   {
     cy.get(':nth-child(3) > .has-sub-cat').click()
     cy.get('.categories-holder > [href="https://ishopdev.ddways.com/women/tops-women.html"]').click()
     cy.get('#product-item-info_2087 > .product-item-details > .bottom-bar > form > .icon-rounded').click()
     cy.get('.message-success').should('be.visible')
   }
   openingCart()
   {
      cy.get('.minicart-wrapper').click()
      cy.wait(10000)
      cy.get('#top-cart-btn-checkout').click()
   }
   signinIncustomer()
   {
    cy.wait(10000)
     cy.get('#checkout-step-title > .actions-toolbar > .secondary > .action > span').click()
     let customerSignin=new Customer()
     cy.wait(10000)
     customerSignin.emailLogin(customerAccountCreateDetails.email,customerAccountCreateDetails.password)
   }
   shippingInfo()
   {
      cy.get('[name="city"]').click()
   }
}