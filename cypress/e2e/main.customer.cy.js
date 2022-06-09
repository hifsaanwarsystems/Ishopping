/// <reference types="cypress"/>
import { Customer } from './customer.cy'
const customerAccountCreateDetails=require('../fixtures/customer.createaccount.json')

describe('Ishopping Tests Customer Flow', () => {

  it('Customer Creation',function(){

    let customer= new Customer()
     cy.visit('https://ishopdev.ddways.com/customer/account/create/',{failOnStatusCode:false,auth:{username:"developers",password:"xN9PHjF9cM4DRXN2"}})
     customer.createAccount(customerAccountCreateDetails.firstname,customerAccountCreateDetails.lastname,customerAccountCreateDetails.email,customerAccountCreateDetails.mobileno,customerAccountCreateDetails.password)
   })

it('Customer Signin via email',function()
{
  let customerSignin=new Customer()
  cy.visit('https://ishopdev.ddways.com/customer/account/login',{failOnStatusCode:false,auth:{username:"developers",password:"xN9PHjF9cM4DRXN2"}})
  customerSignin.emailLogin(customerAccountCreateDetails.email,customerAccountCreateDetails.password)
})

/*it.only('Customer Signin via mobile',function()
{
  let customerSignin=new Customer()
  cy.visit('https://ishopdev.ddways.com/customer/account/login',{failOnStatusCode:false,auth:{username:"developers",password:"xN9PHjF9cM4DRXN2"}})
 customerSignin.mobilelogin()
 cy.wait(10000)
})
*/

})