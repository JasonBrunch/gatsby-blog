import React from "react";
import "./fullcontact.css";
import ButtonCoolShadow from "../buttons/button-cool-shadow";

const FullContactForm = () => {

    return (
        <div className="full-contact-container ">
            <div className="full-contact-inner-container ">

                <div className="full-contact-heading-container">

                <h6>KEEP IN TOUCH</h6>
                <h3>CONTACT FORM</h3>
                </div>
                
                <p>You can click here to send me an email message via your standard email client, or fill in the fields below.</p>

                <form className="contact-form ">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="contact-input"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                        className="contact-input"
                    />
                    <textarea
                        name="message"
                        placeholder="Your message"
                        className="contact-input message-input"
                    />


                </form>


                <div className="contact-button-container">

                    <ButtonCoolShadow title="SUBMIT" onClick={() => console.log('Form submitted')} />
                </div>


            </div>
        </div>
    );
};

export default FullContactForm;