
import React from "react"
import Fade from "react-reveal/Fade"
import data from "../../yourdata"
import {Button, Form} from 'react-bootstrap';

const ContactForm = () => {
    return (
        <div class="contact-wrapper animated bounceInUp">
            <div class="contact-form">
                <h3>Contact us</h3>
                <form method="post" action="https://getform.io/{your-unique-getform-endpoint}">
                    <p>
                        <label>FullName</label>
                        <input type="text" name="fullname" />
                    </p>
                    <p>
                        <label>Email Adress</label>
                        <input type="email" name="email" />
                    </p>
                    <p>
                        <label>Phone Number</label>
                        <input type="tel" name="phone" />
                    </p>
                    <p>
                        <label>Media</label>
                        <input type="text" name="affair" />
                    </p>
                    <p class="block">
                        <label>Design Ideas</label>
                        <textarea name="message" rows="3"></textarea>
                    </p>
                    <p class="block">
                        <button>
                            Send
                        </button>
                    </p>
                </form>
            </div>
            <div class="contact-info">
                <h3>More Info</h3>
                <ul>
                    <li><i class="fas fa-map-marker-alt"></i> Baker Street</li>
                    <li><i class="fas fa-phone"></i> (111) 111 111 111</li>
                    <li><i class="fas fa-envelope-open-text"></i> contact@website.com</li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident ipsam necessitatibus repellendus?</p>
                <p>Company.com</p>
            </div>
        </div>
    )
}

export default ContactForm


