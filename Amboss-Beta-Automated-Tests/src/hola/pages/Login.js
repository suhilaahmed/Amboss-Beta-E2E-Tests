import {Hola} from "../utilities/hola";
import XPathSelector from '../utilities/xpath-selector';
import {t} from 'testcafe';

export class Login {

    constructor() {
        //Import Objects and Test Data

        this.holaManager = new Hola();
        this.baseUrl = this.holaManager.TestData.url;
        this.userEmail = this.holaManager.TestData.studentEmail;
        this.userPassword = this.holaManager.TestData.studentPassword;
        this.emailField = this.holaManager.ObjectIdentifiers.loginPage.emailTextField;
        this.passwordField = this.holaManager.ObjectIdentifiers.loginPage.passwordTextField;
        this.signinButton = this.holaManager.ObjectIdentifiers.loginPage.loginButton;
        this.qBankOption = this.holaManager.ObjectIdentifiers.homePage.QBankOption;
        this.errorMessage = this.holaManager.ObjectIdentifiers.loginPage.errorAlert;
    }

    async loginWithValidCredentials () {
        await t
            .maximizeWindow()
            .navigateTo(this.baseUrl)
            .typeText(XPathSelector(this.emailField), this.userEmail)
            .typeText(XPathSelector(this.passwordField), this.userPassword)
            .click(XPathSelector(this.signinButton))
            .typeText(XPathSelector(this.emailField), this.userEmail)
            .typeText(XPathSelector(this.passwordField), this.userPassword)
            .click(XPathSelector(this.signinButton))
            .expect(XPathSelector(this.qBankOption).exists).ok();
    }

    async loginWithInvalidCredentials (email, password) {
        await t
            .maximizeWindow()
            .navigateTo(this.baseUrl)
            .typeText(XPathSelector(this.emailField), email)
            .typeText(XPathSelector(this.passwordField), password)
            .click(XPathSelector(this.signinButton))
            .expect(XPathSelector(this.errorMessage).exists).ok();
    }
}
