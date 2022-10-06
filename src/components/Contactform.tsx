import React, { EventHandler } from 'react';
import styles from '../styles/Home.module.css';

const Contactform = () => {
  function handleSubmit(e: any) {
    e.preventDefault();
    // actually send an email to myself
    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    // send a POST request to API
    fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        message: message,
      }),
    }).then((res) => {
      if (res.ok) {
        alert(
          "Thanks for reaching out! I'll get back to you as soon as possible."
        );
      }
      if (res.status == 405 || res.status == 403) {
        alert("Couldn't process your request. Please try again later.");
      }
    });
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className="flex w-full flex-col gap-20">
            <div id="parent-text">
              <p className="text-3xl text-deepblue font-bold">
                I am waiting for you...
              </p>
            </div>
            <div id="parent-form" className="w-full h-full">
              <div className="mx-auto">
                <div className="p-6 border border-gray-300">
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <label className="block mb-6">
                      <span className="text-gray-700">Your name</span>
                      <input
                        type="text"
                        name="name"
                        className="block w-full mt-1 border-gray-300 shadow-sm focus:border-deepblue"
                        placeholder=" Your name here"
                      />
                    </label>
                    <label className="block mb-6">
                      <span className="text-gray-700">Email address</span>
                      <input
                        name="email"
                        type="email"
                        className="block w-full mt-1 border-gray-300 shadow-sm focus:border-deepblue"
                        placeholder=" me@example.com"
                        required
                      />
                    </label>
                    <label className="block mb-6">
                      <span className="text-gray-700">Subject</span>
                      <input
                        name="subject"
                        type="text"
                        className="block w-full mt-1 border-gray-300 shadow-sm focus:border-deepblue"
                        placeholder=" What are you thinking of..."
                        required
                      />
                    </label>
                    <label className="block mb-6">
                      <span className="text-gray-700">Message</span>
                      <textarea
                        name="message"
                        rows={4}
                        className="block w-full mt-1 border-gray-300 shadow-sm focus:border-deepblue"
                        placeholder=" Tell me what you're thinking about"
                      ></textarea>
                    </label>
                    <div className="mb-6">
                      <button
                        type="submit"
                        className="h-10 px-5 text-white bg-deepblue transition-colors duration-150 focus:shadow-outline hover:bg-deepblue"
                      >
                        Submit query
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactform;
