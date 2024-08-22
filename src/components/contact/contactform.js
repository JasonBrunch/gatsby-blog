import React from "react";
import "./contactform.css";
import WhiteButton from "../buttons/button-white.js";

const ContactForm = () => {
    return (
        <div className="contactform-container">
            <h4>CONTACT</h4>
            <p>Nam sit amet mattis erat. Cras sed tempor nisi. Vivamus elit sem,
                tristique eget eros bibendum, facilisis dapibus leo.
 
            </p>
            <WhiteButton text="CONTACT ME"/>
        </div>
    );
};

export default ContactForm;