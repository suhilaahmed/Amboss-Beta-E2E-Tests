import {Hola} from "../utilities/hola";
import XPathSelector from '../utilities/xpath-selector';
import {t} from "testcafe";


export class CustomSession {

    constructor() {
        this.holaManager = new Hola();
        this.createdSessionTitle  = this.holaManager.ObjectIdentifiers.questionsPage.sessionTitle;
        this.createdSessionQuestionCount = this.holaManager.ObjectIdentifiers.questionsPage.sessionQuestionCount;
        this.ImageInQuestion = this.holaManager.ObjectIdentifiers.questionsPage.questionImage;
        this.disablesAnswerstatistics = this.holaManager.ObjectIdentifiers.questionsPage.disableAnswersStats;
        this.viewButton = this.holaManager.ObjectIdentifiers.questionsPage.viewbtn;
        this.hintButton = this.holaManager.ObjectIdentifiers.questionsPage.hintbtn;
        this.highlightButton = this.holaManager.ObjectIdentifiers.questionsPage.highlightbtn
    }

    async createdInAGuidanceMode () {
        await t
            .expect(XPathSelector(this.hintButton).hasAttribute('disabled')).notOk()
            .expect(XPathSelector(this.highlightButton).hasAttribute('disabled')).notOk();
    }

    async createdInNonAGuidanceMode() {
        await t
            .expect(XPathSelector("//button[@data-e2e-test-id= 'hint-btn' and @disabled = '']").exists).ok()
            .expect(XPathSelector(this.highlightButton).hasAttribute('disabled')).ok();
    }

    async checkQuestionsContainsImages() {
        await t
            .expect(XPathSelector(this.ImageInQuestion).exists).ok();
    }

    async checkNumberOfSessionQuestions (numberOfQuestions) {
        await t.expect(XPathSelector(this.createdSessionQuestionCount).innerText).eql(numberOfQuestions);


    }
}