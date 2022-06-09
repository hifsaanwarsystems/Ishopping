/// <reference types="cypress"/>
import {Seller} from './seller.cy'
const sellerData=require('../fixtures/seller.createaccount.json')
const storeData=require('../fixtures/seller.storedetails.json')
const businessDetails=require('../fixtures/seller.businessdetails.json')
const pickupdetails=require('../fixtures/seller.pickupDetails.json')
const individualDocumentDetails=require('../fixtures/seller.individualDocument.json')
const businessDocumentDetails=require('../fixtures/seller.businessDocument.json')
const bankDetails=require('../fixtures/seller.bankinfo.json')

describe('Ishopping Tests', () => {

  it('Visit Site', () => {
   
    cy.visit('https://ishopdev.ddways.com/',{failOnStatusCode:false,auth:{username:"developers",password:"xN9PHjF9cM4DRXN2"}})
   

  })
  it('Seller Registration Valid with business document',function(){
    let seller=new Seller()
    cy.visit('https://ishopdev.ddways.com/lofmarketplace/seller/login/',{failOnStatusCode:false,auth:{username:"developers",password:"xN9PHjF9cM4DRXN2"}})
    cy.get('a > .is-button').click()

    //create account
    seller.createAccount(sellerData.validEmail,sellerData.validpassword,sellerData.validFirstName,sellerData.validpassword)
    cy.wait(10000)
    seller.storedetails(storeData.validstoreTitle,storeData.validStoreUrl,storeData.Lahore,storeData.validmobileNo,storeData.Electronics)
    cy.wait(10000)
    seller.businessDetails(businessDetails.Faislabad,businessDetails.validAddress,businessDetails.validContactNumber,businessDetails.validContactPerson,businessDetails.validZipcode)
    cy.wait(10000)
    seller.pickupDetails(pickupdetails.validContactNumber,pickupdetails.validContactPerson,pickupdetails.validtimings,pickupdetails.validAddress)
    cy.wait(10000)
    //seller.individualDocument(individualDocumentDetails.validcnic)
    seller.businessDocument(businessDocumentDetails.validNTNno)
    seller.bank(bankDetails.benificiaryname,bankDetails.bankname,bankDetails.branchName,bankDetails.accountNo,bankDetails.IBAN)
   })
  
   it.only('Seller Registration Valid with individual document',function(){
    let seller=new Seller()
    cy.visit('https://ishopdev.ddways.com/lofmarketplace/seller/login/',{failOnStatusCode:false,auth:{username:"developers",password:"xN9PHjF9cM4DRXN2"}})
    cy.get('a > .is-button').click()

    //create account
    seller.createAccount(sellerData.validEmail,sellerData.validpassword,sellerData.validFirstName,sellerData.validpassword)
    cy.wait(10000)
    seller.storedetails(storeData.validstoreTitle,storeData.validStoreUrl,storeData.Lahore,storeData.validmobileNo,storeData.Electronics)
    cy.wait(10000)
    seller.businessDetails(businessDetails.Faislabad,businessDetails.validAddress,businessDetails.validContactNumber,businessDetails.validContactPerson,businessDetails.validZipcode)
    cy.wait(10000)
    seller.pickupDetails(pickupdetails.validContactNumber,pickupdetails.validContactPerson,pickupdetails.validtimings,pickupdetails.validAddress)
    cy.wait(10000)
    seller.individualDocument(individualDocumentDetails.validcnic)
    cy.wait(10000)
    seller.bank(bankDetails.benificiaryname,bankDetails.bankname,bankDetails.branchName,bankDetails.accountNo,bankDetails.IBAN)
   })
})