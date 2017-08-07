# <a name="project">Credit Report</a>

### Table of Contents

1. [About the project](#about)
2. [Project proposal](./proposal.md)
3. [GitHub board](https://github.com/francheska-guzman/credit-report/projects#boards?repos=93885730)
4. [User stories](#userstories)
5. [Wireframes web version](#browser)
6. [Wireframes mobile version](#mobile)
7. [Visual representation of the database](#database)
8. [React components](#components)
9. [Pseudocode](#pseudocode)
10. [Technologies used](#technologies)
11. [Cross-browser compatibility](#compatibility)
12. [See the project](#deployment)

## <a id="about">About the project</a>

General Assembly's Web Development Immersive <br />
Final Project <br />
Developed by Francheska Guzman

## <a name="userstories">User stories</a>

1. As a user who doesn't know what is a Credit Report, and the impact of it in my life; I would like to get information about it, including quick tips for my credit health.
2. As a user, I would like instructions on how to use the website.
3. As a user, I want to get my credit score and a histogram chart to see how my score has changed over the time.
4. As a user interested in get a credit report, I would like to see the following credit factores:<br />
	• Credit card use<br />
	• Payment history<br />
	• Derogatory marks<br />
	• Credit age<br />
	• Total accounts<br />
	• Hard inquiries
5. As a user, I would like a clean dashboard with colorful charts to visualize my financial situation.
6. As a user, I want to protect my personal and financial data by using a login.

## <a name="browser">Wireframes web version</a>

Dashboard overview:

![Browser](./images/browser1.png)

If the user click "View Details" in any of the six (6) credit factors, the page will render the information in the same page. In this example, the user clicked "View Details" for credit card use.

![Browser](./images/browser2.png)

This is another example. Here, the user press "View Details" for payment history.

![Browser](./images/browser3.png)

My account (render user basic information):

![Browser](./images/browser4.png)

## <a name="mobile">Wireframes mobile version</a>

![Mobile](./images/mobile1.png)

## <a name="database">Visual representation of the database</a>

![Database](./images/database.png)

## <a name="components">React components</a>

These are the components and how they are related.

![components](./images/components.png)

## <a name="pseudocode">Pseudocode</a>

1. Make an axios call to the Credit Report API, and get the personal and financial information from an especific user.
2. Find the credit use and credit limit for each account open account.
3. Divide credit use by the credit limit, to compute the utilization ratio.
4. Render the result in the Credit Card Use component in the following format: Credit name, Account Type, Credit Use, Credit Limit and the ratio already computed. (Utilization ratio for each account.)
5. Finally, sum the credit use of all accounts, sum the credit limit of all accounts, and divide it. Render the result in a pie chart. (Utilization ratio in general.)

## <a name="technologies">Technologies used</a>

### Core Stack

- HTML
- CSS
- JavaScript
- React
- Node.js
- Express.js
- PostgreSQL
- Heroku
- GitHub

### APIs

[Credit Report API](https://creditreportapi.herokuapp.com/) - I created this API to add personal and financial information for users, that I will be using to calculate their credit factors and credit score. This is not a final API, I will be adding more data and tables. Inmediatly I made changes to the database, I will be updating the "[Visual representation of the database](#database)".

### Middleware

- Libraries to create responsive charts: [ChartJS](http://www.chartjs.org/), [ChartistJS](http://gionkunz.github.io/chartist-js/), [Fusion Charts](http://www.fusioncharts.com/) and/or [Google Charts](https://developers.google.com/chart/).

### Other sources

- [balsamiq](https://balsamiq.com/) for the wireframes.

- [logomakr](https://logomakr.com/) to create credit card, personal loan, student loan, auto loan, home loan, and business loan logos: 

![Credit Card](./images/creditcard.png)  ![Personal Loan](./images/personalloan.png)  ![Student loan](./images/studentloan.png)  ![Auto Loan](./images/autoloan.png)  ![Home Loan](./images/homeloan.png)  ![Business Loan](./images/businessloan.png)

## <a id="compatibility">Cross-browser compatibility</a>

This site has been tested in the following browsers:

Chrome – Version 59.0.3071.115 

Firefox – Version 54.0.1

Safari – Version 9.1.2

## <a name="deployment">See the project</a>

### Credit Report App: [https://francheska-guzman.github.io/credit-report](https://francheska-guzman.github.io/credit-report)

### Credit Report API: [https://creditreportapi.herokuapp.com](https://creditreportapi.herokuapp.com)

#### [Go back to the Table of Contents](#project)