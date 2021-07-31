import { BaseHands, BaseEyes, BaseDependencies } from '../BaseRobot';



export class Dependencies extends BaseDependencies {
   
    visitAmazon(){
        this.accessUrl('/');
    }

    login(){
        cy.get('#ap_email').type(Cypress.env('USER_NAME')+'{enter}');
         cy.get('#ap_password').type(Cypress.env('PASSWORD')+'{enter}');
        
        return this;
    }
}

export class RobotEyes extends BaseEyes{

    seesCartElements(){
        cy.get('[data-name="Active Items"] .sc-list-item').invoke('attr','data-minquantity')
        .then(qaunt=>{
            cy.get('[data-name="Active Items"] .sc-list-item').invoke('attr','data-quantity')
            .should('eq',qaunt)
        })
    }

    getDeliveryDate(dom:string,index:number){
        cy.get(dom).eq(index).contains('Get it by').parent().find('span').eq(1)

        return this
    }
    
    checkAddedAddress(){
        cy.get(".id-addr-ux-search-text").contains(Cypress.env('Name'))
        .should('have.length',1)
    }
}

export class RobotHands extends BaseHands{

    searchtesting(){
        this.typeTextonDom("name", "search", "Automation Testing")
            .clickOnDomElement("[class='sprite svg-search-icon']")

        return this
    }

    search(str:string){
        this.typeTextonId('twotabsearchtextbox',str+'{enter}')

        return this
    }
    goToLinkOnDomElementWithIndex(dom:string,index:number){
        cy.get(dom).eq(index).find('.a-link-normal').eq(0).should('have.attr','href')
        .then((href)=>{
            cy.visit(href)
        })

        return this
    }

    addToCart(){
        this.clickOnId('add-to-cart-button')

        return this
    }

    goToCart(){
        this.clickOnId('nav-cart')

        return this
    }

    clickOnLeftNavMenu(){
        this.clickOnId('nav-hamburger-menu')

        return this
    }
    clickOnDomElementContains(dom:string,text:string){
        cy.get(dom).contains(text).click()

        return this
    }

    addAddress(){
        this.typeTextonId('address-ui-widgets-enterAddressFullName',Cypress.env('Name'))
        this.typeTextonId('address-ui-widgets-enterAddressPhoneNumber',Cypress.env('Phone'))
        this.typeTextonId('address-ui-widgets-enterAddressPostalCode',Cypress.env('Postal'))
        this.typeTextonId('address-ui-widgets-enterAddressLine1',Cypress.env('Line'))
        cy.get('#address-ui-widgets-form-submit-button').click()

        return this
    }
}

// "address-ui-widgets-enterAddressPhoneNumber"


// <div  data-index="2" data-uuid="5c8c8cb2-2ac2-4823-bcd9-9221aa25cffb" data-component-type="s-search-result" class="sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 AdHolder sg-col sg-col-4-of-20" data-component-id="90" data-cel-widget="search_result_2"><div class="sg-col-inner">

// <span cel_widget_id="MAIN-SEARCH_RESULTS-2" class="celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results" data-csa-c-id="ze6t2j-hxztai-f3dqfo-8fcf8u" data-cel-widget="MAIN-SEARCH_RESULTS-2">

// <div data-component-type="s-impression-logger" data-component-props="{&quot;percentageShownToFire&quot;:&quot;50&quot;,&quot;batchable&quot;:true,&quot;requiredElementSelector&quot;:&quot;.s-image&quot;,&quot;url&quot;:&quot;https://www.amazon.in/gp/sponsored-products/logging/log-action.html?qualifier=1624350184&amp;id=4299638002415856&amp;widgetName=sp_atf&amp;adId=20048904146204&amp;eventType=1&amp;adIndex=0&quot;}" class="rush-component s-expand-height" data-component-id="91">

// <div data-component-type="sp-sponsored-result" class="rush-component s-expand-height" data-component-id="92">
// <div class="s-expand-height s-include-content-margin s-border-bottom s-latency-cf-section"><div class="a-section a-spacing-medium"><div class="a-section a-spacing-micro s-grid-status-badge-container"></div><span data-component-type="s-product-image" class="rush-component" data-component-id="1"><a class="a-link-normal s-no-outline" target="_blank" href="/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&amp;adId=A048760519KTUQPEN9235&amp;url=%2FHORNBULL-Brown-Mens-Wallet%2Fdp%2FB072MFVNML%2Fref%3Dsr_1_1_sspa%3Fcrid%3D2792EOIVIHU8E%26dchild%3D1%26keywords%3Dtoday%2Bdeals%26qid%3D1624350184%26sprefix%3Dtoda%252Caps%252C351%26sr%3D8-1-spons%26psc%3D1&amp;qualifier=1624350184&amp;id=4299638002415856&amp;widgetName=sp_atf"><div class="a-section aok-relative s-image-square-aspect"><img class="s-image" src="https://m.media-amazon.com/images/I/91kC5W+S8fL._AC_UL320_.jpg" srcset="https://m.media-amazon.com/images/I/91kC5W+S8fL._AC_UL320_.jpg 1x, https://m.media-amazon.com/images/I/91kC5W+S8fL._AC_UL480_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/91kC5W+S8fL._AC_UL640_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/91kC5W+S8fL._AC_UL800_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/91kC5W+S8fL._AC_UL960_FMwebp_QL65_.jpg 3x" alt="Sponsored Ad - Hornbull Themes Brown Mens Leather Wallet | Stylish Leather Wallet for Mens | RFID Blocking Genuine Leather..." data-image-index="1" data-image-load="" data-image-latency="s-product-image" data-image-source-density="1"></div></a></span><div class="a-section a-spacing-none a-text-center"><div class="a-section s-color-swatch-container"><a class="a-link-normal s-color-swatch-link s-spacing-small" href="/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&amp;adId=A048760519KTUQPEN9235&amp;url=%2FHORNBULL-Brown-Mens-Wallet%2Fdp%2FB072MFVNML%2Fref%3Dsr_1_1_sspa%3Fcrid%3D2792EOIVIHU8E%26dchild%3D1%26keywords%3Dtoday%2Bdeals%26qid%3D1624350184%26sprefix%3Dtoda%252Caps%252C351%26sr%3D8-1-spons%26psc%3D1&amp;qualifier=1624350184&amp;id=4299638002415856&amp;widgetName=sp_atf" role="link"><u>+11 colors/patterns</u></a></div></div><div class="a-section a-spacing-none a-spacing-top-small"><div class="a-row a-spacing-micro"><span class="a-declarative" data-action="a-popover" data-a-popover="{&quot;closeButton&quot;:&quot;true&quot;,&quot;dataStrategy&quot;:&quot;preload&quot;,&quot;name&quot;:&quot;sp-info-popover-B072MFVNML&quot;,&quot;position&quot;:&quot;triggerVertical&quot;}"><a href="javascript:void(0)" role="button" style="text-decoration: none;" aria-label="View Sponsored information or leave ad feedback" class="s-label-popover s-sponsored-label-text"><span class="s-label-popover-default"><span class="a-color-secondary">Sponsored</span></span><span class="s-label-popover-hover"><span class="a-color-base">Sponsored</span></span> <span class="aok-inline-block s-sponsored-label-info-icon"></span></a></span><div class="a-popover-preload" id="a-popover-sp-info-popover-B072MFVNML"><span>You are seeing this ad based on the product’s relevance to your search query.</span><div class="a-row"><span class="a-declarative" data-action="s-safe-ajax-modal-trigger" data-s-safe-ajax-modal-trigger="{&quot;ajaxUrl&quot;:&quot;/gp/aq-feedback/lazyLoad/handler/af-sp-form-handler.html?pl=%7B%22adPlacementMetaData%22%3A%7B%22searchTerms%22%3A%22dG9kYXkgZGVhbHM%3D%22%2C%22pageType%22%3A%22Search%22%2C%22feedbackType%22%3A%22sponsoredProductsLoom%22%2C%22slotName%22%3A%22TOP%22%7D%2C%22adCreativeMetaData%22%3A%7B%22adProgramId%22%3A1024%2C%22adCreativeDetails%22%3A%5B%7B%22asin%22%3A%22B072MFVNML%22%2C%22title%22%3A%22Hornbull+Themes+Brown+Mens+Leather+Wallet+%7C+Stylish+Leather+Wallet+for+Mens+%7C+RFID+Blocking+Genuine+%22%2C%22priceInfo%22%3A%7B%22amount%22%3A460.0%2C%22currencyCode%22%3A%22INR%22%7D%2C%22sku%22%3A%22HBCL15MWR095%22%2C%22adId%22%3A%22A048760519KTUQPEN9235%22%2C%22campaignId%22%3A%22A009233815ZZ093X5H8X0%22%7D%5D%7D%7D&quot;,&quot;dataStrategy&quot;:&quot;ajax&quot;,&quot;header&quot;:&quot;Share Your Feedback&quot;}"><a class="a-link-normal" href="#"><span>Let us know</span> </a> </span></div></div></div><h2 class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"><a class="a-link-normal a-text-normal" target="_blank" href="/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&amp;adId=A048760519KTUQPEN9235&amp;url=%2FHORNBULL-Brown-Mens-Wallet%2Fdp%2FB072MFVNML%2Fref%3Dsr_1_1_sspa%3Fcrid%3D2792EOIVIHU8E%26dchild%3D1%26keywords%3Dtoday%2Bdeals%26qid%3D1624350184%26sprefix%3Dtoda%252Caps%252C351%26sr%3D8-1-spons%26psc%3D1&amp;qualifier=1624350184&amp;id=4299638002415856&amp;widgetName=sp_atf"><span class="a-size-base-plus a-color-base a-text-normal">Hornbull Themes Brown Mens Leather Wallet | Stylish Leather Wallet for Mens | RFID Blocking Genuine Leather Mens Wallet</span> </a> </h2></div><div class="a-section a-spacing-none a-spacing-top-micro"><div class="a-row a-size-small"><span aria-label="4.2 out of 5 stars"><span class="a-declarative" data-action="a-popover" data-a-popover="{&quot;closeButton&quot;:false,&quot;closeButtonLabel&quot;:&quot;&quot;,&quot;position&quot;:&quot;triggerBottom&quot;,&quot;popoverLabel&quot;:&quot;&quot;,&quot;url&quot;:&quot;/review/widgets/average-customer-review/popover/ref=acr_search__popover?ie=UTF8&amp;asin=B072MFVNML&amp;ref=acr_search__popover&amp;contextId=search&quot;}"><a href="javascript:void(0)" class="a-popover-trigger a-declarative"><i class="a-icon a-icon-star-small a-star-small-4 aok-align-bottom"><span class="a-icon-alt">4.2 out of 5 stars</span></i><i class="a-icon a-icon-popover"></i></a></span> </span><span aria-label="8,237"><a class="a-link-normal" target="_blank" href="/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&amp;adId=A048760519KTUQPEN9235&amp;url=%2FHORNBULL-Brown-Mens-Wallet%2Fdp%2FB072MFVNML%2Fref%3Dsr_1_1_sspa%3Fcrid%3D2792EOIVIHU8E%26dchild%3D1%26keywords%3Dtoday%2Bdeals%26qid%3D1624350184%26sprefix%3Dtoda%252Caps%252C351%26sr%3D8-1-spons%26psc%3D1&amp;qualifier=1624350184&amp;id=4299638002415856&amp;widgetName=sp_atf#customerReviews"><span class="a-size-base">8,237</span> </a> </span></div></div><div class="a-section a-spacing-none a-spacing-top-small"><div class="a-row a-size-base a-color-base"><a class="a-size-base a-link-normal a-text-normal" target="_blank" href="/gp/slredirect/picassoRedirect.html/ref=pa_sp_atf_aps_sr_pg1_1?ie=UTF8&amp;adId=A048760519KTUQPEN9235&amp;url=%2FHORNBULL-Brown-Mens-Wallet%2Fdp%2FB072MFVNML%2Fref%3Dsr_1_1_sspa%3Fcrid%3D2792EOIVIHU8E%26dchild%3D1%26keywords%3Dtoday%2Bdeals%26qid%3D1624350184%26sprefix%3Dtoda%252Caps%252C351%26sr%3D8-1-spons%26psc%3D1&amp;qualifier=1624350184&amp;id=4299638002415856&amp;widgetName=sp_atf"><span class="a-price" data-a-size="l" data-a-color="price"><span class="a-offscreen">₹461</span><span aria-hidden="true"><span class="a-price-symbol">₹</span><span class="a-price-whole">461</span></span></span> <span class="a-price a-text-price" data-a-size="b" data-a-strike="true" data-a-color="secondary"><span class="a-offscreen">₹1,899</span><span aria-hidden="true">₹1,899</span></span> </a> <span class="a-letter-space"></span><span>Save ₹1,438 (76%)</span></div><div class="a-row a-size-base a-color-secondary"><span data-component-type="s-coupon-component" class="rush-component" data-component-props="{&quot;asin&quot;:&quot;B072MFVNML&quot;}" data-component-id="2"><span class="s-coupon-clipped aok-hidden"><span class="a-color-base">3% coupon applied at checkout</span></span><span class="s-coupon-unclipped"><span class="a-size-base s-highlighted-text-padding aok-inline-block s-coupon-highlight-color">Save 3%</span> <span class="a-color-base"> with coupon</span></span></span> </div></div><div class="a-section a-spacing-none a-spacing-top-micro"><div class="a-row a-size-base a-color-secondary s-align-children-center"><span>FREE Delivery on your first order in this category</span></div></div></div></div>
// </div>

// </div>

// </span>

// </div></div>