import React, { Component } from 'react';

// console.log("Help Center is working.");

class HelpCenter extends Component {

  // I did not write the paragraphs. I got the information from experian.com.
  // See line 38.

  render() {
    return (
      <div className="help-center flex">
      <div className="basic flex-3">
        <div className="center">

        <img alt="Help Center" src="public/images/helpcenter.png"/>

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
		<summary className="question bone">How can I improve my credit score?</summary>
		<p className="indent">✓ Pay your bills on time. Delinquent payments and collections can have a major negative impact on a credit score.</p>
		<p className="indent">✓ Keep balances low on credit cards and other “revolving credit.” High outstanding debt can affect a credit score.</p>
		<p className="indent">✓ Pay off debt rather than moving it around. Also, don’t close unused cards as a short-term strategy to improve your 
		credit score. Owing the same amount but having fewer open accounts may lower your credit score.</p>
		</details>

      	<details>
		<summary className="question bone">What is a soft inquiry?</summary>
		<p className="indent">When you check your own credit report or give permission to someone like a 
		potential employer to review your credit report, a soft inquiry occurs. 
		Because soft inquiries aren’t linked to a specific application for new credit, 
		they’re only visible on your credit report to you.</p>
		</details>

		<details>
		<summary className="question bone">What is a hard inquiry?</summary>
		<p className="indent">A hard inquiry occurs when a lender with whom you’ve applied for 
		credit (such as mortgage, auto loan or credit card) reviews your credit report as part of their 
		decision-making process. This type of inquiry appears on your 
		credit report and can influence your credit scores.</p>
		</details>
      </div>
      </div>
    );
  }
}

export default HelpCenter;