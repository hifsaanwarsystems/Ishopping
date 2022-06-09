

export class Seller{

 
  createAccount(email,password,firstname,lastname)
  {
    cy.get('#createAccount > .is-seller-form > .fieldset > .legend').should('be.visible')
    cy.get('#email_address1').click().type(email)
    cy.get('#password').click().type(password)
    cy.get('#password-confirmation1').click({force:true}).type(password)
    cy.get('#firstname1').click({force:true}).type(firstname)
    cy.get('#lastname1').click({force:true}).type(lastname)
    cy.get('#openStore').click({force:true})
  }
  storedetails(storetitle,url,city,mobileno,typeProducts)
  {
    cy.url().should('include','https://ishopdev.ddways.com/lofmarketplace/seller/create/')
    cy.get('#shop_title').click().type(storetitle)
    cy.get('#url').click().type(url)
    cy.get('#seller-store-city').select(city)
    cy.get('#seller-store-mobile').click().type(mobileno)
    cy.get('#seller-product-type').select(typeProducts)
    cy.get('#openBusiness').click({force:true})
  }

  businessDetails(businessCity,address,businessTelephone,contactPerson,zipCode)
  {
    cy.url().should('include','https://ishopdev.ddways.com/lofmarketplace/seller/create/')
    cy.get('#seller-business-city').select(businessCity)
    cy.get('#street_1').click().type(address)
    cy.get('#business-telephone').click().type(businessTelephone)
    cy.get('#Seller_firstname').click().type(contactPerson)
    cy.get('#business-zip').click().type(zipCode)
    cy.get('#openPickup').click({force:true})
  }

  pickupDetails(phoneno,contactPerson,time,address)
  {
    cy.get('#pickup-telephone').click().type(phoneno)
    cy.get('#pickup-contact-person').click().type(contactPerson)
    cy.get('#pickup-time').type(time)
    cy.get('#pickup-address').click().type(address)
    cy.get('#openDocument').click({force:true})
  }
  individualDocument(cnic)
  {
   
    cy.get('#cnic').check()
    cy.get('#cnic_number').type(cnic)
    cy.get('#cnic-front').selectFile('cypress/fixtures/testimages/CNICFront.png',{action:'drag-drop'})
    cy.get('#cnic-back').selectFile('cypress/fixtures/testimages/CNIC Back.png',{action:'drag-drop'})
    cy.get('#openBank').click({force:true})
  }
  businessDocument(ntn)
  {
    cy.get('#ntn').check()
    cy.get('#ntn-number').type(ntn)
    cy.get('#ntn-image').selectFile('cypress/fixtures/testimages/NTN verification.webp',{action:'drag-drop'})
    cy.get('#openBank').click({force:true})

  }
  bank(beneficiaryName,bankName,branchName,accountNumber,IBANno)
  {
    cy.get('#beneficiary-name').click().type(beneficiaryName)
    cy.get('#bank-name').click().type(bankName)
    cy.get('#branch-name').click().type(branchName)
    cy.get('#account-number').click().type(accountNumber)
    cy.get('#iban-number').click().type(IBANno)
    cy.get('#chequebook_image').selectFile('cypress/fixtures/testimages/Cheque.png',{action:'drag-drop'})
    cy.get('#privacy_policy').check()
    cy.get(':nth-child(5) > .is-button').click({force:true})
  }
}