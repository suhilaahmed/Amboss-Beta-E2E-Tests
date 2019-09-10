import {Login} from '../pages/Login'

const loginPage = new Login();

fixture `Login Fixture`
    .page `https://egg-hunt.us.next.medicuja.de/us/`
    .httpAuth({
        username: 'qa',
        password: 'assignment',
    });


test('Login with invalid password', async t => {
    await loginPage.loginWithInvalidCredentials(loginPage.userEmail, "invalid_password");
});

test('Login with invalid email', async t => {
    await loginPage.loginWithInvalidCredentials("user@gmail.com", "12345678");
});

test('Login with valid credentials', async t => {
    await loginPage.loginWithValidCredentials();
});



