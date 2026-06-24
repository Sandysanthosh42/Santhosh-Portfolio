import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaCopy, FaCheck } from 'react-icons/fa';
const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const copyEmail = () => {
    navigator.clipboard.writeText('developersanthosh15@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const message = data.get('message') as string;
    const subject = encodeURIComponent(`Portfolio Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=developersanthosh15@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
    form.reset();
  };
  return (
    <section id="contact" className="skills-padding reveal-on-scroll">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-5">
            <h6 className="text-center text-cyan fs-6 text-uppercase letter-spacing-2 m-0">Get In Touch</h6>
            <h4 className="text-center pb-2 display-5 fw-bold text-white">Contact</h4>
            <div className="mx-auto" style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-color)', borderRadius: '2px', boxShadow: '0 0 10px var(--accent-glow-strong)' }}></div>
          </div>
        </div>
        <div className="contact-dashboard p-4 p-md-5">
          <div className="row g-5">
            <div className="col-lg-5 text-start d-flex flex-column justify-content-center">
              <h5 className="text-white fw-bold mb-3">Let's talk about a project</h5>
              <p className="text-white-50 fs-6 lh-lg mb-4">
                Have an opportunity, an idea, or just want to chat about code? Feel free to reach out via email, connect on LinkedIn, or drop a message through the form!
              </p>
              <div className="d-flex flex-column gap-3 mb-4">
                <div className="contact-method-card position-relative">
                  <div className="contact-icon-box">
                    <FaEnvelope />
                  </div>
                  <div className="flex-grow-1 overflow-hidden">
                    <span className="text-white-50 fs-8 text-uppercase d-block">Email Address</span>
                    <a 
                      href="mailto:developersanthosh15@gmail.com"
                      className="text-white text-decoration-none fw-semibold fs-7 text-truncate d-block"
                    >
                      developersanthosh15@gmail.com
                    </a>
                  </div>
                  <button 
                    onClick={copyEmail}
                    className="btn btn-sm btn-outline-light border-0 py-2 px-3 text-cyan"
                    title="Copy Email to Clipboard"
                    aria-label="Copy Email"
                  >
                    {copied ? <FaCheck className="text-success" /> : <FaCopy />}
                  </button>
                  <span className={`copy-feedback-badge ${copied ? 'show' : ''}`}>
                    Copied!
                  </span>
                </div>
                <a 
                  href="https://www.linkedin.com/in/santhosh342/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-method-card text-decoration-none"
                >
                  <div className="contact-icon-box">
                    <FaLinkedin />
                  </div>
                  <div>
                    <span className="text-white-50 fs-8 text-uppercase d-block">LinkedIn Profile</span>
                    <span className="text-white fw-semibold fs-7">linkedin.com/in/santhosh342</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <form onSubmit={handleSubmit} className="text-start">
                <div className="form-group-custom">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder=" "
                    className="form-input-custom" 
                    id="contact-name" 
                    required 
                  />
                  <label htmlFor="contact-name" className="form-label-custom">Your Name</label>
                </div>
                <div className="form-group-custom">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder=" "
                    className="form-input-custom" 
                    id="contact-email" 
                    required 
                  />
                  <label htmlFor="contact-email" className="form-label-custom">Email Address</label>
                </div>
                <div className="form-group-custom">
                  <textarea 
                    name="message" 
                    placeholder=" "
                    className="form-input-custom" 
                    id="contact-message" 
                    rows={5} 
                    required 
                  ></textarea>
                  <label htmlFor="contact-message" className="form-label-custom">Your Message</label>
                </div>
                <button 
                  type="submit" 
                  className="btn btn-accent btn-lg w-100 text-uppercase fw-bold letter-spacing-1 py-3"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;