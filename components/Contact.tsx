'use client'

import { useState } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    
    try {
      const response = await fetch('https://formsubmit.co/dawom2055@gmail.com', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      alert('Oops! There was a problem submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-intro slide-in-left">
            <h2>Let's connect.</h2>
            <p>You can submit through the form or reach out through my social media links in the footer!</p>
          </div>

          <form
            className="contact-form slide-in-right"
            onSubmit={handleSubmit}
          >
            {/* Hidden fields for FormSubmit configuration */}
            <input type="hidden" name="_subject" value="New Contact from Muhammad Dawood's Portfolio" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="form-group">
              <label>Name</label>
              <input name="name" type="text" required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input name="email" type="email" required />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea name="message" required />
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : "Send"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}