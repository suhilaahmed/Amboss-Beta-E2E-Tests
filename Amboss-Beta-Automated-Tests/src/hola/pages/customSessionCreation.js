import {Hola} from "../utilities/hola";
import XPathSelector from '../utilities/xpath-selector';
import {Selector,t} from "testcafe";


export class CustomSessionCreation {

    constructor() {

        //Import Objects and Test Data
        this.holaManager = new Hola();
        this.qBankOption = this.holaManager.ObjectIdentifiers.homePage.QBankOption;
        this.customeSessionPage = this.holaManager.ObjectIdentifiers.homePage.customSessionOption;
        this.startSession  = this.holaManager.ObjectIdentifiers.customSessionPage.startSessionButton;
        this.ExamType = this.holaManager.ObjectIdentifiers.customSessionPage.ExamOption;
        this.SymptomsType = this.holaManager.ObjectIdentifiers.customSessionPage.SymptomsOption;
        this.LearningCardsType = this.holaManager.ObjectIdentifiers.customSessionPage.LearningCardsOption;
        this.OrganSystemsType = this.holaManager.ObjectIdentifiers.customSessionPage.OrganSystemsOption;
        this.SubjectsSystemsType = this.holaManager.ObjectIdentifiers.customSessionPage.SubjectsSystemsOption;
        this.ListsSystemsType = this.holaManager.ObjectIdentifiers.customSessionPage.ListsSystemsOption;
        this.DifficultySystemsType = this.holaManager.ObjectIdentifiers.customSessionPage.DifficultySystemsOption;
        this.StatusSystemsType = this.holaManager.ObjectIdentifiers.customSessionPage.StatusSystemsOption;
        this.ImagesOnly = this.holaManager.ObjectIdentifiers.customSessionPage.ImagesOnlyOption;
        this.automaticTitle = this.holaManager.ObjectIdentifiers.customSessionPage.automaticTitleOption;
        this.customSessionTitle = this.holaManager.ObjectIdentifiers.customSessionPage.customSessionTitleInput;
        this.guidanceOption = this.holaManager.ObjectIdentifiers.customSessionPage.guidanceMode;
        this.nonGuidanceOption = this.holaManager.ObjectIdentifiers.customSessionPage.nonGuidanceMode;
        this.ExamSimulationOption = this.holaManager.ObjectIdentifiers.customSessionPage.ExamSimulationMode;
        this.numberOfQuestions = this.holaManager.ObjectIdentifiers.customSessionPage.questionCountInput;
        this.checkButton = this.holaManager.ObjectIdentifiers.customSessionPage.optionCheck;
        this.done = this.holaManager.ObjectIdentifiers.customSessionPage.doneButton;
        this.createdSessionTitle  = this.holaManager.ObjectIdentifiers.questionsPage.sessionTitle;
        this.createdSessionQuestionCount = this.holaManager.ObjectIdentifiers.questionsPage.sessionQuestionCount;
        this.errorMessage = this.holaManager.ObjectIdentifiers.customSessionPage.errorAlert;
        this.lockButton = this.holaManager.ObjectIdentifiers.questionsPage.lockbtn;
        this.largeTextString = this.holaManager.TestData.largeText;
    }

    async navigateToCustomSession() {
        await t
            .click(XPathSelector(this.qBankOption))
            .click(XPathSelector(this.customeSessionPage));
    }

    async selectExamOption() {
        await t
            .click(XPathSelector(this.ExamType));
    }

    async selectSymptomsOption() {
        await t
            .click(XPathSelector(this.SymptomsType));
    }

    async selectLearningCardsOption() {
        await t
            .click(XPathSelector(this.LearningCardsType));
    }

    async selectOrganSystemsOption() {
        await t
            .click(XPathSelector(this.OrganSystemsType));
    }

    async selectSubjectsOption() {
        await t
            .click(XPathSelector(this.SubjectsSystemsType));
    }

    async selectListsOption() {
        await t
            .click(XPathSelector(this.ListsSystemsType));
    }

    async selectDifficultyOption() {
        await t
            .click(XPathSelector(this.DifficultySystemsType));
    }

    async selectStatusOption() {
        await t
            .click(XPathSelector(this.StatusSystemsType));
    }

    async selectImagesOnlyOption() {
        await t
            .click(XPathSelector(this.ImagesOnly));
    }

    async selectGuidanceOption() {
        await t
            .click(XPathSelector(this.guidanceOption));
    }

    async selectNonGuidanceOption() {
        await t
            .click(XPathSelector(this.nonGuidanceOption));
    }

    async selectExamSimulationOption() {
        await t
            .click(XPathSelector(this.ExamSimulationOption));
    }

    async disablAutomaticTitleOption() {
        await t
            .click(XPathSelector(this.automaticTitle));
    }

    async enterCustomSessionTitle(title) {
        await t
            .typeText(XPathSelector(this.customSessionTitle ), title, { replace: true });
    }

    async enternumberOfQuestions(numberOfQuestions) {
        await t
            .typeText(XPathSelector(this.numberOfQuestions ), numberOfQuestions, { replace: true });
    }

    async startCustomSession() {
        await t
            .click(XPathSelector(this.startSession));
    }

    async checkOptionButton() {
        await t
            .click(XPathSelector(this.checkButton));
    }

    async confirmSelection() {
        await t
            .click(XPathSelector(this.done));
    }

    async checkSessionIsCreatedSuccessfully() {
        await t
            .expect(XPathSelector(this.createdSessionTitle).exists).ok()
            .expect(XPathSelector(this.createdSessionQuestionCount).exists).ok();
    }

    async examSimulationSessionIsCreatedSuccessfully() {
        await t
            .expect(XPathSelector(this.lockButton).exists).ok();
    }

    async customSessionNotCreatedSuccessfully () {
        await t
            .expect(XPathSelector(this.errorMessage).exists).ok()
    }
    async getMaximumNumberOfQuestions () {
        return await Selector(XPathSelector("//span[@class = 'base-3289066628--toggled-1932517483']")).innerText;
    }




}
