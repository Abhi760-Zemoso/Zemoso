import { RobotEyes, RobotHands, Dependencies } from '../../robots/Amazon/amazonRobot';


// UI Assignment 

// Open Amazon.in
// Click on Today’s  Deals 
// Get the 3rd deals and 
// Add min quantities required item and verify the cart if the quantity is as expected
// Search for Mobiles and scroll down and get the last displayed item details
// Select the amazon prime delivery checkbox and get the first displayed item delivery date.
// Check for delivery status
// Navigation - from left nav to Mobiles and select Mobiles phones and got back to the main menu.
// Goto ur orders and select Past one year order
//  Add a new payment option and verify payment option is added
//  Add a new delivery  address and verify the address is added






context('Amazon Assignment', () => {
    const robotEyes = new RobotEyes();
    const robotHands = new RobotHands();
    const dependencies = new Dependencies()
    
        describe('UI', ()=>{
            beforeEach(()=>{
                dependencies.visitAmazon();
            })
            

            it("Today's deals, add nth element to cart and verify", () => {
                robotHands.search('today deals')
                .goToLinkOnDomElementWithIndex('.s-result-list [data-component-type="s-search-result"]',5)
                .addToCart()
                .goToCart()
                robotEyes.seesCartElements()
            })
            
            it('Search for Mobiles and scroll down and get the last displayed item details, get delivery date',()=>{
                robotHands.search('Mobiles')
                cy.scrollTo('bottom',{duration:3000})
                robotHands.goToLinkOnDomElementWithIndex('.s-main-slot > [data-component-type="s-search-result"]',-1)
                cy.go('back')
                robotEyes.getDeliveryDate('.s-main-slot > [data-component-type="s-search-result"]',0)
            })

            it('left nav to mobiles and back to home page',()=>{
                robotHands.clickOnLeftNavMenu()
                .clickOnDomElement('#hmenu-content [data-menu-id="8"]')
                .clickOnDomElementContains('#hmenu-content','All Mobile')
                cy.go('back')
            })

            it('go to orders and select past one year orders',()=>{
                robotHands.clickOnId('nav-orders')
                dependencies.login()
                robotHands.clickOnId('timePeriodForm')
                .clickOnDomElementContains('#orderFilter_3','2020')
            })

            it('Add Address and verify',()=>{
                robotHands.clickOnId('nav-link-accountList')
                dependencies.login()
                robotHands.clickOnId('nav-link-accountList')
                .clickOnDomElementContains(".ya-card-cell",'Your Addresses')
                .clickOnId('ya-myab-address-add-link')
                .addAddress()
                robotEyes.checkAddedAddress()
            })
    
        });
    
    });

// "ya-myab-address-add-link" "ya-myab-plus-address-icon"