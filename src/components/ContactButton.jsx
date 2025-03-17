import React from "react";

const ContactButton = () => {
  const email = "tina@ramus.com.au";
  const subject = encodeURIComponent("Inquiry from Website");
  const body = encodeURIComponent("");

  return (
    <button
      className="contact-button"
      onClick={() => window.location.href = `mailto:${email}?subject=${subject}&body=${body}`}
    >
    Contact Tina
    </button>
  );
};

export default ContactButton;
