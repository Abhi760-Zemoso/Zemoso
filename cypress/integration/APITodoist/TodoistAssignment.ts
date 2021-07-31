
// API Todoist
// Create a new task 
// Edit new task
// Change the due date
// Sharing the task/app with friends
// Mark task as done
// Reopen a task
// Delete a task
// Create, delete & update label

describe('Todoist',()=>{
    it('Create a new Task, Update and Delete',()=>{
        cy.request({
            method:'POST',
            url:'https://api.todoist.com/rest/v1/tasks',
            auth:{
                bearer:Cypress.env('Token')
            },
            headers: {
                'Content-Type': 'application/json',
            },
            body:{
                "content": "Buy Cake",
                "due": {
                    "date": "2016-09-01",
                    "datetime": "2016-09-01T11:00:00Z",
                    "recurring": false,
                    "string": "2017-07-01 12:00",
                    "timezone": "Europe/Lisbon"
                }
            }
        }).then(responce=>{
            expect(responce.body).to.have.property('content','Buy Cake')
           expect(responce.body.due).to.have.property('date','2021-06-30')
            //Updating Task
            cy.request({
                method:'POST',
                url:"https://api.todoist.com/rest/v1/tasks/"+responce.body.id,
                auth:{
                    bearer:Cypress.env('Token')
                },
                headers: {
                    'Content-Type': 'application/json',
                },
                body:{
                    "content": "Buy Coffee",
                    // "due": {
                    //     "date": "2016-09-01",
                    //     "datetime": "2016-09-01T11:00:00Z",
                    //     "recurring": false,
                    //     "string": "2017-07-01 12:00",
                    //     "timezone": "Europe/Lisbon"
                    // }
                }
            })
            cy.request({
                    method:'GET',
                    url:"https://api.todoist.com/rest/v1/tasks/"+responce.body.id,
                    auth:{
                        bearer:Cypress.env('Token')
                    }
                }).then(responce=>{
                    expect(responce.body).to.have.property('content','Buy Coffee')
                  //  expect(responce.body.due.date).to.be.eq('2021-06-30')
                })
            cy.request({
                    method:'POST',
                    url:"https://api.todoist.com/rest/v1/tasks/"+responce.body.id+"/close",
                    auth:{
                        bearer:Cypress.env('Token')
                    }
                })
            cy.request({
                    method:'POST',
                    url:"https://api.todoist.com/rest/v1/tasks/"+responce.body.id+"/reopen",
                    auth:{
                        bearer:Cypress.env('Token')
                    }
                })
                cy.request({
                    method:'DELETE',
                    url:"https://api.todoist.com/rest/v1/tasks/"+responce.body.id,
                    auth:{
                        bearer:Cypress.env('Token')
                    }
            })
        })
    })

    
    it('Create a new Labelm, Update and Delete',()=>{
        cy.request({
            method:'POST',
            url:'https://api.todoist.com/rest/v1/labels',
            auth:{
                bearer:Cypress.env('Token')
            },
            headers: {
                'Content-Type': 'application/json',
            },
            body:{
                "name": "Food",
            }
        }).then(responce=>{
            expect(responce.body).to.have.property('name','Food')

            //Updating Label
            cy.request({
                method:'POST',
                url:"https://api.todoist.com/rest/v1/labels/"+responce.body.id,
                auth:{
                    bearer:Cypress.env('Token')
                },
                headers: {
                    'Content-Type': 'application/json',
                },
                body:{
                    "name": "Chineese",
                }
            })
            cy.request({
                    method:'GET',
                    url:"https://api.todoist.com/rest/v1/labels/"+responce.body.id,
                    auth:{
                        bearer:Cypress.env('Token')
                    }
                }).then(responce=>{
                    expect(responce.body).to.have.property('name','Chineese')
                })
            
            //Delete Label
            cy.request({
                    method:'DELETE',
                    url:"https://api.todoist.com/rest/v1/labels/"+responce.body.id,
                    auth:{
                        bearer:Cypress.env('Token')
                    }
            })
        })
    })

})