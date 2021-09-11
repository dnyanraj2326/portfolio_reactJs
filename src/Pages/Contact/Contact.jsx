import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <>
             <div className="contact">
                <div className="container">
                    <div className="contacts">
                        <div className="Left_contact">
                            <h1>Contact</h1>
                        </div>
                        <div className="right_contact">
                        <form>
                                <input type="text" id="name" placeholder="Name" />
                                <input type="email" id="email" placeholder="Email Address" />
                                <textarea id="message" cols="30" rows="8" placeholder="Message"></textarea>
                                <button> Send </button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
