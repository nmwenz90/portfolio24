"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [mailData, setMailData] = useState({
    to_name: "Nate",
    from_name: "",
    reply_to: "",
    message: "",
    phone: "",
  });
  const { from_name, reply_to, message, phone } = mailData;
  const [error, setError] = useState(null);

  const onChangeMailData = (e) => {
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      from_name.length === 0 ||
      reply_to.length === 0 ||
      message.length === 0 ||
      phone.length === 0
    ) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID, // service id
          process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID, // template id
          mailData,
          process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_API // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({
              from_name: "",
              reply_to: "",
              message: "",
              phone: "",
            });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  return (
    <section className="no-top">
      <div className="container">
        <div className="row g-4 gx-5">
          <div
            className="col-lg-8 offset-lg-2 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <p>
              Whether you have a question, a suggestion, or just want to say
              hello, this is the place to do it. Please fill out the form below
              with your details and message, and we'll get back to you as soon
              as possible.
            </p>
            <form
              name="contactForm"
              id="contact_form"
              className="position-relative z1000"
              method="post"
              // action="#"
              onSubmit={onSubmit}
            >
              <div className="row gx-4">
                <div className="col-lg-6 col-md-6 mb10">
                  <div className="field-set">
                    <span className="d-label fw-bold">Name</span>
                    <input
                      type="text"
                      name="from_name"
                      id="name"
                      className="form-control no-border"
                      placeholder="Your Name"
                      required
                      onChange={onChangeMailData}
                      value={from_name}
                    />
                  </div>
                  <div className="field-set">
                    <span className="d-label fw-bold">Email</span>
                    <input
                      type="text"
                      name="reply_to"
                      id="email"
                      className="form-control no-border"
                      placeholder="Your Email"
                      required
                      onChange={onChangeMailData}
                      value={reply_to}
                    />
                  </div>
                  <div className="field-set">
                    <span className="d-label fw-bold">Phone</span>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="form-control no-border"
                      placeholder="Your Phone"
                      required
                      onChange={onChangeMailData}
                      value={phone}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="field-set mb20">
                    <span className="d-label fw-bold">Message</span>
                    <textarea
                      name="message"
                      id="message"
                      className="form-control no-border"
                      placeholder="Your Message"
                      required
                      defaultValue={""}
                      onChange={onChangeMailData}
                      value={message}
                    />
                  </div>
                </div>
              </div>
              <div
                className="g-recaptcha"
                data-sitekey="6LdW03QgAAAAAJko8aINFd1eJUdHlpvT4vNKakj6"
              />
              <div id="submit" className="mt20">
                <input
                  type="submit"
                  id="send_message"
                  defaultValue="Send Message"
                  className="btn-main btn-line"
                />
              </div>
              <div id="success_message" className="success">
                Your message has been sent successfully. Refresh this page if
                you want to send more messages.
              </div>
              <div id="error_message" className="error">
                Sorry there was an error sending your form. {error}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;

export const ContactForm1 = () => {
  return (
    <form
      name="contactForm"
      id="contact_form"
      className="position-relative z1000"
      method="post"
      action="#"
    >
      <div className="row gx-4">
        <div className="col-lg-6 col-md-6 mb10">
          <div className="field-set">
            <span className="d-label fw-bold">Name</span>
            <input
              type="text"
              name="Name"
              id="name"
              className="form-control no-border"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="field-set">
            <span className="d-label fw-bold">Email</span>
            <input
              type="text"
              name="email"
              id="email"
              className="form-control no-border"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="field-set">
            <span className="d-label fw-bold">Phone</span>
            <input
              type="text"
              name="phone"
              id="phone"
              className="form-control no-border"
              placeholder="Your Phone"
              required
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="field-set mb20">
            <span className="d-label fw-bold">Message</span>
            <textarea
              name="message"
              id="message"
              className="form-control no-border"
              placeholder="Your Message"
              required
              defaultValue={""}
            />
          </div>
        </div>
      </div>
      <div
        className="g-recaptcha"
        data-sitekey="6LdW03QgAAAAAJko8aINFd1eJUdHlpvT4vNKakj6"
      />
      <div id="submit" className="mt20">
        <input
          type="submit"
          id="send_message"
          defaultValue="Send Message"
          className="btn-main btn-line"
        />
      </div>
      <div id="success_message" className="success">
        Your message has been sent successfully. Refresh this page if you want
        to send more messages.
      </div>
      <div id="error_message" className="error">
        Sorry there was an error sending your form.
      </div>
    </form>
  );
};
