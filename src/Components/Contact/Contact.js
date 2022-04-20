import './style.scss';

import { Button, TextField } from '@mui/material';
import React from 'react';

function Contact() {
  // height of the TextField
const height = 150

// magic number which must be set appropriately for height
const labelOffset = -6
  return (
    <>
    <div className="contact">
    <div className="div-container-contact">
    <section className="contact-section">
      {" "}
      <div className="div-container">
      <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
<h1>Contact Me </h1>
<div className="name-email-div">
        <TextField
        className="name-textfield"
          id="outlined-basic"
          placeholder="Enter your name"
          label="Name"
          variant="outlined"
         // value={this.state.name}
          //onChange={(e) => this.setState({ name: e.target.value })}
          required
          type="text"
        />

        <TextField
        className="email-textfield"
          id="outlined-basic"
          label="Email"
          placeholder="Enter email address"
          variant="outlined"
          //value={this.state.email}
         // onChange={(e) => this.handleChangeEmail(e)}
        //  error={this.state.emailError}
          required
          type="email"
        />
        </div>
        <br/>
        <div className="subject-message-div">
        <TextField
        className="subject-textfield"
          id="outlined-basic"
          placeholder="Enter Subject"
          label="Subject"
          variant="outlined"
        //  value={this.state.subject}
         // onChange={(e) => this.setState({ subject: e.target.value })}
          required
        />
        <br/>
        <TextField
        className="message-textfield"
          id="outlined-basic"
          placeholder="Enter message"
          label="Message"
          variant="outlined"
          /* styles the wrapper */
  style={{ height }}

  /* styles the label component */
  InputLabelProps={{
    style: {
      height,
      ...( { top: `${labelOffset}px` }),
    },
  }}

  /* styles the input component */
  inputProps={{
      style: {
        height,
        padding: '0 14px',
      },
  }}
        //  value={this.state.subject}
         // onChange={(e) => this.setState({ subject: e.target.value })}
          required
        />
        <br />
        <br />
        </div>
        <div className="button--container">
          <Button size="large" type="submit" className="submit-button" >
            {/*this.state.buttonText*/}
            Send Email
          </Button>
        </div>
      </form>
    </div></section></div></div></>
  );
}

export default Contact;
