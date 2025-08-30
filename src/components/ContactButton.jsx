import React from "react";

const ContactButton = () => {
  const email = "dls-studios@outlook.com";
  const subject = encodeURIComponent("Inquiry from Website");
  const body = encodeURIComponent("");

  return (
    <button
      className="contact-button"
      onClick={() => window.location.href = `mailto:${email}?subject=${subject}&body=${body}`}
    >
    Contact us
    </button>
  );
};

export default ContactButton;
