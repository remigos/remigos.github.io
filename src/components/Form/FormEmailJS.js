import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const FormEmail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('formtest', 'template_form', form.current, 'user_bEV29DmpV06E8ul81K5dp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Email</label>
      <input type="email" name="user_email" /> 
    </form>
  );
};