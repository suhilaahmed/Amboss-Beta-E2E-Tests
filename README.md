# Amboss-Beta-E2E-Tests
An End to End Javascript test framework for amboss beta version including bug report and test strategy.
## Getting Started
These instructions will get you a copy of the framework up and running up and running on your local machine for testing process.
### Prerequisites
Install the latest testcafe using npm
```
npm install -g testcafe
```

## Running the tests
After cloning the framework you will need to run the following steps
### Install node modules
```
npm install
```
### Run tests
you will need to change directory to tests directory then on terminal 

#### Chrome
```
testcafe chrome --reporter html:../reports/reports.html assertion-timeout 20000
```
#### Safari
```
testcafe safari --reporter html:../reports/reports.html assertion-timeout 20000
```

#### Firefox
```
testcafe firefox --reporter html:../reports/reports.html assertion-timeout 20000
```

### Test report
After the test suites are fully executed navigate to reports folder and check report.html to view output report.
