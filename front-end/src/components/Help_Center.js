import React, { Component } from 'react';

class HelpCenter extends Component {
  render() {
    return (
      <div className="help-center flex">
      <div className="basic flex-3">
        <div className="center">
        <img alt="Help Center" src="/images/helpcenter.png"/>
        </div>
	      <h2 className="bone">Credit Report Basics</h2>
	  		<p className="indent">A credit report provides information on how you have 
	  		used credit in the past, including how much debt you have, and whether 
	  		or not you’ve paid your bills on time.</p>
	  		<p className="indent">There are three credit bureaus in the United States: 
	  		Experian, Equifax, and Transunion. Each of these credit reporting 
	  		agencies compiles your credit information from various reporting sources, 
	  		such as lenders, into a credit report.</p>
	  		<p className="indent">When you apply for credit cards, student loans, auto loans, 
	  		lenders check your credit report to make decisions about whether 
	  		or not to grant you credit, and about the rates and terms you qualify for.</p>

	      <h2 className="bone">What Does a Credit Report Include?</h2>
	        <li className="indent">Personal information: Your name, birth date, phone numbers.</li>
		    <li className="indent">Credit accounts: Including credit cards, auto loans, mortgages.</li>
		    <li className="indent">Public records: Court judgments, bankruptcies and tax liens.</li>
		    <li className="indent">Recent inquiries: Who has recently asked to view your credit report and when.</li>  
	    <span>Source: <a href="http://www.experian.com/blogs/ask-experian/credit-education/report-basics/">Experian.com</a></span>
      </div>

      <div className="basic faq flex-2">
      <h2 className="bone">FAQ</h2>
      <br/>
      	<details>
		<summary className="question bone">Question 1</summary>
		<p>Answer 1</p>
		</details>

		<details>
		<summary className="question bone">Question 2</summary>
		<p>Answer 2</p>
		</details>

		<details>
		<summary className="question bone">Question 3</summary>
		<p>Answer 3</p>
		</details>
      </div>
      </div>
    );
  }
}

export default HelpCenter;