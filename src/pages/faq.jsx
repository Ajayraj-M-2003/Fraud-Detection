import React, { useState } from "react";
import "../components/faq.css";

const Faq = () => {
  // State to track the expanded state of each accordion item
  const [expandedItems, setExpandedItems] = useState({});

  // Function to toggle the expanded state of an accordion item
  const toggleAccordion = (itemId) => {
    setExpandedItems((prevExpandedItems) => ({
      ...prevExpandedItems,
      [itemId]: !prevExpandedItems[itemId],
    }));
  };

  return (
    <div className="main-container">
        <div className="container">
      <h2>Frequently Asked Questions</h2>
      <div className="accordion">
        <div className="accordion-item">
          <button
            id="accordion-button-1"
            aria-expanded={expandedItems["accordion-button-1"]}
            onClick={() => toggleAccordion("accordion-button-1")}
          >
            <span className="accordion-title">
            How do I create an account on your platform?
            </span>
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div
            className={`accordion-content ${
              expandedItems["accordion-button-1"] ? "expanded" : ""
            }`}
          >
            <p>
            To create an account, simply click on the "Sign Up" 
            button on the homepage and follow the on-screen 
            instructions to provide your details and set up 
            your account.
            </p>
          </div>
        </div>
        {/* Add similar accordion items here */}

        <div className="accordion-item">
          <button
            id="accordion-button-2"
            aria-expanded={expandedItems["accordion-button-2"]}
            onClick={() => toggleAccordion("accordion-button-2")}
          >
            <span className="accordion-title">
            Can I change my account password?
            </span>
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div
            className={`accordion-content ${
              expandedItems["accordion-button-2"] ? "expanded" : ""
            }`}
          >
            <p>
            Yes, you can change your password at any time.
            Additionally, if you forget your password, there's an option to reset it.
            </p>
          </div>
        </div>


        <div className="accordion-item">
          <button
            id="accordion-button-3"
            aria-expanded={expandedItems["accordion-button-3"]}
            onClick={() => toggleAccordion("accordion-button-3")}
          >
            <span className="accordion-title">
            How can I contact customer support?
            </span>
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div
            className={`accordion-content ${
              expandedItems["accordion-button-3"] ? "expanded" : ""
            }`}
          >
            <p>
            You can contact our customer support team via 
            filling out the contact form on our website. 
            Our support team is available to assist you with any questions or 
            issues you may have.
            </p>
          </div>
        </div>


        <div className="accordion-item">
          <button
            id="accordion-button-4"
            aria-expanded={expandedItems["accordion-button-4"]}
            onClick={() => toggleAccordion("accordion-button-4")}
          >
            <span className="accordion-title">
            How do I submit my assignment?
            </span>
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div
            className={`accordion-content ${
              expandedItems["accordion-button-4"] ? "expanded" : ""
            }`}
          >
            <p>
            You can submit your assignment through our 
            online portal by logging into your account 
            and following the instructions for assignment 
            submission. Make sure to upload all required 
            files and documents before the deadline.
            </p>
          </div>
        </div>


        <div className="accordion-item">
          <button
            id="accordion-button-5"
            aria-expanded={expandedItems["accordion-button-5"]}
            onClick={() => toggleAccordion("accordion-button-5")}
          >
            <span className="accordion-title">
            How do you ensure security?
            </span>
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div
            className={`accordion-content ${
              expandedItems["accordion-button-5"] ? "expanded" : ""
            }`}
          >
            <p>
            We prioritize security through encryption, access controls, 
            regular audits, and adherence to industry standards.
            </p>
          </div>
        </div>



      </div>
    </div>
    </div>
  );
};

export default Faq;
