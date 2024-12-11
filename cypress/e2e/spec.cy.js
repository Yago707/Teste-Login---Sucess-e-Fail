describe('template spec', () => {
  it('Login - Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type("Admin")
    cy.get("[name='password']").type("admin123")
    cy.get(".oxd-button").click()
  })

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type("Test")
    cy.get("[name='password']").type("test")
    cy.get(".oxd-button").click()
    cy.get(".oxd-alert")
  })
})