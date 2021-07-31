
var itemName


function selectInput(ele,x){
    cy.get(ele).click().get('[data-option-index="'+x+'"]').then(($ele)=>{
        itemName=$ele.text()
    }).click().then(()=>{
        cy.get(ele).should('have.value',itemName)
    })
}

function selectFromDropDown(ele,x){
    cy.get(ele).click().get('[data-option-index="'+x+'"]').then(($ele)=>{
        itemName=$ele.text()
    }).click()
}
function clearSelection(){
    cy.get('.MuiInputBase-input').clear()
}

describe('Green commute Starting page',()=>{
    beforeEach(()=>{
        cy.visit('http://bc15-green-commute.dev-apps.io/')
    })
    
    it('Type and check every element in location list',()=>{
        for(let i=0;i<6;i++){
            selectInput('.MuiInputBase-input',i)
            clearSelection()
        }
    })

    it('testing next, skip, back, Finish button',()=>{

        cy.get('.MuiButton-containedPrimary').click()
        cy.on('window:alert',(txt)=>{
            expect(txt).to.contains('please enter the location')
        })
        selectInput('.MuiInputBase-input',0)
        cy.get('.MuiButton-containedPrimary').click().then(()=>{
            cy.get('#backButton').click()
            cy.get('.MuiButton-outlinedPrimary').click().click()
        
            cy.get('.MuiButton-containedPrimary').click().then(()=>{
                cy.url().should('include','/findJobs')
            })
        })
    })
    
    it('Navigation',()=>{
        selectInput('.MuiInputBase-input',2)
        cy.get('.MuiButton-containedPrimary').click()
        selectInput('.MuiInputBase-input',3)
        cy.get('.MuiButton-containedPrimary').click()
        selectFromDropDown('.MuiInputBase-input',1)
        selectFromDropDown('.MuiInputBase-input',4)
        selectFromDropDown('.MuiInputBase-input',5)
        selectFromDropDown('.MuiInputBase-input',1)
        cy.get('.MuiButton-containedPrimary').click()
        cy.url().should('include','/findJobs')
    })
})

// In Landing Page:
// 1. Find Jobs
// 2. Saved Jobs are functional

// In filters
// Note: These filters can be applied only when you add a jobLocation, skills in the landing page and click on search button
// 3. Distance, green commute option will reflect changes in jobs that are being displayed
// 4. And rest other options are just mocked where only chips are displayed on the screen. These will not affect the jobs that are being displayed.

// Remove the Saved Job
// 5. Navigate to saved jobs tab
// 6. We can also remove the saved jobs if we click on any job in saved jobs list.


function applyFilter(name,nth){
    cy.get('.jss27>button').click().then(()=>{
        cy.get('.MuiGrid-container').find('[data-testid="filter-type"]').contains(name).parent().children('div:nth-child('+nth+')')
        .find('input').check().should('be.checked')
    })
    cy.get('.MuiButton-label').contains('Apply').click()
}

function removeFilter(name,nth){
    cy.get('.jss27>button').click().then(()=>{
        cy.get('.MuiGrid-container').contains(name).parent().children('div:nth-child('+nth+')')
        .find('input').uncheck().should('not.be.checked')
    })
    cy.get('.MuiButton-label').contains('Apply').click()
}

function clearFilter(){
    cy.get('.MuiButton-label').contains('Clear all').click()
}

describe('Assignment',()=>{
    beforeEach(()=>{
        cy.visit('http://bc15-green-commute.dev-apps.io/findJobs')
    })

    it('testing find jobs and saved jobs functionality',()=>{
        cy.get('.MuiListItem-button').contains('p','Saved Jobs').parent().parent().click()
        cy.url().should('include','/savedJobs')
        cy.get('.MuiListItem-button').contains('p','Find Jobs').parent().parent().click()
        cy.url().should('include','/findJobs')
    })

    it('filters, add and remove filters',()=>{
        cy.get('.MuiAutocomplete-inputFocused').each(($ele)=>{
            selectFromDropDown($ele,2)
        })
        cy.get('.MuiButton-containedPrimary').click()
        .then(()=>{
            cy.contains('UI/UX Designer').should('have.length',1)
        })
        
        applyFilter('Distance',2)
        applyFilter('Green Commute',2)
        removeFilter('Distance',2)
        applyFilter('Distance',3)
        clearFilter()
    })

    it('Add and Remove, Saved jobs',()=>{
        cy.contains('Software Engineer 1').click()
        cy.get('.MuiGrid-container').find('[data-testid="button"]').contains('Save').click()
        cy.get('.MuiListItem-button').contains('p','Saved Jobs').click()
        cy.get('.MuiGrid-container>.MuiGrid-item').find('[data-testid="jobCard-placeholder"]')
        .contains('Software Engineer 1').should('to.have.length','1').click()

        cy.get('.MuiGrid-container').find('[data-testid="button"]').contains('Remove').click()
        cy.get('.MuiGrid-container>.MuiGrid-item').find('[data-testid="jobCard-placeholder"]')
        .contains('Software Engineer 1').should('to.have.length','0')
    })
})