import { BasePage } from "./BasePage";

export class PracticeFormPage extends BasePage {
  static get url() {
    return "/#/";
  }

  static setFirstName(firstName) {
    cy.get('#firstName').type(firstName);
  }
  static setLastName(lastName) {
    cy.get('#lastName').type(lastName);
  }
  static setEmail(email) {
    cy.get('#userEmail').type(email);
  }
  static setGender() {
    cy.get('label[for="gender-radio-1"]').click();
  }
  static setMobileNumber(Number) {
    cy.get('#userNumber').type(Number);
  }
  static setAddress(address) {
    cy.get('#currentAddress').type(address);
  }

  static setDateOfBirth() {
    cy.get('#dateOfBirthInput').click();
    // cy.get('button["aria-label="Next Month"]').click();
    cy.get('.react-datepicker__year-select').select('1930');
    cy.get('.react-datepicker__month-select').select('February');
    cy.get('[aria-label="Choose Friday, February 28th, 1930"]').click();
  }

  static setSubjects() {
    cy.get('#subjectsInput').type('Economics');
    cy.get('.subjects-auto-complete__menu').should('be.visible');
    cy.get('.subjects-auto-complete__menu-list').find('div').contains('Economics').click();
  }
  static setHobbiestoMusic() {
    cy.get('label[for="hobbies-checkbox-3"]').click();
  }
  static uploadPicture() {
    cy.get('#uploadPicture').selectFile('cypress/files/audiR8.jpg');
  }

  static setStateToNCR() {
    cy.get('#state').click();
    cy.get('#react-select-3-option-0').click();
  }
  static setCityToDelhi() {
    cy.get('#city').click();
    cy.get('#react-select-4-option-0').click();
  }
  static clickSubmit() {
    cy.get('#submit').click();
  }

  static validateName() {
    return cy.get('td').contains('Student Name').next();
  }

  static validateEmail() {
    return cy.get('td').contains('Student Email').next();
  }

  static validateGender() {
    return cy.get('td').contains('Gender').next();
  }
  static validateMobile() {
    return cy.get('td').contains('Mobile').next();
  }
  static validateDateOfBirth() {
    return cy.get('td').contains('Date of Birth').next();
  }
  static validateSubjects() {
    return cy.get('td').contains('Subjects').next();
  }
  
  static validateHobbies() {
    return cy.get('td').contains('Hobbies').next();
  }
  
  static validatePicture() {
    return cy.get('td').contains('Picture').next();
  }
  
  static validateAddress() {
    return cy.get('td').contains('Address').next();
  }
  
  static validateStateAndCity() {
    return cy.get('td').contains('State and City').next();
  }


}
