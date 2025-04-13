import React from "react";
import Contact from "./Contact"; // Using your existing names
import FAQ from "./ContactFAQ"; // Using your existing names
import "./ContactFAQ.css"; // Make sure this CSS file is at the right location

const ContactPage = () => {
  return (
    <div className="contact-faq-container">
      <Contact />
      <FAQ />
    </div>
  );
};

export default ContactPage;