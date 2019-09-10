import {Login} from '../pages/Login'
import {CustomSessionCreation} from "../pages/customSessionCreation";
import {CustomSession} from "../pages/customeSession";

//Pages' initializer
const loginPage = new Login();
const customSessionCreationPage = new CustomSessionCreation();
const customSessionPage = new CustomSession();

let maximumNumberOfQuestion;
const defaultNumberOfQuestion = "0/40";

fixture`Create New Question Sessions Fixture`
    .httpAuth({
        username: 'qa',
        password: 'assignment',
    })
    .beforeEach(async t => {
        await loginPage.loginWithValidCredentials();
        await customSessionCreationPage.navigateToCustomSession();
    });


// Exam option tests

test('Start custom session with all kind of exams and automatic title', async t => {
    await customSessionCreationPage.selectExamOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions(defaultNumberOfQuestion);
});

test('Start custom session with all kind of exams with images only', async t => {
    await customSessionCreationPage.selectExamOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.selectImagesOnlyOption();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions(defaultNumberOfQuestion);
    await customSessionPage.checkQuestionsContainsImages();
});

test('Start custom session with all kind of exams and empty title', async t => {
    await customSessionCreationPage.selectExamOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.disablAutomaticTitleOption();
    await customSessionCreationPage.enterCustomSessionTitle(' ');
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.customSessionNotCreatedSuccessfully();
});

test('Start custom session with all kind of exams and zero questions', async t => {
    await customSessionCreationPage.selectExamOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.enternumberOfQuestions("0");
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.customSessionNotCreatedSuccessfully();
});

test('Start custom session with all kind of exams and maximum number of question', async t => {
    await customSessionCreationPage.selectExamOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    maximumNumberOfQuestion = await customSessionCreationPage.getMaximumNumberOfQuestions();
    await customSessionCreationPage.enternumberOfQuestions(maximumNumberOfQuestion.split('/')[1]);
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions("0/" + maximumNumberOfQuestion);
});

test('Start custom session with all kind of exams and 500 question', async t => {
    await customSessionCreationPage.selectExamOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.enternumberOfQuestions("500");
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions("0/500");
});

test('Start custom session with all kind of exams and guidance mode', async t => {
    await customSessionCreationPage.selectExamOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.selectGuidanceOption();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions(defaultNumberOfQuestion);
    await customSessionPage.createdInAGuidanceMode();
});

test('Start custom session with all kind of exams and non guidance mode', async t => {
    await customSessionCreationPage.selectExamOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.selectNonGuidanceOption();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions(defaultNumberOfQuestion);
    await customSessionPage.createdInNonAGuidanceMode();
});

test('Start custom session with all kind of exams and exam simulation mode', async t => {
    await customSessionCreationPage.selectExamOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.selectExamSimulationOption();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.examSimulationSessionIsCreatedSuccessfully();
});

// Organ System option tests

test('Start custom session with all kind of Organ systems and automatic title', async t => {
    await customSessionCreationPage.selectOrganSystemsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions(defaultNumberOfQuestion);
});

test('Start custom session with all kind of Organ systems with images only', async t => {
    await customSessionCreationPage.selectOrganSystemsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.selectImagesOnlyOption();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions(defaultNumberOfQuestion);
    await customSessionPage.checkQuestionsContainsImages();
});

test('Start custom session with all kind of Organ systems and empty title', async t => {
    await customSessionCreationPage.selectOrganSystemsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.disablAutomaticTitleOption();
    await customSessionCreationPage.enterCustomSessionTitle(' ');
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.customSessionNotCreatedSuccessfully();
});

test('Start custom session with all kind of Organ systems and zero questions', async t => {
    await customSessionCreationPage.selectOrganSystemsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.enternumberOfQuestions("0");
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.customSessionNotCreatedSuccessfully();
});

test('Start custom session with all kind of Organ systems and maximum number of question', async t => {
    await customSessionCreationPage.selectOrganSystemsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    maximumNumberOfQuestion = await customSessionCreationPage.getMaximumNumberOfQuestions();
    await customSessionCreationPage.enternumberOfQuestions(maximumNumberOfQuestion.split('/')[1]);
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions("0" + maximumNumberOfQuestion);
});

test('Start custom session with all kind of Organ systems and 500 question', async t => {
    await customSessionCreationPage.selectOrganSystemsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.enternumberOfQuestions("500");
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions("0/500");
});

test('Start custom session with all kind of Organ systems and guidance mode', async t => {
    await customSessionCreationPage.selectOrganSystemsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.selectGuidanceOption();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions(defaultNumberOfQuestion);
    await customSessionPage.createdInAGuidanceMode();
});

test('Start custom session with all kind of Organ systems and non guidance mode', async t => {
    await customSessionCreationPage.selectOrganSystemsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.selectNonGuidanceOption();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions(defaultNumberOfQuestion);
    await customSessionPage.createdInNonAGuidanceMode();
});

test('Start custom session with all kind of Organ systems and exam simulation mode', async t => {
    await customSessionCreationPage.selectOrganSystemsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.selectExamSimulationOption();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.examSimulationSessionIsCreatedSuccessfully();
});

// Symptoms option tests

test('Start custom session with all kind of Symptoms and automatic title', async t => {
    await customSessionCreationPage.selectSymptomsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions(defaultNumberOfQuestion);
});

test('Start custom session with all kind of Symptoms with images only', async t => {
    await customSessionCreationPage.selectSymptomsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.selectImagesOnlyOption();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions(defaultNumberOfQuestion);
    await customSessionPage.checkQuestionsContainsImages();
});

test('Start custom session with all kind of Symptoms and empty title', async t => {
    await customSessionCreationPage.selectSymptomsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.disablAutomaticTitleOption();
    await customSessionCreationPage.enterCustomSessionTitle(' ');
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.customSessionNotCreatedSuccessfully();
});

test('Start custom session with all kind of Symptoms and zero questions', async t => {
    await customSessionCreationPage.selectSymptomsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.enternumberOfQuestions("0");
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.customSessionNotCreatedSuccessfully();
});

test('Start custom session with all kind of Symptoms and maximum number of question', async t => {
    await customSessionCreationPage.selectSymptomsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    maximumNumberOfQuestion = await customSessionCreationPage.getMaximumNumberOfQuestions();
    await customSessionCreationPage.enternumberOfQuestions(maximumNumberOfQuestion.split('/')[1]);
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions("0" + maximumNumberOfQuestion);
});

test('Start custom session with all kind of Symptoms and 500 question', async t => {
    await customSessionCreationPage.selectSymptomsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.enternumberOfQuestions("500");
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions("0/500");
});

test('Start custom session with all kind of Symptoms and guidance mode', async t => {
    await customSessionCreationPage.selectSymptomsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.selectGuidanceOption();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions(defaultNumberOfQuestion);
    await customSessionPage.createdInAGuidanceMode();
});

test('Start custom session with all kind of Symptoms and non guidance mode', async t => {
    await customSessionCreationPage.selectSymptomsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.selectNonGuidanceOption();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions(defaultNumberOfQuestion);
    await customSessionPage.createdInNonAGuidanceMode();
});

test('Start custom session with all kind of Symptoms and exam simulation mode', async t => {
    await customSessionCreationPage.selectSymptomsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.selectExamSimulationOption();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.examSimulationSessionIsCreatedSuccessfully();
});

// Subjects option tests

test('Start custom session with all kind of Subjects and automatic title', async t => {
    await customSessionCreationPage.selectSubjectsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions(defaultNumberOfQuestion);
});

test('Start custom session with all kind of Subjects with images only', async t => {
    await customSessionCreationPage.selectSubjectsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.selectImagesOnlyOption();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions(defaultNumberOfQuestion);
    await customSessionPage.checkQuestionsContainsImages();
});

test('Start custom session with all kind of Subjects and empty title', async t => {
    await customSessionCreationPage.selectSubjectsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.disablAutomaticTitleOption();
    await customSessionCreationPage.enterCustomSessionTitle(' ');
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.customSessionNotCreatedSuccessfully();
});

test('Start custom session with all kind of Subjects and zero questions', async t => {
    await customSessionCreationPage.selectSubjectsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.enternumberOfQuestions("0");
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.customSessionNotCreatedSuccessfully();
});

test('Start custom session with all kind of Subjects and maximum number of question', async t => {
    await customSessionCreationPage.selectSubjectsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    maximumNumberOfQuestion = await customSessionCreationPage.getMaximumNumberOfQuestions();
    await customSessionCreationPage.enternumberOfQuestions(maximumNumberOfQuestion.split('/')[1]);
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions("0" + maximumNumberOfQuestion);

});

test('Start custom session with all kind of Subjects and 500 question', async t => {
    await customSessionCreationPage.selectSubjectsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.enternumberOfQuestions("500");
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions("0/500");
});

test('Start custom session with all kind of Subjects and guidance mode', async t => {
    await customSessionCreationPage.selectSubjectsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.selectGuidanceOption();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions(defaultNumberOfQuestion);
    await customSessionPage.createdInAGuidanceMode();
});

test('Start custom session with all kind of Subjects and non guidance mode', async t => {
    await customSessionCreationPage.selectSubjectsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.selectNonGuidanceOption();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions(defaultNumberOfQuestion);
    await customSessionPage.createdInNonAGuidanceMode();
});

test('Start custom session with all kind of Subjects and exam simulation mode', async t => {
    await customSessionCreationPage.selectSubjectsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.selectExamSimulationOption();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.examSimulationSessionIsCreatedSuccessfully();
});

// Learning Cards option tests

test('Start custom session with all kind of Learning Cards and automatic title', async t => {
    await customSessionCreationPage.selectLearningCardsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions(defaultNumberOfQuestion);
});

test('Start custom session with all kind of Learning Cards with images only', async t => {
    await customSessionCreationPage.selectLearningCardsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.selectImagesOnlyOption();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions(defaultNumberOfQuestion);
    await customSessionPage.checkQuestionsContainsImages();
});

test('Start custom session with all kind of Learning Cards and empty title', async t => {
    await customSessionCreationPage.selectLearningCardsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.disablAutomaticTitleOption();
    await customSessionCreationPage.enterCustomSessionTitle(' ');
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.customSessionNotCreatedSuccessfully();
});

test('Start custom session with all kind of Learning Cards and zero questions', async t => {
    await customSessionCreationPage.selectLearningCardsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.enternumberOfQuestions("0");
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.customSessionNotCreatedSuccessfully();
});

test('Start custom session with all kind of Learning Cards and maximum number of question', async t => {
    await customSessionCreationPage.selectLearningCardsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    maximumNumberOfQuestion = await customSessionCreationPage.getMaximumNumberOfQuestions();
    await customSessionCreationPage.enternumberOfQuestions(maximumNumberOfQuestion.split('/')[1]);
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions("0" + maximumNumberOfQuestion);

});

test('Start custom session with all kind of Learning Cards and 500 question', async t => {
    await customSessionCreationPage.selectLearningCardsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.enternumberOfQuestions("500");
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions("0/500");

});

test('Start custom session with all kind of Learning Cards and guidance mode', async t => {
    await customSessionCreationPage.selectLearningCardsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.selectGuidanceOption();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions(defaultNumberOfQuestion);
    await customSessionPage.createdInAGuidanceMode();
});

test('Start custom session with all kind of Learning Cards and non guidance mode', async t => {
    await customSessionCreationPage.selectLearningCardsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.selectNonGuidanceOption();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions(defaultNumberOfQuestion);
    await customSessionPage.createdInNonAGuidanceMode();
});

test('Start custom session with all kind of Learning Cards and exam simulation mode', async t => {
    await customSessionCreationPage.selectLearningCardsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.selectExamSimulationOption();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.examSimulationSessionIsCreatedSuccessfully();
});

// List option tests

test('Start custom session with all kind of List and automatic title', async t => {
    await customSessionCreationPage.selectListsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions(defaultNumberOfQuestion);
});

test('Start custom session with all kind of List with images only', async t => {
    await customSessionCreationPage.selectListsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.selectImagesOnlyOption();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions(defaultNumberOfQuestion);
    await customSessionPage.checkQuestionsContainsImages();
});

test('Start custom session with all kind of List and empty title', async t => {
    await customSessionCreationPage.selectListsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.disablAutomaticTitleOption();
    await customSessionCreationPage.enterCustomSessionTitle(' ');
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.customSessionNotCreatedSuccessfully();
});

test('Start custom session with all kind of List and zero questions', async t => {
    await customSessionCreationPage.selectListsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.enternumberOfQuestions("0");
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.customSessionNotCreatedSuccessfully();
});

test('Start custom session with all kind of List and maximum number of question', async t => {
    await customSessionCreationPage.selectListsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    maximumNumberOfQuestion = await customSessionCreationPage.getMaximumNumberOfQuestions();
    await customSessionCreationPage.enternumberOfQuestions(maximumNumberOfQuestion.split('/')[1]);
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions("0" + maximumNumberOfQuestion);
});

test('Start custom session with all kind of List and guidance mode', async t => {
    await customSessionCreationPage.selectListsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.selectGuidanceOption();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions(defaultNumberOfQuestion);
    await customSessionPage.createdInAGuidanceMode();
});

test('Start custom session with all kind of List and non guidance mode', async t => {
    await customSessionCreationPage.selectListsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.selectNonGuidanceOption();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions(defaultNumberOfQuestion);
    await customSessionPage.createdInNonAGuidanceMode();
});

test('Start custom session with all kind of List and exam simulation mode', async t => {
    await customSessionCreationPage.selectListsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.selectExamSimulationOption();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.examSimulationSessionIsCreatedSuccessfully();
});

// Difficulty option tests

test('Start custom session with all kind of Difficulty and automatic title', async t => {
    await customSessionCreationPage.selectDifficultyOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions(defaultNumberOfQuestion);
});

test('Start custom session with all kind of Difficulty with images only', async t => {
    await customSessionCreationPage.selectDifficultyOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.selectImagesOnlyOption();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions(defaultNumberOfQuestion);
    await customSessionPage.checkQuestionsContainsImages();
});

test('Start custom session with all kind of Difficulty and empty title', async t => {
    await customSessionCreationPage.selectListsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.disablAutomaticTitleOption();
    await customSessionCreationPage.enterCustomSessionTitle(' ');
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.customSessionNotCreatedSuccessfully();
});

test('Start custom session with all kind of Difficulty and zero questions', async t => {
    await customSessionCreationPage.selectDifficultyOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.enternumberOfQuestions("0");
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.customSessionNotCreatedSuccessfully();
});

test('Start custom session with all kind of Difficulty and maximum number of question', async t => {
    await customSessionCreationPage.selectDifficultyOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    maximumNumberOfQuestion = await customSessionCreationPage.getMaximumNumberOfQuestions();
    await customSessionCreationPage.enternumberOfQuestions(maximumNumberOfQuestion.split('/')[1]);
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions("0" + maximumNumberOfQuestion);

});

test('Start custom session with all kind of Difficulty and 500 question', async t => {
    await customSessionCreationPage.selectDifficultyOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.enternumberOfQuestions("500");
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions("0/500");

});

test('Start custom session with all kind of Difficulty and guidance mode', async t => {
    await customSessionCreationPage.selectDifficultyOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.selectGuidanceOption();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions(defaultNumberOfQuestion);
    await customSessionPage.createdInAGuidanceMode();
});

test('Start custom session with all kind of Difficulty and non guidance mode', async t => {
    await customSessionCreationPage.selectDifficultyOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.selectNonGuidanceOption();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions(defaultNumberOfQuestion);
    await customSessionPage.createdInNonAGuidanceMode();
});

test('Start custom session with all kind of Difficulty and exam simulation mode', async t => {
    await customSessionCreationPage.selectDifficultyOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.selectExamSimulationOption();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.examSimulationSessionIsCreatedSuccessfully();
});

// Status option tests

test('Start custom session with all kind of Status and automatic title', async t => {
    await customSessionCreationPage.selectStatusOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions(defaultNumberOfQuestion);
});

test('Start custom session with all kind of Status with images only', async t => {
    await customSessionCreationPage.selectStatusOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.selectImagesOnlyOption();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions(defaultNumberOfQuestion);
    await customSessionPage.checkQuestionsContainsImages();
});

test('Start custom session with all kind of Status and empty title', async t => {
    await customSessionCreationPage.selectStatusOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.disablAutomaticTitleOption();
    await customSessionCreationPage.enterCustomSessionTitle(' ');
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.customSessionNotCreatedSuccessfully();
});

test('Start custom session with all kind of Status and zero questions', async t => {
    await customSessionCreationPage.selectStatusOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.enternumberOfQuestions("0");
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.customSessionNotCreatedSuccessfully();
});

test('Start custom session with all kind of Status and maximum number of question', async t => {
    await customSessionCreationPage.selectStatusOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    maximumNumberOfQuestion = await customSessionCreationPage.getMaximumNumberOfQuestions();
    await customSessionCreationPage.enternumberOfQuestions(maximumNumberOfQuestion.split('/')[1]);
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions("0" + maximumNumberOfQuestion);

});

test('Start custom session with all kind of Status and 500 question', async t => {
    await customSessionCreationPage.selectStatusOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.enternumberOfQuestions("500");
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions("0/500");

});

test('Start custom session with all kind of Status and guidance mode', async t => {
    await customSessionCreationPage.selectStatusOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.selectGuidanceOption();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions(defaultNumberOfQuestion);
    await customSessionPage.createdInAGuidanceMode();
});

test('Start custom session with all kind of Status and non guidance mode', async t => {
    await customSessionCreationPage.selectStatusOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.selectNonGuidanceOption();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
    await customSessionPage.checkNumberOfSessionQuestions(defaultNumberOfQuestion);
    await customSessionPage.createdInNonAGuidanceMode();
});

test('Start custom session with all kind of Status and exam simulation mode', async t => {
    await customSessionCreationPage.selectStatusOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.selectExamSimulationOption();
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.examSimulationSessionIsCreatedSuccessfully();
});

// session Title tests

test('Start custom session with large title', async t => {
    await customSessionCreationPage.selectSubjectsOption();
    await customSessionCreationPage.checkOptionButton();
    await customSessionCreationPage.confirmSelection();
    await customSessionCreationPage.disablAutomaticTitleOption();
    await customSessionCreationPage.enterCustomSessionTitle(customSessionCreationPage.largeTextString);
    await customSessionCreationPage.startCustomSession();
    await customSessionCreationPage.checkSessionIsCreatedSuccessfully();
});