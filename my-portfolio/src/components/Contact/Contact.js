import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>
        Please feel free to reach out via:
      </p>
      <ul>
        <li>Email: <a href="mailto:jyotishmelwani@gmail.com">jyotishmelwani@gmail.com</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/jyotishmelwani/">https://www.linkedin.com/in/jyotishmelwani/</a></li>
        <li>GitHub: <a href="https://github.com/Jyotish-Melwani">https://github.com/Jyotish-Melwani</a></li>
      </ul>
    </section>
  );
};

export default Contact;
