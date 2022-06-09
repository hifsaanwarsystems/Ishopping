/// <reference types="cypress"/>
import { Customer } from './customer.cy'
import { Checkout } from './checkout.cy'
const customerAccountCreateDetails=require('../fixtures/customer.createaccount.json')

describe('Ishopping Tests Customer Flow', () => {
    it('Checkout flow',function()
    {
        cy.visit('https://ishopdev.ddways.com/',{failOnStatusCode:false,auth:{username:"developers",password:"xN9PHjF9cM4DRXN2"}})
    })
})