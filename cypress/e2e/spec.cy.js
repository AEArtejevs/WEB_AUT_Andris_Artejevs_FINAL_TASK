
import { PracticeFormPage } from "../pageObjects/PracticeFormPage"


describe('template spec', () => {
  beforeEach(() => {
    PracticeFormPage.visit();

  });
  it('passes', () => {
    // b. Input all the necessary information in the text fields, buttons, etc, where it is not
    PracticeFormPage.setFirstName('John');
    PracticeFormPage.setLastName('Doe');
    PracticeFormPage.setEmail('JohnDoe@example.com');
    PracticeFormPage.setGender();
    PracticeFormPage.setMobileNumber('0000000000');
    PracticeFormPage.setAddress('Your address here');

    // c. Set the - Date of Birth - with Calendar widget to - 28th of February, 1930.
    PracticeFormPage.setDateOfBirth();
    // d. Set Subjects to Economics.
    PracticeFormPage.setSubjects();
    // e. Set Hobbies to Music.
    PracticeFormPage.setHobbiestoMusic();
    // f. Upload an image of your choice.
    // i. Create folder “files” and put t
    PracticeFormPage.uploadPicture();
    //     g. Set State to NCR.
    PracticeFormPage.setStateToNCR();
    // h. Set City to Delhi.
    PracticeFormPage.setCityToDelhi();
    // i. Click Submit.
    PracticeFormPage.clickSubmit();

    // j. Verify that the information is correct in the modal window.
   PracticeFormPage.validateName().should('have.text', 'John Doe');
    PracticeFormPage.validateEmail().should('have.text', 'JohnDoe@example.com');
    PracticeFormPage.validateGender().should('have.text','Male')
    PracticeFormPage.validateMobile().should('have.text','0000000000');
    PracticeFormPage.validateDateOfBirth().should('have.text','28 February,1930');
    PracticeFormPage.validateSubjects().should('have.text', 'Economics');
    PracticeFormPage.validateHobbies().should('have.text', 'Music');
    PracticeFormPage.validatePicture().should('have.text', 'audiR8.jpg');
    PracticeFormPage.validateAddress().should('have.text', 'Your address here');
    PracticeFormPage.validateStateAndCity().should('have.text', 'NCR Delhi');
  })
})