describe('fungsional login', () =>{
    //positive case
    it('TL-001-User menginputkan username & password yang valid',() =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','orangehrmlive')
        cy.title().should('include','OrangeHRM')

        cy.xpath('//input[@placeholder="Username"]').should('be.visible')
        cy.xpath('//input[@placeholder="Username"]').clear().type('Admin').should('have.value','Admin')

        cy.xpath('//input[@placeholder="Password"]').should('be.visible')
        cy.xpath('//input[@placeholder="Password"]').clear().type('admin123').should('have.value','admin123')

        cy.xpath('//button[normalize-space()="Login"]').should('be.visible')
        cy.xpath('//button[normalize-space()="Login"]').click()

        cy.url().should('include','/web/index.php/dashboard/index')
        

    });

    //negative case
    it('TL-002-User tidak menginputkan username dan password',() =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','orangehrmlive')
        cy.title().should('include','OrangeHRM')

        cy.xpath('//input[@placeholder="Username"]').should('be.visible')
        cy.xpath('//input[@placeholder="Username"]').clear().should('not.have.value')

        cy.xpath('//input[@placeholder="Password"]').should('be.visible')
        cy.xpath('//input[@placeholder="Password"]').clear().should('not.have.value')

        cy.xpath('//button[normalize-space()="Login"]').should('be.visible')
        cy.xpath('//button[normalize-space()="Login"]').click()

        cy.get('.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message')
        .should('contain.text', 'Required')
      
        cy.url().should('include','/web/index.php/auth/login')
    });

    it('TL-003-User menginputkan username valid & password yang invalid',() =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','orangehrmlive')
        cy.title().should('include','OrangeHRM')

        cy.xpath('//input[@placeholder="Username"]').should('be.visible')
        cy.xpath('//input[@placeholder="Username"]').clear().type('Admin').should('have.value','Admin')

        cy.xpath('//input[@placeholder="Password"]').should('be.visible')
        cy.xpath('//input[@placeholder="Password"]').clear().type('admin').should('have.value','admin')

        cy.xpath('//button[normalize-space()="Login"]').should('be.visible')
        cy.xpath('//button[normalize-space()="Login"]').click()

        cy.get('.oxd-alert.oxd-alert--error').should('contain.text','Invalid credentials')
        cy.url().should('include','/web/index.php/auth/login')
    });

    it('TL-004-User menginputkan username invalid & password valid',() =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','orangehrmlive')
        cy.title().should('include','OrangeHRM')

        cy.xpath('//input[@placeholder="Username"]').should('be.visible')
        cy.xpath('//input[@placeholder="Username"]').clear().type('Admin123').should('have.value','Admin123')

        cy.xpath('//input[@placeholder="Password"]').should('be.visible')
        cy.xpath('//input[@placeholder="Password"]').clear().type('admin123').should('have.value','admin123')

        cy.xpath('//button[normalize-space()="Login"]').should('be.visible')
        cy.xpath('//button[normalize-space()="Login"]').click()

        cy.get('.oxd-alert.oxd-alert--error').should('contain.text','Invalid credentials')
        cy.url().should('include','/web/index.php/auth/login')

    });

    it('TL-005-User hanya mengiputkan password dan tidak menginputkan username',() =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','orangehrmlive')
        cy.title().should('include','OrangeHRM')

        cy.xpath('//input[@placeholder="Username"]').should('be.visible')
        cy.xpath('//input[@placeholder="Username"]').clear().should('not.have.value')

        cy.xpath('//input[@placeholder="Password"]').should('be.visible')
        cy.xpath('//input[@placeholder="Password"]').clear().type('admin123').should('have.value','admin123')

        cy.xpath('//button[normalize-space()="Login"]').should('be.visible')
        cy.xpath('//button[normalize-space()="Login"]').click()

        cy.get('.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message')
        .should('contain.text', 'Required')

    });

    it('TL-006-User hanya menginputkan username dan tidak menginputkan password', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','orangehrmlive')
        cy.title().should('include','OrangeHRM')

        cy.xpath('//input[@placeholder="Username"]').should('be.visible')
        cy.xpath('//input[@placeholder="Username"]').clear().type('Admin').should('have.value','Admin')

        cy.xpath('//input[@placeholder="Password"]').should('be.visible')
        cy.xpath('//input[@placeholder="Password"]').clear().should('not.have.value')

        cy.xpath('//button[normalize-space()="Login"]').should('be.visible')
        cy.xpath('//button[normalize-space()="Login"]').click()

        cy.get('.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message')
        .should('contain.text', 'Required')
    });

    it('TL-007-User menginputkan username dan password yang invalid', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('include','orangehrmlive')
        cy.title().should('include','OrangeHRM')

        cy.xpath('//input[@placeholder="Username"]').should('be.visible')
        cy.xpath('//input[@placeholder="Username"]').clear().type('Admin12').should('have.value','Admin12')

        cy.xpath('//input[@placeholder="Password"]').should('be.visible')
        cy.xpath('//input[@placeholder="Password"]').clear().type('admin12').should('have.value','admin12')

        cy.xpath('//button[normalize-space()="Login"]').should('be.visible')
        cy.xpath('//button[normalize-space()="Login"]').click()

        cy.get('.oxd-alert.oxd-alert--error').should('contain.text','Invalid credentials')
        cy.url().should('include','/web/index.php/auth/login')
    });
});