import { useState } from "react";
import "./ContactFAQ.css"; // Make sure this file is in the same directory

const faqs = [
  {
    question: "Why donate blood?",
    answer: "Donating blood can save lives. One donation can help up to 3 people!",
  },
  {
    question: "Is blood donation safe?",
    answer: "Yes, it's totally safe. Sterile equipment is used for each donor.",
  },
  {
    question: "How often can I donate?",
    answer: "You can donate blood every 56 days, or plasma more frequently.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-cloud">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${openIndex === index ? "open" : ""}`}
          onClick={() => toggleFAQ(index)}
        >
          <div className="question">{faq.question}</div>
          {openIndex === index && <div className="answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default FAQ;