import emailjs from "emailjs-com";
import React, { useRef } from "react";
import "./contact.css";
import { motion } from "framer-motion";
const Contact = () => {
    const form = useRef();

    const sendMail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_xd03ism",
                "template_75cdc2o",
                form.current,
                "8e2zkhPZsMG1V63tc"
            )
            .then(
                (result) => {
                    alert("Your request sent successfully");
                },
                (error) => {
                    alert("Opps something went wrong");
                }
            );
    };
    return (
        <div className='contacts' id='Contact'>
            <motion.h4
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2 }}
            >
                Contact
            </motion.h4>
            <motion.h2
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, delay: 0.2 }}
            >
                Have any questions?
            </motion.h2>

            <div className='contact'>
                <div className='left'>
                    <motion.div
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2, delay: 0.6 }}
                    >
                        <span>Name :</span>
                        <span>Lingadurai</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2, delay: 0.8 }}
                    >
                        <span>Address :</span>
                        <span>103/B North America,america</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2, delay: 1 }}
                    >
                        <span>Phone :</span>
                        <span>+001 1998 1998</span>
                    </motion.div>
                </div>
                <div className='right'>
                    <motion.h2
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2, delay: 0.2 }}
                    >
                        book your slot
                    </motion.h2>
                    <form ref={form} onSubmit={sendMail}>
                        <motion.input
                            initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2, delay: 0.4 }}
                            type='text'
                            name='userEmail'
                            placeholder='Type somthing'
                        />
                        <motion.button
                            initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 2, delay: 0.6 }}
                            className='btn'
                        >
                            submit
                        </motion.button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
